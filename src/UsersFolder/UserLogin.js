import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../AdminFolders/Logo/image.jpg";
import logo from "../Logo/ptlogo.png";
import $, { error } from "jquery";
// import { Redirect } from "react-router";

// import axios from 'axios';

import { Button, Card, CardBody, Col, Form, Input, Row } from "reactstrap";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entities: {},
      errors: {},

      image: [],
      userName: "",
      userPassword: "",
    };

    // this.handleForm = this.handleForm.bind(this);
    // this.submitLogin = this.submitLogin.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.RegisterForm = this.RegisterForm.bind(this);
  }

  loadDoc = (e) => {
    e.preventDefault();
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    var success = " login sucess";
    $.ajax({
      url: "http://localhost:8081/login/user/" + userName + "/" + userPassword,

      type: "Get", //send it through get method
      headers: {
        Authorization: "Basic " + btoa(userName + ":" + userPassword),
      },
      data: JSON,
    })
      .then((Response) => {
        if (Response == success) {
          this.props.history.push("/Main");
          alert("login success Welcome MR/MS:-" + userName);
        } else {
          alert("Res:-" + Response);
          this.props.history.push("/UserRegister");
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  changeHandlerrr = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
      entities["UserName"] = "";
      entities["Email"] = "";
      this.setState({ entities: entities });
      alert("Details Save Successully Completed");
    }
  }
  validateemployee() {
    let entities = this.state.entities;
    let errors = {};
    let IsValid = true;
    if (!entities["UserName"]) {
      IsValid = false;
      errors["UserName"] = "Please fill the name";
    }

    if (!entities["Password"]) {
      IsValid = false;
      errors["Password"] = "Please enter your password";
    }
    this.setState({
      errors: errors,
    });
    return IsValid;
  }

  render() {
    //   if(this.state.image === true){
    //     return (<Redirect to="/your/redirect/page" />);
    // }else{
    //     return (<div>Login Please</div>);
    // }
    return (
      <div>
        {/* <div className="uses">

      <Link to="/UserLogin"><p style={{color:"white",marginLeft:"2rem"}}>Login</p></Link>
      <div style={{color:"white", marginLeft:"0.3rem"}}>/</div>
      <Link to="/UserRegister"><p style={{color:"white",marginLeft:"0.3rem"}}>SignUp</p></Link>
     </div> */}
        <div className="bg_images">
          <section>
            <div className="imr">
              <img
                src={logo}
                style={{
                  paddingTop: "5px",
                  width: "350px",
                  height: "150px",
                  marginTop: "20px",
                }}
              />
            </div>
            <div className="_6luv">
              <div className="app flex-row align-items-center">
                <section>
                  <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                      <Card className="mx-4">
                        <CardBody className="p-4">

                          <Form id="form_login" onSubmit={this.loadDoc}>
                            <h1 style={{ color: "skyblue" }}>Login Form</h1>
                            <div style={{ paddingTop: "15px" }}>
                              <div className="labs">
                                <label>UserName</label>
                              </div>
                              <input
                                type="text"
                                id="userName"
                                className="mrgn"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.changeHandlerrr}
                                // value={this.state.entities.UserName}
                                // onChange={this.handleChange}
                                placeholder="Enter Username"
                                required
                              />
                              <div className="errorMsg">
                                {this.state.errors.UserName}
                              </div>
                              <div className="labs">
                                <label>Password</label>
                              </div>
                              <input
                                type="password"
                                id="userPassword"
                                className="mrgn"
                                name="userPassword"
                                value={this.state.userPassword}
                                onChange={this.changeHandlerrr}
                                // value={this.state.entities.Password}
                                // onChange={this.handleChange}
                                placeholder="Enter Password"
                                required
                              />
                              <div className="errorMsg">
                                {this.state.errors.Password}
                              </div>
                              <div className="res">
                                <Link to="/UserRegister">
                                  <p>Register Here</p>
                                </Link>
                              </div>
                            </div>
                            {/* <div className="_8icz">
                          <hr />
                        </div> */}
                            <button
                              type="submit"
                              className="suse"
                              style={{ marginLeft: "22px" }}
                            >
                              LOG IN
                            </button>
                            {/* <Link to="/Main">
                        <p>Section</p>
                      </Link> */}
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default UserLogin;

// SECOND TYPE INTEGRATION

// import React, { Component } from "react";
// import axios from 'axios';
// import { Redirect } from 'react-router'

// class UserLogin extends Component  {

//   constructor(props) {
//   super(props);

//   this.state = {
//     userId: null,
//     password: null,
//     fullName: undefined,
//     responseError: false,
//     loggedIn: false,
//     formErrors: {
//       userId: "",
//       password: ""
//     }
//   };
//   }

//    handleSubmit = e => {
//     e.preventDefault();

//     axios.get('http://localhost:8081/login/user/"+userName+"/"+userPassword,', {
//      userId:
//     e.target.elements.userId.value,
//     password: e.target.elements.password.value })
//       .then((response) => {
//         console.log(response);
//         this.setState({ fullName: response.data.fullName, loggedIn: true });
//         console.log(this.state.fullName);
//         console.log(this.state.loggedIn);
//       }).catch((error) => {
//         console.log(error);
//         this.setState({ responseError: true });
//       });

//     };
//     handleChange = e => {
//   e.preventDefault();
//   const { name, value } = e.target;
//   let formErrors = { ...this.state.formErrors };

//   // switch (name) {

//   //   case "userId":
//   //     formErrors.userId = userIdRegex.test(value)
//   //       ? ""
//   //       : "Invalid user ID";
//   //     break;
//   //   case "password":
//   //     formErrors.password =
//   //       value.length < 8 ? "Invalid password" : "";
//   //     break;
//   //   default:
//   //     break;
//   // }

//   this.setState({ formErrors, [name]: value }, () =>
//     console.log(this.state));
//     };
//    render() {
//   const { formErrors } = this.state;
//   const responseError = this.state.responseError;
//   // const loggedIn = this.state.loggedIn;
//   // const { from } = this.props.location.state || '/';
//   if (this.state.loggedIn == true) {
//     return <Redirect to="./Main" />;
//   }
//   return (
//     <div className="wrapper">
//       <div className="form-wrapper">
//       {/* <img src={Logo} className="App-logo" alt="Logo" /> */}
//       <p>To Log In enter your user ID and password.</p>
//         <form onSubmit={this.handleSubmit} noValidate>
//           <div className="userId">
//             <input
//               autoFocus
//               className={formErrors.userId.length > 0 ? "error" : null}
//               placeholder="User ID"
//               type="text"
//               name="userId"
//               noValidate
//               defaultValue="u"
//               onChange={this.handleChange}
//             />
//             {formErrors.userId.length > 0 && (
//               <span className="errorMessage">{formErrors.userId}</span>
//             )}
//           </div>
//           <div className="password">
//             <input
//               className={formErrors.password.length > 0 ? "error" : null}
//               placeholder="Password"
//               type="password"
//               name="password"
//               noValidate
//               onChange={this.handleChange}
//             />
//             {formErrors.password.length > 0 && (
//               <span className="errorMessage">{formErrors.password}</span>
//             )}
//           </div>
//           <div className="createAccount">
//             <button type="submit" disabled={!this.state.userId} disabled=
//        {!this.state.password}>Log in</button>
//           </div>
//         </form>
//         { responseError==true && (
//           <span className="response-error errorMessage">Please enter valid
//     user values</span>
//         ) }
//       </div>

//     </div>
//     )}
//    }

//   export default UserLogin;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// // import image from "../AdminFolders/Logo/image.jpg";
// import logo from "../Logo/ptlogo.png";
// import $, { error } from "jquery";
// // import { Redirect } from "react-router";

// // import axios from 'axios';

// import { Button, Card, CardBody, Col, Form, Input, Row } from "reactstrap";

// class UserLogin extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       entities: {},
//       errors: {},

//       image: [],
//       userName: "",
//       userPassword: "",
//     };

//     // this.handleForm = this.handleForm.bind(this);
//     // this.submitLogin = this.submitLogin.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);

//     // this.handleChange = this.handleChange.bind(this);
//     // this.RegisterForm = this.RegisterForm.bind(this);
//   }

//   loadDoc = (e) => {
//     e.preventDefault();
//     var userName = $("#userName").val();
//     var userPassword = $("#userPassword").val();
//     var success = " login sucess";
//     $.ajax({
//       url: "http://localhost:8081/login/user/" + userName + "/" + userPassword,

//       type: "Get", //send it through get method
//       headers: {
//         Authorization: "Basic " + btoa(userName + ":" + userPassword),
//       },
//       data: JSON,
//     })
//       .then((Response) => {
//         if (Response == success) {
//           this.props.history.push("/Main");
//           alert("login success Welcome MR/MS:-" + userName);
//         } else {
//           alert("Res:-" + Response);
//           this.props.history.push("/UserRegister");
//         }
//       })
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   };

//   changeHandlerrr = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleForm = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleChange(e) {
//     let entities = this.state.entities;
//     entities[e.target.name] = e.target.value;
//     this.setState({
//       entities,
//     });
//   }
//   RegisterForm(e) {
//     e.preventDefault();
//     if (this.validateemployee()) {
//       let entities = {};
//       entities["UserName"] = "";
//       entities["Email"] = "";
//       this.setState({ entities: entities });
//       alert("Details Save Successully Completed");
//     }
//   }
//   validateemployee() {
//     let entities = this.state.entities;
//     let errors = {};
//     let IsValid = true;
//     if (!entities["UserName"]) {
//       IsValid = false;
//       errors["UserName"] = "Please fill the name";
//     }

//     if (!entities["Password"]) {
//       IsValid = false;
//       errors["Password"] = "Please enter your password";
//     }
//     this.setState({
//       errors: errors,
//     });
//     return IsValid;
//   }

//   render() {
//     //   if(this.state.image === true){
//     //     return (<Redirect to="/your/redirect/page" />);
//     // }else{
//     //     return (<div>Login Please</div>);
//     // }
//     return (
//       <div>
//         {/* <div className="uses">

//       <Link to="/UserLogin"><p style={{color:"white",marginLeft:"2rem"}}>Login</p></Link> 
//       <div style={{color:"white", marginLeft:"0.3rem"}}>/</div>
//       <Link to="/UserRegister"><p style={{color:"white",marginLeft:"0.3rem"}}>SignUp</p></Link>
//      </div> */}
//         <div className="bg_images">
//           <section>
//             <div className="imr">
//               <img
//                 src={logo}className="respimg"
//                 style={{
//                   paddingTop: "5px",
//                   marginTop: "20px",
//                 }}
//               />
//             </div>

//             <section>
//               <div className="box">
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="square"></div>
//                 <div className="container">
//                   <div className="form">
//                     <h2>
//                       L<span className="log_o">o</span>gin F
//                       <span className="log_o">o</span>rm
//                     </h2>
//                     <form  onSubmit={this.loadDoc}>
//                       <div className="input__box">
//                         <input
//                           type="text"
//                           placeholder="Username"
//                           name="userName"
//                           id="userName"
//                           value={this.state.userName}
//                           onChange={this.changeHandlerrr}
//                           required
//                         />
//                       </div>
//                       <div className="input__box">
//                         <input
//                           type="password"
//                           id="userPassword"
//                           placeholder="Password"
//                           name="userPassword"
//                          value={this.state.userPassword}
//                          onChange={this.changeHandlerrr}
//                          required
//                         />
//                       </div>
//                       <div class="input__box">
//                         <input type="submit" value="Login" />
//                       </div>
//                       <p style={{paddingTop:"20px"}}className="forget" >
//                         Don't have an account? <a href="/UserRegister">Sign Up</a>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               {/* </CardBody>
//                       </Card>
//                     </Col>
//                   </Row> */}
//             </section>
//             {/* </div>
//             </div> */}
//           </section>
//         </div>
//       </div>
//     );
//   }
// }
// export default UserLogin;
