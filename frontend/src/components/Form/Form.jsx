import React, { useState } from "react";
import "../../pages/Admin/Admin.jsx";
import "./Form.css";

export default function Form({ onSubmit }) {
  const initialFormData = {
    name: "",
    mrpPrice: "",
    currentPrice: "",
    imageLinks: "",
    productCategory: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any validation logic here before submitting the form
    onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <div>
      <form className="post-form" onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          MRP Price:
          <input
            type="number"
            name="mrpPrice"
            value={formData.mrpPrice}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Current Price:
          <input
            type="number"
            name="currentPrice"
            value={formData.currentPrice}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image Links (comma-separated):
          <input
            type="text"
            name="imageLinks"
            value={formData.imageLinks}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Product Category:
          <input
            type="text"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
