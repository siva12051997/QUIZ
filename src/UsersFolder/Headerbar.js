import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../AdminFolders/Logo/image.jpg";


class Headerbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issActive: false,
     
    }  
}
  
haandleShow = () => {
  this.setState({ issActive: true });
};
haandleHide = () => {
  this.setState({ issActive: false });
};


  render() {
    return (
        <div>
        <div className="use">
            <Link to="/UserLogin"><p style={{color:"white",marginLeft:"2rem"}}>Login</p></Link> 
            <div style={{color:"white", marginLeft:"0.3rem"}}>/</div>
            <Link to="/UserRegister"><p style={{color:"white",marginLeft:"0.3rem"}}>SignUp</p></Link>
            {/* <p>Online Free Quizzes & Mock Tests </p> */}
       </div>
      {this.state.issActive && <div className="use">
       <Link to="/Headerbar"><p style={{color:"white",marginLeft:"2rem"}}>Logout</p></Link> 
       </div>
        }
        <div>
        <img src={image} style={{ paddingTop: "5px", width: "100%", height: "90%" }}/>
     </div>
     </div>

    );
  }
}
export default Headerbar;
