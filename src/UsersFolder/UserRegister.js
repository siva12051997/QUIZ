import React, { Component } from "react";
import image from "../AdminFolders/Logo/image.jpg";
import logo from "../Logo/ptlogo.png";

import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
class UserRegister extends Component {
  constructor() {
    super();
    // const token = localStorage.getItem("token");
    // let isLogedIn = true;
    // if (token === null) {
    //   isLogedIn = false;
    // }
    this.state = {
      entities: {},
      errors: {},

      post: [],
   
      userName: "",
      email: "",
      userPassword: "",
      confirmPassword: "",
      mobile: "",
    };

    // this.handleForm = this.handleForm.bind(this);
    // this.submitLogin = this.submitLogin.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.RegisterForm = this.RegisterForm.bind(this);
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
    .post(
        "http://localhost:8081/register/saveRegisterDetails",
        this.state
    ,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        userName: "",
        email: "",
        userPassword: "",
        confirmPassword: "",
        mobile: "",})
        
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    alert("Register Successfully");  
}


  


     
  handleChange(e) {
    let entities = this.state.entities;
    entities[e.target.name] = e.target.value;
    this.setState({
      entities,
    });
  }


  RegisterForm(e) {
    e.preventDefault();
    if (this.validateemployee()) {
      let entities = {};
      entities["Name"] = "";
      entities["Email"] = "";
      entities["Password"] = "";
      entities["Confirmpassword"] = "";
      entities["Phonenumber"] = "";
      this.setState({ entities: entities });
      alert("Details Save Successully Completed");
    }
  }
  validateemployee() {
    let entities = this.state.entities;
    let errors = {};
    let IsValid = true;
    if (!entities["Name"]) {
      IsValid = false;
      errors["Name"] = "Please fill the name";
    }
    if (!entities["Email"]) {
      IsValid = false;
      errors["Email"] = "Enter your email id";
    }
    if (typeof entities["Email"] !== "#FF0000") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(entities["Email"])) {
        IsValid = false;
        errors["Email"] = "Email is not Valid";
      }
    }
    if (!entities["Password"]) {
      IsValid = false;
      errors["Password"] = "Please enter your password";
    }
    if (!entities["Confirmpassword"]) {
      IsValid = false;
      errors["Confirmpassword"] = "Please enter your Confirm Password";
    }
    if (!entities["Phonenumber"]) {
      IsValid = false;
      errors["Phonenumber"] = "Please enter your Mobile Number";
    }
    this.setState({
      errors: errors,
    });
    return IsValid;
  }
  render() {
    return (
      <div className="bg_imags">
        <div className="imr">
          <img
            src={logo}
            style={{  paddingTop: "5px", width: "345px", height: "125px", marginTop:"20px" }}
          />
        </div>
        <div className="_6luv">
          <div className="app flex-row align-items-center">
            <section>
              {/* <form onSubmit={this.handleSubmit}> */}
                <Row className="justify-content-center">
                  <Col md="9" lg="7" xl="6">
                    <Card className="mx-4">
                      <CardBody className="p-4">
                        <Form id="form_logins" onSubmit={this.submitHandler}>
                          <h1 style={{ color: "skyblue" }}>
                            Registration Form
                          </h1>
                          <div style={{ paddingTop: "7px" }}>
                            <div className="labs">
                              <label>UserName</label>
                            </div>
                            <input
                              type="text"
                              className="mrgn"
                              name="userName"
                              value={this.state.userName}
                              onChange={this.handleForm}
                              placeholder="Enter Name" required
                            />
                            <div className="errorMsg">
                              {this.state.errors.Name}
                            </div>

                            <div className="labs">
                              <label>Email</label>
                            </div>
                            <input
                              type="text"
                              className="mrgn"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleForm}
                              // value={this.state.entities.Email}
                              // onChange={this.handleChange}
                              placeholder="Enter Email" required
                            />
                            <div className="errorMsg">
                              {this.state.errors.Email}
                            </div>
                            <div className="labs">
                              <label>Password</label>
                            </div>
                            <input
                              type="password"
                              className="mrgn"
                              name="userPassword"
                              value={this.state.userPassword}
                              onChange={this.handleForm}
                              // value={this.state.entities.Password}
                              // onChange={this.handleChange}
                              placeholder="Enter Password" required
                            />
                            <div className="errorMsg">
                              {this.state.errors.Password}
                            </div>
                            <div className="labs">
                              <label>ConfirmPassword</label>
                            </div>
                            <input
                              type="password"
                              className="mrgn"
                              name="confirmPassword"
                              value={this.state.confirmPassword}
                              onChange={this.handleForm}
                              // value={this.state.entities.Confirmpassword}
                              // onChange={this.handleChange}
                              placeholder="Enter Confirm Password" required
                            />
                            <div className="errorMsg">
                              {this.state.errors.Confirmpassword}
                            </div>
                            <div className="labs">
                              <label>Mobile No.</label>
                            </div>
                            <input
                              type="text"
                              className="mrgn"
                              name="mobile"
                              value={this.state.mobile}
                              onChange={this.handleForm}
                              // value={this.state.entities.Phonenumber}
                              // onChange={this.handleChange}
                              placeholder="Enter your Mobile Number" required
                            />
                            <div className="errorMsg">
                              {this.state.errors.Phonenumber}
                            </div>
                          </div>

                          <button type="submit" style={{ marginLeft: "-10px" }}>
                            Register
                          </button>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              {/* </form> */}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default UserRegister;
