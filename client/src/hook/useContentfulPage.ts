// src/hook/useContentfulPage.ts
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

// This safely gets your secrets from Replit
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Check if secrets are missing
if (!spaceId || !accessToken) {
  throw new Error("Contentful credentials are not set in Replit Secrets. Please add VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN.");
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export function useContentfulPage(pageSlug: string) {
  const [pageData, setPageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pageSlug) {
        setIsLoading(false);
        return;
    };

    setIsLoading(true);
    // This fetches the "Page" and all its linked "Sections"
    client.getEntries({
      content_type: 'page',
      'fields.slug': pageSlug,
      include: 3, // Includes linked data 3 levels deep (Page -> Section -> Feature Item)
    })
    .then((response) => {
      if (response.items.length > 0) {
        setPageData(response.items[0].fields);
      } else {
        setPageData(null); // Explicitly set to null if not found
      }
      setIsLoading(false);
    })
    .catch(error => {
      console.error("Error fetching Contentful data:", error);
      setPageData(null);
      setIsLoading(false);
    });
  }, [pageSlug]);

  return { pageData, isLoading };
}