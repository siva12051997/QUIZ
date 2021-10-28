import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headerbar from "./Headerbar";
// import Home from "./Home";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import Main from "./Sections/Main";

import Instruction from "../UsersFolder/Instructions/Instruction";
// import Aptitude from "../UsersFolder/Onlinetest/Aptitude";
import Aptinew from "./Onlinetest/Aptinew";



import Instruction3 from "../UsersFolder/Instructions/Instruction3";
import Reasoning from "../UsersFolder/Onlinetest/Reasoning";

import Instruction2 from "../UsersFolder/Instructions/Instruction2"
import Java from "./Onlinetest/Java";




function Users() {
    return (
  
      <div>
      
  
      <Router>
           <Switch>
           <Route path="/" exact component={Headerbar} />
           {/* <Route path="/Home" exact component={Home} /> */}
           
           <Route path="/UserLogin" exact component={UserLogin} />
           <Route path="/UserRegister" exact component={UserRegister} />
           <Route path="/Main" exact component={Main} />
           
          {/* APTITUDE MODULE */}

          <Route path="/Instruction" exact component={Instruction} />
          {/* <Route path="/Aptitude" exact component={Aptitude} /> */}
             <Route path="/Aptinew" exact component={Aptinew} />


          {/* REASONING  MODULE */}

          <Route path="/Instruction3" exact component={Instruction3} />
          <Route path="/Reasoning" exact component={Reasoning} />

          {/* TECHNICAL MODULE */}

          <Route path="/Instruction2" exact component={Instruction2} />
          <Route path="/Java" exact component={Java} />

           </Switch>
       </Router>
      </div>
       );
      }
      
 export default Users;
       
  
  
  