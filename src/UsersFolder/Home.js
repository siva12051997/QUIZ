import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import image from "../AdminFolders/Logo/image.jpg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
    };
  }
  render() {
    return (
      <div className="coooo">
        <div className="imr">
          <img
            src={image}
            style={{
              paddingTop: "5px",
              width: "350px",
              height: "150px",
              marginTop: "20px",
            }}
          />
        </div>
        <section style={{ paddingTop: "150px" }}>
          <div className="pep" style={{ paddingTop: "20px" }}>
            <a href="/UserLogin" className="butt butt2">
              Login with User
            </a>
            <a href="/Adminsiva" className="butt butt2">
              Login with Admin
            </a>

            {/* <a href="/" className="butt butt2">Login with Admin</a>     */}
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
