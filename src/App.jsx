import './App.css';
import FormInput from './components/FormInput';
import Navbar from './components/Navbar';
import { useState } from "react";
import {Link} from "react";

const App = () => {
    const [values, setValues] = useState ({
        email: "",
        password: "",
      });
      const inputs = [
          {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should a vaild email address",
          label: "Email",
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be at least 8 characters long.",
          pattern: "^[a-zA-Z0-9!@#$%^&*]{8,}$",
          label: "Password",
          required: true,
        },
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
        <div className="login">
          <Navbar></Navbar>
          <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            {inputs.map((input) => (
              <FormInput
                key={input.id} {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Login</button>
          </form>
    
        </div>
      );
};

export default App;
