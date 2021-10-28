import React from "react";
// import "./App.css";
import Navbar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

import PP from "./Instructions/PP";
import Instr from "./Instructions/Instr";
import Instr1 from "./Instructions/Instr1";


import Aptitude from "./Onlinetest/Aptitude";
import Reasoning from "./Onlinetest/Reasoning";
import Java from "./Onlinetest/Java";
import Technical from "./Onlinetest/Technical";


import Aptinew from "./Onlinetest/Aptinew";





 function Admin() {
  return (

    <div>
     <Router>
     
     <Navbar/>
       <Switch>
       <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />

          {/* INSTRUCTIONS MODULE */}

          <Route path="/PP" exact component={PP} />
          <Route path="/Instr" exact component={Instr} />
          <Route path="/Instr1" exact component={Instr1} />
         

          {/* SECTIONS MODULE */}

          <Route path="/Aptitude" exact component={Aptitude} />
          <Route path="/Reasoning" exact component={Reasoning} />
          <Route path="/Java" exact component={Java} />
          <Route path="/Technical" exact component={Technical} />


          <Route path="/Aptinew" exact component={Aptinew} />
        </Switch>
      </Router>
    </div>
     );
    }
    
    export default Admin;
     






