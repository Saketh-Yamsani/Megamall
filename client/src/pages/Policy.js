import React from 'react';
import Layout from '../components/layout/layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7658.jpg"
              alt="Privacy Policy"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="p-3 text-white text-center mb-4" style={{ backgroundColor: "#B7E4C7", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>Privacy Policy</h1>
              <div className="privacy-content">
                <p><strong>Data Collection:</strong> We collect personal information such as name, email, and address for the purpose of providing our services.</p>
                <p><strong>Data Usage:</strong> The collected data is used to personalize user experience, improve our website, and process transactions.</p>
                <p><strong>Data Protection:</strong> We implement security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information.</p>
                <p><strong>Data Sharing:</strong> We may share personal information with trusted third parties for specific purposes such as payment processing and marketing.</p>
                <p><strong>Cookies:</strong> We use cookies to enhance user experience and track website usage. Users have the option to disable cookies in their browser settings.</p>
                <p><strong>Policy Updates:</strong> This privacy policy is subject to change without notice. Users are encouraged to check this page periodically for any updates.</p>
                <p><strong>Contact Us:</strong> If you have any questions or concerns regarding our privacy policy, please contact us at privacy@example.com.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
