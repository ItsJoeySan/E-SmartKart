import React, { useState } from "react";
import "./Admin.css";
import Form from "../../components/Form/Form.jsx";

export default function Admin() {
  function handleSubmit(value) {
    console.log("value: :", value);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
