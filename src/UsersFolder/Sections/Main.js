import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
    };
  }
  render() {
    return (
      <div className="containe">
        <Link to="/Headerbar">
          <p style={{ color: "white", float:"right", marginRight:"2rem", fontSize:"18px" }}>Logout</p>
        </Link>
        <section style={{ paddingTop: "300px" }}>
          {/* <div className="imr">
          <img
            src={image}
            style={{ paddingTop: "5px", width: "300px", height: "120px" }}
          />
        </div> */}
          <div className="pep" style={{ paddingTop: "20px" }}>
            <a href="/Instruction" className="boo bot2">
              Aptitude
            </a>
            <a href="/Instruction2" className="boo bot2">
              Reasoning
            </a>
            <a href="/Instruction3" className="boo bot2">
              Java
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Main;

// import React, { Component } from "react";
// // import Typography from '@material-ui/core/Typography';
// // import Container from '@material-ui/core/Container';
// class Main extends Component {
//     constructor() {
//       super();
//       this.state = {
//         title: [],
//       };
//     }
//     render() {
//       return (
//     <section maxWidth="sm">
//       <div component="div" style={{
//         backgroundColor: 'skyblue', height: '100vh'
//       }}>
//      <a href="#" className="butt butt2">Aptitude</a>
//          <a href="#" className="butt butt2">Reasoning</a>
//          <a href="#" className="butt butt2">Technical</a>
//       </div>
//     </section>
//   );
// }
// }
// export default Main;
