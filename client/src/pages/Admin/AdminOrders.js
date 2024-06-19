import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from '../../components/layout/AdminMenu';
const AdminOrders = () => {
  return (
    <Layout title={"Admin Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Admin Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;