import React from 'react';
import FormInput from '../components/FormInput';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Register = () => {
  const [values, setValues] = useState ({
    fullname: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      errorMessage: "Full name should consist of your name, father's name, grandfather's name.",
      label: "Full name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should a vaild email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      errorMessage: "Enter age.",
      label: "Age",
      required: true,
    },
    {
      id: 4,
      name: "sex",
      type: "sex",
      placeholder: "Sex",
      errorMessage: "Enter sex.",
      label: "Sex",
      pattern: "^[FMfm]$",
      required: true,
    },
    {
      id: 5,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Enter country.",
      label: "Country",
      pattern: "^[a-zA-Z]{}$",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be at least 8 characters long.",
      pattern: "^[a-zA-Z0-9!@#$%^&*]{8,}$",
      label: "Password",
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ];

  //console.log("re-render");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="register">
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <h2>REGISTERATION</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id} {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>

    </div>
  );
}

export default Register;
