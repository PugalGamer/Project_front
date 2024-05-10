import React from "react";
import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { useState, useEffect } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
registerLicense(
  "ORg4AjUWIQA/Gnt2UFhhQlJBfVldWHxLflFyVWFTel96dFZWESFaRnZdRl1mSXhTdEBiXHpdeHNT"
);

export default function Dash() {
  const [store, setStore] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tool = ["Search", "Print"];

  useEffect(() => {
    axios
      // .get(`http://localhost:3003/Users`)
      .get(`https://project-data-rn8z.onrender.com/Users`)
      .then((res) => {
        setStore(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // .post(`http://localhost:3003/Users`, push)

  const handleSubmit = (e) => {
    e.preventDefault();
    let push = {
      id: id,
      email: email,
      password: password,
    };
    if (id && email && password) {
      axios
        .post(`https://project-data-rn8z.onrender.com/Users`, push)
        .then((res) => {
          console.log(res);
          toast.success("User Added Successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error", {
            theme: "colored",
            position: "top-left",
          });
        });
    } else {
      toast.warning("Please fill all the fields");
    }
  };

  const handleDelete = (id) => {
    if (id) {
      axios
        // .delete(`http://localhost:3003/Users/${id}`)
        .delete(`https://project-data-rn8z.onrender.com/Users/${id}`)

        .then((res) => {
          console.log(res);
          toast.success("Deleted", {
            theme: "dark",
            position: "top-right",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please Enter Id.No to Delete", {
        position: "top-left",
        theme: "colored",
      });
    }
  };
  const handleUpdate = (id) => {
    let put = {
      id: id,
      email: email,
      password: password,
    };
    if (id && email && password) {
      axios
        // .put(`http://localhost:3003/Users/${id}`, put)
        .put(`https://project-data-rn8z.onrender.com/Users/${id}`, put)

        .then((res) => {
          console.log(res);
          toast.success("Updated", {
            theme: "light",
            position: "top-center",
          });
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.warning("Please fill all the fields", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="App">
      <div className="control-container">
        <AppBarComponent colorMode="">
          <ButtonComponent
            cssClass="e-inherit menu"
            iconCss="e-icons e-menu"
          ></ButtonComponent>
          <span>CRUD</span>
          <div className="e-appbar-spacer"></div>
          <Link to={"/home"}>
            <button className="e-btn e-link" style={{ margin: 5 }}>
              Home
            </button>
          </Link>

          <button className="e-btn e-link" style={{ margin: 5 }}>
            About
          </button>
          <button className="e-btn e-link" style={{ margin: 5 }}>
            service
          </button>
          <button className="e-btn e-link" style={{ margin: 5 }}>
            contact
          </button>
          <Link to={"/"}>
            <button className="e-btn e-link" style={{ margin: 5 }}>
              log out
            </button>
          </Link>
        </AppBarComponent>
      </div>
      {/* <marquee>
        {" "}
        CRUD APPLICATION USING syncfusion Ui front-end, json-server back-end{" "}
      </marquee> */}
      <form
        style={{
          backgroundColor: "whitesmoke",
          textAlign: "center",
          margin: 50,
        }}
        onSubmit={handleSubmit}
      >
        <TextBoxComponent
          type="number"
          placeholder="Id"
          floatLabelType="auto"
          width={300}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
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
        <button
          type="submit"
          className="e-btn e-primary"
          style={{ margin: 10 }}
        >
          Create
        </button>
        <ToastContainer />
      </form>
      <div style={{ display: "flex", margin: 40, flexWrap: "wrap" }}>
        {store?.map((e) => (
          <div
            key={e.id}
            className="e-card"
            style={{
              backgroundColor: "whitesmoke",
              width: 250,
              height: 300,
              margin: 15,
              padding: 10,
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <h1>{e.id}</h1>
            <p>{e.email}</p>
            <p>{e.password}</p>
            <button
              className="e-btn e-info  "
              style={{ margin: 5 }}
              onClick={() => handleUpdate(id)}
            >
              Update
            </button>
            <ToastContainer />
            <button
              className="e-btn e-danger"
              style={{ margin: 5 }}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        ))}
      </div>
      <GridComponent dataSource={store} toolbar={tool} style={{ margin: 50 }}>
        <ColumnsDirective>
          <ColumnDirective field="Id" width="100" textAlign="Center" />
          <ColumnDirective field="Email" width="100" textAlign="Center" />
          <ColumnDirective field="Password" width="100" textAlign="Center" />
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
      </GridComponent>
    </div>
  );
}
