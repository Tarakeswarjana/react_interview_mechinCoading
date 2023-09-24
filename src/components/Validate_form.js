import { useState } from "react";


export default function Validate_form() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [output, setOutput] = useState([]);
  const [showError, setShowError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const funForm = (e) => {
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);
    setOutput([...output, data]);
    setData({ email: "", password: "" });
  };

  const setEmailFunction = (e) => {
    let value = e.target.value;
    setData({ ...data, email: e.target.value });
    let pattern = /^[a-zA-Z0-9]{3,10}@[a-z]{3,7}\.(com|in)$/;
    //    let pattern = /^[a-zA-z0-9]{6,30}@[a-z]{5,10}\.(in|com)$/;
    // const result = pattern.test(value);
    if (pattern.test(value)) {
      setShowError("Valid");
    } else {
      setShowError("Invalid UserName");
    }
  };

  const setPasswordFunction = (e) => {
    let value = e.target.value;
    setData({ ...data, password: e.target.value });
    let pattern = /^[a-zA-Z0-9]{5,10}[@&$#]{1,10}$/;
    if (pattern.test(value)) {
      setPasswordError("Valid Password");
    } else {
      setPasswordError("Invalid Password");
    }
  };
  return (
    <div className="App">
      <h2>LogIn</h2>
      <div>
        <form onSubmit={funForm}>
          <label>Email</label>
          <input
            placeholder="enter email"
            name="email"
            value={data.email}
            // onChange={(e) => setData({ ...data, email: e.target.value })}
            onChange={(e) => {
              setEmailFunction(e);
            }}
          />
          <div>{showError}</div>
          <br />
          <br />
          <label>Password</label>
          <input
            placeholder="enter password"
            name="password"
            value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            onChange={(e) => {
              setPasswordFunction(e);
            }}
          />
          <div>{passwordError}</div>
          <br />
          <br />
          <button type="submit">LogIn</button>
        </form>
      </div>
    </div>
  );
}