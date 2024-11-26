import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Gradient background
        position: 'relative',
        padding: '50px 0',
        color: '#fff', // Global white text color
      }}
    >
      {/* Dark overlay for better contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to improve text contrast
          zIndex: 0,
        }}
      ></div>

      {/* Content Container */}
      <div
        className="container my-5 px-4"
        style={{
          maxWidth: '900px',
          position: 'relative', // Ensuring content is on top of the overlay
          zIndex: 1,
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            fontSize: '2.5rem',
            fontFamily: "'Bangers', cursive",
            color: '#fff', // White text for the title
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-center mb-5"
          style={{
            color: '#fff', // Explicitly setting white text for the "Last updated" line
          }}
        >
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div
          className="privacy-content"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#fff', // White text for content
            zIndex: 1,
          }}
        >
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>1. Interpretation and Definitions</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1.1 Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1.2 Definitions</h3>
          <p>
            For the purposes of this Privacy Policy:
          </p>
          <ul>
            <li><strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company:</strong> Refers to BUILT TO CONQUER, located at [Your Address].</li>
            <li><strong>Cookies:</strong> Small files placed on Your device by our website to track your browsing behavior.</li>
            <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
            <li><strong>Service:</strong> The website and online services provided by BUILT TO CONQUER.</li>
            <li><strong>Usage Data:</strong> Data collected automatically when using the Service, including your IP address, browser type, and other diagnostic data.</li>
          </ul>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>2. Collecting and Using Your Personal Data</h2>
          <p>
            We may collect and use Your Personal Data for the following purposes:
          </p>
          <ul>
            <li><strong>To provide and maintain our Service:</strong> We use your information to deliver the services you request.</li>
            <li><strong>To improve our Service:</strong> Your data helps us understand how our Service is used and how we can enhance it.</li>
            <li><strong>To contact You:</strong> We may use your contact information to send you updates and promotional material.</li>
            <li><strong>To provide customer support:</strong> We may use your information to respond to your inquiries and resolve any issues you experience with our Service.</li>
          </ul>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>3. Types of Data Collected</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.1 Personal Data</h3>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information, including:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.2 Usage Data</h3>
          <p>
            Usage Data is collected automatically when using the Service. This data may include information such as your device’s IP address, browser type, and pages visited.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.3 Tracking Technologies and Cookies</h3>
          <p>
            We use cookies and similar tracking technologies to track activity on our Service and store certain information. You can control the use of cookies through your browser settings.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>4. Sharing Your Personal Data</h2>
          <p>
            We may share your data with third parties for the following purposes:
          </p>
          <ul>
            <li><strong>With Service Providers:</strong> We may share your data with third-party companies that assist in providing the Service (e.g., payment processors, email services).</li>
            <li><strong>For Legal Requirements:</strong> We may disclose your data to comply with legal obligations or in response to lawful requests by public authorities.</li>
          </ul>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>5. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>6. Security of Your Personal Data</h2>
          <p>
            We take reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
            <br />
            <strong>Email:</strong> support@builtto.conquer.com
          </p>
        </div>
      </div>
    </div>
  );
}
