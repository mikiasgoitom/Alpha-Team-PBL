import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const history = useHistory();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch user data from the JSON file
    fetch('path/to/your/json/file.json')
      .then(response => response.json())
      .then(data => {
        // Find the user with the matching email and password using Array.find()
        const loggedInUser = data.users.find(user => user.email === email && user.password === password);
        if (loggedInUser) {
          history.push('/profile');
        } else {
          setError('Email or password is incorrect');
        }
      })
      .catch(error => console.error(error));
  };
  
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
    /*const [values, setValues] = useState ({
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
      );*/
}

export default Login;
