import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layout/layout";

const Categories = () => {
  const categories = useCategory();

  if (!categories || categories.length === 0) {
    return (
      <Layout title={"All Categories"}>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row container">
            <p>No categories available.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
