import Header from "@/components/header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Privacy Policy Content */}
      <section className="py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-dark-blue mb-6">
              Aitenders Privacy Notice
            </h1>
          </div>

          <div className="space-y-8">
            {/* Section 1 - General Information */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                1. General Information
              </h2>
              
              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">1.1 Scope</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Aitenders Privacy Notice ("Privacy Notice") describes how we collect, process, and disclose information related to you as a natural person ("Personal Data"), and what rights you have with respect to the processing of your Personal Data. Under the prerequisite that we act as Controller, this Privacy Notice applies when you:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                <li>visit any of our websites or social media pages,</li>
                <li>access or use any of our applications or platforms, such as Aitenders.com and related instances, Aitenders Academy, Aitenders Community and the Aitenders Client Portal,</li>
                <li>access our cloud application</li>
                <li>register and/or attend to any events hosted or attended by Aitenders,</li>
                <li>contact our customer support,</li>
                <li>do business with us or,</li>
                <li>otherwise interact or communicate with us.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                These services are hereinafter collectively referred to as the "Services". If you decline to provide your Personal Data or ask us to delete it, you may not be able to access or use the Services.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">1.2 Name of Controller and Data Protection Officer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we refer to "Aitenders" in this Privacy Notice, we mean the Aitenders entity that is responsible for the means and purposes of the processing and therefore acts as the Controller of your Personal Data, as follows:
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-aitenders-dark-blue font-medium mb-2">
                  <strong>Aitenders SAS</strong> if you are located outside North America and for all website activities
                </p>
                <p className="text-aitenders-dark-blue">
                  <strong>Address:</strong> 20 rue professeur Benoit Lauras 42000 Saint Etienne
                </p>
                <p className="text-aitenders-dark-blue">
                  <strong>Contact details of Data Protection Officer:</strong> privacy@Aitenders.com
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Any requests or questions related to data protection may be addressed to privacy@Aitenders.com.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3 mt-6">1.3 Update of the Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                We may change or substitute this Privacy Notice at any time in our sole discretion. You should check back regularly for the most up-to-date version of this Privacy Notice and whenever you access one of our Services.
              </p>
            </div>

            {/* Section 2 - Data Categories */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                2. Data Categories
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The categories of data we process depend on your interactions with us and may include one or more of the following data categories.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">2.1 Contact and Business Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For the use of certain Services, contact data may be processed. Contact Data consists of last name, first name, email address, physical address, phone number, country of origin and similar contact information, including in some circumstances usernames and passwords. These may be supplemented by business data such as position, company name and other similar information.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">2.2 Communication and Transaction Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Communication data refers to the data resulting from your interaction with us, e.g., emails, chat messages, webinars visited, files downloaded, and product interest information. We may also collect registration information related to your attendance at one of our events, including travel information, scheduling information, food preferences or allergies, and accessibility requests.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">2.3 Application-Related Usage Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As is true of most hosted services providers, we automatically gather and analyze information on how and whether specific features of our Services are used, such as details about which of our applications and versions are being used, user interactions with the Services (including searches and other actions taken by users), the pages and files viewed, which online trainings are attended, the types of data sources queried, and the types of visualizations created.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">2.4 Device and Browser Data</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit one of our websites or applications, online and technical information from your computer or mobile device may be collected, such as: device type, location, information about the browser type and version, the operating system and version, the ISP or mobile carrier, the IP Address (or proxy server) and geographic areas derived from your IP address, time and date of access, duration of access, referring URL (if any), and identifiers that help us uniquely identify your browser or device.
              </p>
            </div>

            {/* Section 3 - Origin of the data */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                3. Origin of the data
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In most cases, you provide the Personal Data directly to us by accessing one of our websites or by registering and/or using one of the Services. We may also obtain Personal Data from your employer in the context of providing the Services or from third party suppliers, social networks, or partners. To enable collection of data we might use cookies, web beacons or similar technologies (see additional information provided in our Cookie Notice).
              </p>
            </div>

            {/* Section 4 - Purposes for processing */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                4. Purposes for processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use the Personal Data collected as described in this Privacy Notice, as specified in any agreement that incorporates this Privacy Notice, or as disclosed to you in connection with the Services. We do not carry out any statistical evaluation of a data subject's behavior (profiling); in particular, there is no automated decision-making (see Art. 22 Para. 1 and Para. 4 GDPR and Art. 6 Para. 1(b) GDPR).
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">4.1 Providing the Requested Service</h3>
              <p className="text-gray-700 leading-relaxed mb-2">We process your Personal Data to fulfill our contractual obligations to you, including to:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                <li>Provide and deliver products and services (including updates thereto);</li>
                <li>Operate and improve our operations, systems, products and services;</li>
                <li>Understand your preferences to enhance your experience; and</li>
                <li>Provide service and support, such as sending confirmations, invoices, technical notices, updates, security alerts and administrative messages and providing customer support and troubleshooting.</li>
              </ul>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">4.2 Comments and Questions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you contact us via our website, via email or in any other way, we process your Personal Data to understand and respond to your request and to provide customer service. In such circumstances, your request might be internally forwarded to the responsible department at Aitenders.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">4.3 Sales & Marketing Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use your email address for direct advertising, to communicate news about upcoming events, products, and services, and for surveys. We also use your email address, which we receive in connection with the sale of a product or service, for direct advertising of products or services similar to the ones you ordered. Our marketing emails permit you to opt-out of receiving further communications by selecting the "unsubscribe" link.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">4.4 Statistics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To improve performance of the Services, to assess and improve the customer and user experience, to identify future opportunities for development of the Services, and to assess capacity requirements, we may analyze aggregated, anonymized or statistical information based on Personal Data.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">4.5 Security & Compliance</h3>
              <p className="text-gray-700 leading-relaxed">
                We may analyze your Personal Data to maintain the security of the Services and facilities, to enforce our terms and conditions; to protect against, investigate and deter fraudulent, unauthorized, or illegal activity; and to avoid and detect attacks on our website or applications or misuse of our Services.
              </p>
            </div>

            {/* Section 5 - Lawfulness of Processing */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                5. Lawfulness of Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we collect and use your Personal Data, we will only do so where at least one of the following applies:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>We need to process your Personal Data to perform our responsibilities under our contract with you and to provide you with tools and services. [see Art.6 Para 1(b) GDPR]</li>
                <li>We have a legitimate interest to process your personal information. [see Art.6 Para 1(f) GDPR]</li>
                <li>You have given consent to process Personal Data. [see Art.6 Para. 1(a) GDPR]</li>
                <li>It is necessary for us to process your Personal Data to comply with a legal obligation. [see Art.6 Para. 1(c) GDPR]</li>
              </ul>
            </div>

            {/* Section 6 - Cookies and other Tracking Technologies */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                6. Cookies and other Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use session-based and persistent "cookies" and similar technologies such as web beacons to increase user-friendliness and compile information about the usage of our websites and applications. Cookies are created either by us (first-party cookies) or by third-party providers determined by us (third-party cookies). The following describes the types of further cookies we utilize:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Necessary Cookies.</strong> Necessary Cookies are for basic website functionality, e.g., session cookies to transmit the website, authentication cookies, and security cookies. These cookies are strictly necessary for the operation of the website.</li>
                <li><strong>Functional Cookies.</strong> Functional Cookies enhance functions, performance, and services on the website, e.g., cookies used to analyze site traffic, cookies for market research, and cookies to display advertising that is not directed to a particular individual.</li>
                <li><strong>Marketing Cookies.</strong> Marketing Cookies track activity across websites in order to understand your interests, to direct targeted advertising to you, and to track the performance of our advertisements.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please find detailed information on cookies in our Cookie Notice.
              </p>
            </div>

            {/* Section 7 - Recipients */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                7. Recipients
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Personal Data may be transferred to affiliates and partners of Aitenders as well as to a limited number of service providers (Processors) that perform processing operations such as database monitoring, hosting services, ticketing or provisioning of software tools. These service providers process Personal Data on our instructions only and have implemented state-of-the-art technical and organizational measures to safeguard the processed data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we ask third parties to host or present at certain events like webinars or training, we may forward your Personal Data to the respective third party who may use this data to provide access to the event or may contact you for related marketing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If Personal Data is transferred to subsidiaries, partners service providers or third parties located outside the European Economic Area (EEA) which are not subject to an adequacy decision by the European Commission we will ensure that such recipient offers an adequate level of data protection, for instance by entering into EU Standard Contractual Clauses (SCCs) and implementing additional safeguards in accordance with legal requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your Personal Data to comply with legal requirements, such as in response to a court order or a subpoena. In such an event, we will use all reasonable and lawfully available measures to object to overbroad, unclear or otherwise inappropriate requests for information.
              </p>
            </div>

            {/* Section 8 - Duration of Data Storage */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                8. Duration of Data Storage
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Personal Data will be deleted upon your request or as soon as it is no longer required to achieve the purpose for which the Personal Data has been collected, namely, to provide the requested Services. If legal regulations (e.g., by fiscal, commercial, or contractual law) apply that require longer storage of your Personal Data, or if we need your Personal Data to assert legal claims or defend against legal claims, we will store your Personal Data until the expiration of the corresponding retention periods.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any user account and its related data in applications where we act as Controller will be deleted upon your request or after three years of inactivity.
              </p>
            </div>

            {/* Section 9 - Your Rights */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                9. Your Rights
              </h2>
              
              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">9.1 GDPR</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon request, we will inform you whether and which data we have stored about you. Insofar as the legal requirements are met, you have the right to have this data corrected, blocked or deleted. You also have the right to receive Personal Data which you have provided to us, in a structured, commonly used, and machine-readable format and have the right to transmit those data to another Controller under conditions and in accordance with the Regulation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Insofar as we process your data on the basis of the balancing of interests, you have a right of objection if the legal requirements are met.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Where we are relying on consent to process your Personal Data you may withdraw your consent at any time for the future. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-aitenders-dark-blue font-medium">
                  You may exercise your rights by contacting us in writing, with a proof of your identity, at <strong>privacy@Aitenders.com</strong>.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are resident of the EU, you also have the right to direct questions or complaints to the lead supervisory authority.
              </p>

              <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">9.2 California Privacy Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                This section provides additional details about the Personal Data we collect about California residents and the rights afforded to them under the California Consumer Privacy Act or "CCPA." We are extending the same rights to all residents of the U.S. For purposes of the CCPA, the defined term "Personal Data" is the same as the term "Personal Information" as such term is defined in the CCPA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}