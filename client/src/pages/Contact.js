import React from 'react';
import Layout from '../components/layout/layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container mt-5 mb-5">
        <div className="row contactus">
          <div className="col-md-6">
            <img
              src="https://www.cognitivemarketresearch.com/assets/images/blog/3b72c9b6a7f90adc582b41785e5e5342.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              For any inquiries or product information, don't hesitate to give us a call at any time - we're here for you 24/7!
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.help@freshmart.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 35465768796
            </p>
            <p className="mt-3">
              <BiSupport /> : 0000-0000-0000 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
