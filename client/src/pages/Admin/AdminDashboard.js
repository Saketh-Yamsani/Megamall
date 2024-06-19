import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard" style={containerStyle}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3 style={{ color: '#191970' }}> Admin Name : {auth?.user?.name}</h3>
              <h3 style={{ color: '#191970' }}> Admin Email : {auth?.user?.email}</h3>
              <h3 style={{ color: '#191970' }}> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;