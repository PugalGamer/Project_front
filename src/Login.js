import React, { useEffect, useState } from "react";
import "./App.css";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [store, setStore] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // https://project-data-rn8z.onrender.com/Users
  useEffect(() => {
    axios
      .get(`https://project-data-rn8z.onrender.com/Users`)
      // .get(`http://localhost:3003/Users`)
      .then((res) => {
        setStore(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const user = store.find(
      (e) => e.email === email && e.password === password
    );
    if (user) {
      console.log("success");
      toast.success("success", {
        theme: "light",
      });
      navigate("/dash");
    } else {
      console.log("invalid");
      toast.error("Invalid email or password", {
        theme: "light",
      });
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <form
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "center",
            margin: 10,
          }}
          onSubmit={handleSubmit}
        >
          <TextBoxComponent
            type="email"
            placeholder="Email"
            floatLabelType="auto"
            width={300}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextBoxComponent
            type="password"
            placeholder="Password"
            floatLabelType="auto"
            width={300}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="e-btn e-primary " style={{ margin: 10 }}>
            log in
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
