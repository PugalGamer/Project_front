import React from "react";
import { Link } from "react-router-dom";
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import Tech from "./Assets/tech1.webp";
import ReactPlayer from "react-player";
import json from "./Assets/json-crud.mp4";
export default function Home() {
  return (
    <div>
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
      <div className="IMG">
        <img src={Tech} alt="spiderman" />
      </div>
      <div>
        <ReactPlayer url={json} controls width={1470} height={750} />
      </div>
    </div>
  );
}
