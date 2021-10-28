
import React from "react";
import "./App.css";
// import "./AdminFolders/Instructions/Pop.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//  import Admin from "./AdminFolders/Admin";
import Users from "./UsersFolder/Users";
// 
// import Home from "./UsersFolder/Home";
// import UserLogin from "./UsersFolder/UserLogin"
// import UserRegister from "./UsersFolder/UserRegister";
// import Main from "./UsersFolder/Sections/Main";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Admin /> */}
      <Users />
    
     
 
      {/* <Router>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/UserLogin" exact component={UserLogin} />
          <Route path="/UserRegister" exact component={UserRegister} />
          <Route path="/Main" exact component={Main} />
          
        </Switch>
      </Router>  */}
    </div>
  );
}

export default App;



// data:JSON
// , }).then((Response) => 
//     alert("Response:-"+Response))
//   .then(data => console.log(data))
//     .catch(err => console.log(err))
//    }


// loadDoc=(e)=>{
//   e.preventDefault();

// loadDoc(){
//   var userName=$('#userName').val();;
// var userPassword=$('#userPassword').val();;
// $.ajax({
// url: "http://localhost:8081/login/user/"+userName+"/"+userPassword,
// type: "get", //send it through get method
// headers: {
//   "Authorization": "Basic " + btoa(userName + ":" + userPassword)
// },
// data:JSON
// , }).then(res => res.json())
// .then(data => console.log(data))
//   .catch(err => console.log(err))
  
//  }


