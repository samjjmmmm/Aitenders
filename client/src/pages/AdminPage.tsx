// src/pages/AdminPage.tsx
import React, { useState, useEffect, useCallback } from 'react';

// This URL construction is generally reliable for Replit's environment.
const API_BASE_URL = `https://${window.location.hostname.replace('__repl', '-3001')}`;

const EDITABLE_PAGES = ['uc2test', 'homepage', 'product', 'uc-1', 'uc-3', 'uc-4', 'uc-5', 'uc-6'];

// A default structure for a new or empty page to prevent errors.
const EMPTY_PAGE_DATA = {
  en: {
    header_26: { title: '', subtitle: '', cta1: '' },
    portfolio: { title: '', projects: [] },
    // You can add other default sections here if needed
  },
  fr: {
    header_26: { title: '', subtitle: '', cta1: '' },
    portfolio: { title: '', projects: [] },
    // You can add other default sections here if needed
  },
};

// --- Reusable UI Components ---

const Field = ({ label, value, onChange, type = 'text' }) => {
  const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' };
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontWeight: 500 }}>{label}</label>
      {type === 'textarea' ? (
        <textarea value={value || ''} onChange={onChange} style={{ ...inputStyle, minHeight: '80px', fontFamily: 'inherit' }} />
      ) : (
        <input type="text" value={value || ''} onChange={onChange} style={inputStyle} />
      )}
    </div>
  );
};

const ImageUploader = ({ label, value, onUpload, password }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleUpload = async (file) => {
    if (!file) return;
    setIsUploading(true);
    setUploadError('');
    const formData = new FormData();
    formData.append('imageUpload', file);

    try {
      const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        headers: { 'Authorization': password },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || `Server responded with status ${response.status}`);
      }

      if (result.filePath) {
        onUpload(result.filePath);
      } else {
         setUploadError(`Upload Failed: ${result.error || 'Unknown error'}`);
      }
    } catch (e) {
      console.error("Upload failed:", e);
      setUploadError(`Upload failed. Check console for details.`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{marginTop: '1rem'}}>
      <label style={{fontWeight: 500}}>{label}: </label>
      <input type="file" accept="image/*" onChange={(e) => e.target.files && handleUpload(e.target.files[0])} disabled={isUploading} />
      {isUploading && <p>Uploading...</p>}
      {uploadError && <p style={{color: 'red'}}>{uploadError}</p>}
      {value && <img src={value.startsWith('http') ? value : `${API_BASE_URL}${value}`} alt="preview" style={{ maxWidth: '150px', border: '1px solid #ddd', marginTop: '8px', display: 'block' }} />}
    </div>
  );
};

// --- Main Admin Page Component ---

