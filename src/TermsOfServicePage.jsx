import React from 'react';

export function TermsOfServicePage() {
  // Get the current date in the format: Month Day, Year
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
          Terms of Service
        </h1>
        <p
          className="text-center mb-5"
          style={{
            color: '#fff', // Explicitly setting white text for the "Last updated" line
          }}
        >
          Last updated: {currentDate}
        </p>

        <div
          className="terms-content"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#fff', // White text for content
            zIndex: 1,
          }}
        >
          <p>
            BUILT TO CONQUER ("we", "our", or "us") provides online strength training software and services (the "Services") for individuals looking to track their fitness progress and routines. 
            These Terms of Service ("Agreement") apply to any use of and access to the Services by you, our user.
          </p>

          <p>
            By accessing or using the Services, you are agreeing to be bound by the terms outlined in this Agreement. If you do not agree with all of the terms of this Agreement, you may not use or access the Services.
          </p>

          <p>
            This Agreement is effective ("Effective Date") on the earlier of (a) the date you accept this Agreement by clicking an "I Agree" button or (b) the date you first access or use the Services.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>1. Terms of Service</h2>
          <p>
            By accessing the Services, you agree to comply with these Terms of Service, as well as all applicable laws and regulations. If you disagree with any of the terms, you must cease using the Services.
          </p>
          <p>
            Our Privacy Policy explains how we collect and use information submitted to the Services. By using the Services, you also agree to our Privacy Policy.
          </p>
          <p>
            We may modify these Terms from time to time. Any changes will be effective upon posting the updated version of the Agreement on our website. If we make any material changes, we will notify you via email. Continuing to use the Services after changes are posted signifies your acceptance of the new terms.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>2. Services</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2.1 Access to Services</h3>
          <p>
            We will make the Services available to you, subject to the terms of this Agreement. We reserve the right to suspend or limit access to certain features for maintenance or if we suspect misuse.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2.2 Third-Party Integrations</h3>
          <p>
            Our Services may include integrations with third-party providers (e.g., payment processors). These third-party services are not governed by this Agreement and are subject to separate terms and policies.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2.3 Support</h3>
          <p>
            We provide standard customer support through our contact form, email, and live chat during business hours. Our support team typically responds within 1 business day.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2.4 Free Trial</h3>
          <p>
            We may offer free trial services at our discretion. These free trials are provided "as-is" without warranties, and we may discontinue them at any time without notice.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>3. Your Responsibilities</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.1 User Responsibility</h3>
          <p>
            You are responsible for all activities that occur under your account, including activities by your employees, contractors, or others accessing the Services using your account.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.2 Prohibited Activities</h3>
          <p>
            You agree not to misuse the Services for any illegal or unauthorized purpose. Any such misuse may result in the termination of your access to the Services.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>4. Termination</h2>
          <p>
            We may suspend or terminate your account if we believe that you have violated this Agreement. You may also terminate your account at any time by contacting us.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>5. Disclaimers and Limitation of Liability</h2>
          <p>
            The Services are provided "as-is" without any warranties. We are not liable for any direct or indirect damages resulting from your use of the Services.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>6. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the Services or violation of this Agreement.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>7. Governing Law</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
          </p>

          <h2 className="mt-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>8. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, you can contact us at:
            <br />
            <strong>Email:</strong> support@builtto.conquer.com
          </p>
        </div>
      </div>
    </div>
  );
}
