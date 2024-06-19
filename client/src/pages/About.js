import React from 'react';
import Layout from '../components/layout/layout';

const About = () => {
  return (
    <Layout title={"About us - Grocery store"}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://play-lh.googleusercontent.com/ZbttYht6zROh5kEIDMsCkQCIFKKmHdLTGB_ZssG-FlpnKezQmPnlHmXYAPKE6ziQWvuo"
              alt="About Us"
              style={{ width: "90%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="bg-primary p-3 text-white text-center mb-4" style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>About Us - Grocery Store</h1>
              <p className="text-justify" style={{ fontSize: "1.1rem" }}>
                Welcome to our grocery store - your one-stop destination for all your grocery needs! Explore our wide selection of fresh produce, pantry staples, and household essentials. With convenient delivery options and competitive prices, shopping for groceries has never been easier. Whether you're planning meals for the week or restocking your pantry, we've got you covered. Shop with confidence and enjoy the convenience of online grocery shopping with Fresh Mart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