export default function AdminPage() {
  const [selectedPage, setSelectedPage] = useState(EDITABLE_PAGES[0]);
  const [pageData, setPageData] = useState(null);
  const [activeLang, setActiveLang] = useState('en');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  const loadPageData = useCallback(async (slug) => {
    setIsLoading(true);
    setMessage('');
    console.log(`Attempting to fetch data for slug: '${slug}' from URL: ${API_BASE_URL}/api/page/${slug}`);

    try {
      const res = await fetch(`${API_BASE_URL}/api/page/${slug}`);

      // Check if the server responded with an error (e.g., 404, 500)
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Failed to parse error response." }));
        throw new Error(`Server error: ${res.status} - ${errorData.error || res.statusText}`);
      }

      const data = await res.json();

      // If data is empty from DB, use the default structure
      if (Object.keys(data).length === 0) {
        console.log("No data found in DB, using empty page structure.");
        setPageData(EMPTY_PAGE_DATA);
      } else {
        // Deep merge the loaded data with the empty structure to ensure all keys exist
        setPageData({
            en: {...EMPTY_PAGE_DATA.en, ...data.en},
            fr: {...EMPTY_PAGE_DATA.fr, ...data.fr}
        });
      }
    } catch (error) {
      console.error("Failed to load page data:", error);
      setMessage(`Error: Could not load page data. Check the browser console for details.`);
      setPageData(EMPTY_PAGE_DATA); // Set to empty data on error to prevent UI crash
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPageData(selectedPage);
  }, [selectedPage, loadPageData]);

  const handleDataChange = (path, value) => {
    setPageData(prevData => {
      const keys = path.split('.');
      // Deep copy to avoid state mutation issues
      const newData = JSON.parse(JSON.stringify(prevData));
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]] = current[keys[i]] || (/\d+/.test(keys[i+1]) ? [] : {});
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const savePageData = async () => {
    setMessage('Saving...');
    try {
      const response = await fetch(`${API_BASE_URL}/api/page/${selectedPage}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': password,
        },
        body: JSON.stringify(pageData),
      });
      const result = await response.json();

      if (!response.ok) {
         throw new Error(result.error || `Server responded with ${response.status}`);
      }

      setMessage(result.message || 'Saved successfully!');
    } catch (error) {
      console.error("Save Error:", error);
      setMessage(`Save Error: ${error.message}. Check console for details.`);
    }
  };

  const addProject = () => {
    const newProject = { title: '', value: '', description: '', category: '', cta_text: '', imageSrc: '' };
    // Ensure the projects array exists before trying to spread it
    const currentProjects = pageData?.[activeLang]?.portfolio?.projects || [];
    handleDataChange(`${activeLang}.portfolio.projects`, [...currentProjects, newProject]);
  };

  // This is the loading screen that was getting stuck
  if (isLoading) return <div>Loading Content Admin for '{selectedPage}'...</div>;

  // This can happen if loading fails and we don't even have the empty structure
  if (!pageData) return <div>Error: Page data could not be initialized. Check the console.</div>;

  const currentLangData = pageData[activeLang] || {};
  const portfolioData = currentLangData.portfolio || { title: '', projects: [] };
  const headerData = currentLangData.header_26 || { title: '', subtitle: '', cta1: '' };


  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: 'auto', color: '#333' }}>
      <h1 style={{borderBottom: '2px solid #eee', paddingBottom: '1rem'}}>Website Content Manager</h1>

      <div style={{ background: '#f7f7f7', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <label><strong>Select Page to Edit:</strong></label>
        <select value={selectedPage} onChange={e => setSelectedPage(e.target.value)} style={{ marginLeft: '1rem', padding: '8px' }}>
          {EDITABLE_PAGES.map(slug => <option key={slug} value={slug}>{slug}</option>)}
        </select>
        <div style={{ marginTop: '1rem' }}>
          <label><strong>Admin Password:</strong> </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px' }} placeholder="Enter password to save/upload"/>
        </div>
      </div>

      <div>
        <button onClick={() => setActiveLang('en')} style={{ padding: '10px 15px', border: '1px solid #ccc', background: activeLang === 'en' ? '#007bff' : '#eee', color: activeLang === 'en' ? 'white' : 'black' }}>English</button>
        <button onClick={() => setActiveLang('fr')} style={{ padding: '10px 15px', border: '1px solid #ccc', background: activeLang === 'fr' ? '#007bff' : '#eee', color: activeLang === 'fr' ? 'white' : 'black', marginLeft: '-1px' }}>French</button>
      </div>

      <hr style={{ margin: '2rem 0' }}/>

      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <h2>Hero Section (Header_26)</h2>
        <Field label="Title" value={headerData.title} onChange={e => handleDataChange(`${activeLang}.header_26.title`, e.target.value)} type="textarea"/>
        <Field label="Subtitle" value={headerData.subtitle} onChange={e => handleDataChange(`${activeLang}.header_26.subtitle`, e.target.value)} type="textarea"/>
        <Field label="CTA Button 1 Text" value={headerData.cta1} onChange={e => handleDataChange(`${activeLang}.header_26.cta1`, e.target.value)} />
      </div>

      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
        <h2>Portfolio Section</h2>
        <Field label="Section Title" value={portfolioData.title} onChange={e => handleDataChange(`${activeLang}.portfolio.title`, e.target.value)} />
        <h4 style={{marginTop: '2rem'}}>Projects</h4>
        {portfolioData.projects.map((proj, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '1rem', marginTop: '1rem', borderRadius: '5px' }}>
            <h5 style={{marginTop: 0}}>Project #{index + 1}</h5>
            <Field label="Title" value={proj.title} onChange={e => handleDataChange(`${activeLang}.portfolio.projects.${index}.title`, e.target.value)} type="textarea"/>
            <Field label="Value (e.g., 400 offers / year)" value={proj.value} onChange={e => handleDataChange(`${activeLang}.portfolio.projects.${index}.value`, e.target.value)} />
            <Field label="Description" value={proj.description} onChange={e => handleDataChange(`${activeLang}.portfolio.projects.${index}.description`, e.target.value)} type="textarea"/>
            <Field label="Category" value={proj.category} onChange={e => handleDataChange(`${activeLang}.portfolio.projects.${index}.category`, e.target.value)} />
            <Field label="CTA Text (e.g., Read more)" value={proj.cta_text} onChange={e => handleDataChange(`${activeLang}.portfolio.projects.${index}.cta_text`, e.target.value)} />
            <ImageUploader 
              label="Project Image"
              value={proj.imageSrc}
              password={password}
              onUpload={filePath => handleDataChange(`${activeLang}.portfolio.projects.${index}.imageSrc`, filePath)}
            />
          </div>
        ))}
        <button onClick={addProject} style={{marginTop: '1rem', padding: '10px 15px'}}>+ Add Project</button>
      </div>

      <hr style={{ margin: '2rem 0' }}/>

      <div style={{ marginTop: '2rem', background: '#f0f8ff', padding: '1rem', borderRadius: '8px' }}>
        <button onClick={savePageData} style={{ background: '#28a745', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '5px' }}>
          Save Changes for '{selectedPage}' Page
        </button>
        {message && <p style={{ marginTop: '1rem' }}><strong>Status:</strong> {message}</p>}
      </div>
    </div>
  );
}