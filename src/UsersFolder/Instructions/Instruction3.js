import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsStarFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

class Instruction3 extends Component {
  constructor() {
    super();
    this.state = {
      Instruction: [],
    };
  }

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/java/getJavaQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ Instruction: json });
      });
  }
  render() {
    return (
      <div> 
        <section className="Instruction3">
        <Link to="/Headerbar">
          <p style={{ color: "white", float:"right", fontSize:"18px" }}>Logout</p>
        </Link>
          <div className="cotaines">
            <div className="box">
              <div className="Heading">
                <h1>Instructions</h1>
              </div>
              <p>
                <span className="sub-heading">
                  Read the following instructions carefully:
                </span>
              </p>

              {this.state.Instruction.map((obj) => {
                return (
                  <ul className="oderlist" key={obj.jqId}>
                    <li onClick={() => this.Edit(obj.jqName)}>{obj.jqName}</li>
                  </ul>
                );
              })}

              {/* <ul  key={obj.jqId}>
                   <div> <BsStarFill className="col" />{obj.jqName}</div>
                       </ul> */}

              <div className="stbtns">
                <a href="/Java">START TEST</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Instruction3;


                         //  STATIC PAGE INSTRUCTIONS


// import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// // import { Link } from "react-router-dom";

// class Instruction3 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       time: {},
//     };
//   }

//   render() {
//     return (
//       <div>
//         <section className="Instruction3">
//           <div className="cotaines">
//             <div className="box">
//               <div className="Heading">
//                 <h1>Instructions</h1>
//               </div>
//               <p>
//                 <span className="sub-heading">
//                   Read the following instructions carefully:
//                 </span>
//               </p>
//               <ul className="oderlist">
//                 <li>
//                   Total No of Question: <strong>10</strong>
//                 </li>
//                 <li>
//                   Time alloted : <strong>15</strong> Minutes.
//                 </li>
//                 <li>
//                   Marks for each correct answer: <strong>1</strong> mark
//                 </li>
//                 <li>
//                   Penalty for each incorrect answer: <strong>0</strong> mark
//                 </li>
//                 <li>Click on radio button to select/deselect your answer </li>
//                 <li>
//                   To complete the test, click on <strong>Submit Test</strong>{" "}
//                   button given on the bottom of the test page
//                 </li>
//                 <li>
//                   Test will be submitted automatically if time got expired and
//                   it will display report page{" "}
//                 </li>
//                 <li>DO NOT refresh the page </li>
//               </ul>
//               <div className="stbtns">
//                 <a href="/Java">START TEST</a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default Instruction3;
