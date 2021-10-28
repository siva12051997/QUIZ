// import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// // import { IoEyeSharp } from "react-icons/io5";
// import { AiFillCloseCircle } from "react-icons/ai";
// // import { Link } from "react-router-dom";

// class Reasoning extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showButton: true,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,


//       minutes: 20,
//       seconds: 0,
//       image: [],
//       aqoTwo:"",
//       aqoOne:"",
//       aqoThree:"",
//       aqoFour:""  
//     };
//   }

   
//   // PAGE SHOW & HIDE
  
//   postShow = () => {
//     this.setState({ ibActive: true });
//   };
//   postHide = () => {
//     this.setState({ ibActive: false });
//   };

//   toggle = () => {
//     this.setState({
//       showButton: true,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle2 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: true,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle3 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: true,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle4 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: true,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle5 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: true,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle6 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: true,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle7 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: true,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle8 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: true,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle9 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: true,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle10 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: true,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle11 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: true,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle12 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: true,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle13 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: true,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle14 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: true,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle15 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: true,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle16 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: true,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle17 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: true,
//       showButton18: false,
//       showButton19: false,
//       showButton20: false,
//     });
//   };

//   toggle18 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: true,
//       showButton19: false,
//       showButton20: false,
//     });
//   };
//   toggle19 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: true,
//       showButton20: false,
//     });
//   };

//   toggle20 = () => {
//     this.setState({
//       showButton: false,
//       showButton2: false,
//       showButton3: false,
//       showButton4: false,
//       showButton5: false,
//       showButton6: false,
//       showButton7: false,
//       showButton8: false,
//       showButton9: false,
//       showButton10: false,
//       showButton11: false,
//       showButton12: false,
//       showButton13: false,
//       showButton14: false,
//       showButton15: false,
//       showButton16: false,
//       showButton17: false,
//       showButton18: false,
//       showButton19: false,
//       showButton20: true,
//     });
//   };

//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }

//   componentWillMount() {
//     this.myInterval = setInterval(() => {
//       const { seconds, minutes } = this.state;

//       if (seconds > 0) {
//         this.setState(({ seconds }) => ({
//           seconds: seconds - 1,
//         }));
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(this.myInterval);
//         } else {
//           this.setState(({ minutes }) => ({
//             minutes: minutes - 1,
//             seconds: 59,
//           }));
//         }
//       }
//     }, 1000);
//   }

  
 
// // INTEGRATION

// componentDidMount() {
//   fetch("http://" + window.hostname + "/reasoning/getReasoningQuestions" )
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       this.setState({
//         image: json,
//       });
//     });
//   console.log(this.state.image);
// }

// changeHandlerrr = (e) => {
//   this.setState({ [e.target.name]: e.target.value });
// };

//   render() {
//     const { image } = this.state;
//     const { minutes, seconds } = this.state;
//     return (
//       <div>
//         <section className="test-timer" id="countdown">
//           {minutes === 0 && seconds === 0 ? (
//             <h1></h1>
//           ) : (
//             <h1>
//               {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//             </h1>
//           )}
//         </section>
//       <form className="fors">
//         <div>
//           <section className="centeres">
//             <div className="contain">
//               <div className="nquizbox">
//                 <div className="page-heading">
//                   <h1>REASONING EXAMINATIONS</h1>
//                   <h1 style={{ float: "right",marginRight:"120px" }}>Total Questions:- 20</h1>
//                 </div>
//                 {this.state.image.map((igm) => (  <div>              
//                 <ul>
//                 {this.state.showButton ? (
//                 <div>
//                   <div style={{ marginLeft: "18px"}}> 
//                  <p>The Team of subject matter experts of JagranJosh has 
//                     come up with all new Conceptual Practice Test on Quantitative Aptitude- Data 
//                     Interpretation which contains topics such as Pie Chart, Tables, Graphs, 
//                     Combination of graphs and Miscellaneous. </p></div>
//                     <li className="_question" id="_Q1">
//                       <p>
//                         <strong>Q1. </strong> {igm.rqName}
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_language"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                              {igm.rqoOne}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_language"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                              {igm.rqoTwo}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_language"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                            {igm.rqoThree}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_language"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                           {igm.rqoFour}
//                           </label>
//                         </div>
                       
//                       </ul>
//                     </li>
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle2}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}

//                 {this.state.showButton2 ? (
//                        <div>
//                       <li className="_question ca" id="_Q2">
//                       <p>
//                         <strong>Q2. </strong>what is java ?
//                          {/* {igm.rqName} */}
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="age"
                            
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
                          
//                             {/* {igm.rqoOne} */} software
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="age"
                           
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
                          
//                             {/* {igm.rqoTwo} */} hardware
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="age"
                          
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
                          
//                             {/* {igm.rqoThree} */}it
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="age"
                            
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
                          
//                           {/* {igm.rqoFour} */}non-it
//                           </label>
//                         </div>
                       
//                       </ul>
//                     </li>
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle}
//                             className="prev-slide prev"
//                           >
//                             {" "}
//                             Previous <i className="icon-prev"></i>
//                           </a>
                        
//                           <a
//                             href="#"
//                             onClick={this.toggle3}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}
                   
//                    {this.state.showButton3 ? (
//                       <div>
//                       <li className="_question ca">
//                       <p>
//                         <strong>Q3. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="ame"
                           
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="ame"
                           
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="ame"
                            
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="ame"
                           
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                       
//                       </ul>
//                     </li> 
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle2}
//                             className="prev-slide prev"
//                           >
//                             {" "}
//                             Previous <i className="icon-prev"></i>
//                           </a>
                         
//                           <a
//                             href="#"
//                             onClick={this.toggle4}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}

//                     {this.state.showButton4 ? (
//                       <div> 
//                          <li className="_question ca">
//                       <p>
//                         <strong>Q4. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav"
                           
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav"
                          
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk
//                           </label>
//                         </div>
                       
//                       </ul>
//                     </li>
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle3}
//                             className="prev-slide prev"
//                           >
//                             {" "}
//                             Previous <i className="icon-prev"></i>
//                           </a>
                        
//                           <a
//                             href="#"
//                             onClick={this.toggle5}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}

//                      {this.state.showButton5 ? (
//                       <div>
//                          <li className="_question ca">
//                       <p>
//                         <strong>Q5. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                      
//                       </ul>
//                     </li>
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle4}
//                             className="prev-slide prev"
//                           >
//                             {" "}
//                             Previous <i className="icon-prev"></i>
//                           </a>
                         
//                           <a
//                             href="#"
//                             onClick={this.toggle6}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}
                 

//                  {this.state.showButton6 ? (
//                       <div>
//                     <li className="_question ca">
//                       <p>
//                         <strong>Q6. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_l"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_l"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_l"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_l"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                     </li>
//                     <div className="prev-next">
//                           <a
//                             href="#"
//                             onClick={this.toggle5}
//                             className="prev-slide prev"
//                           >
//                             {" "}
//                             Previous <i className="icon-prev"></i>
//                           </a>
                        
//                           <a
//                             href="#"
//                             onClick={this.toggle7}
//                             className="next-slide next"
//                           >
//                             Next <i className="icon-next"></i>
//                           </a>
//                         </div>
//                       </div>
//                     ) : null}
//              {this.state.showButton7 ? (
//                       <div>
//                     <li className="_question ca">
//                       <p>
//                         <strong>Q7. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_la"
                            
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_la"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_la"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_la"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                       
//                       </ul>
                   
//                     <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle6}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
                           
//                             <a
//                               href="#"
//                               onClick={this.toggle8}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                         </div>
//                         </li>
//                       </div>
//                     ) : null}

//                 {this.state.showButton8 ? (
//                       <div>
//                     <li className="_question ca">
//                       <p>
//                         <strong>Q8. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_lan"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lan"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lan"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lan"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                       
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle7}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
                           
//                             <a
//                               href="#"
//                               onClick={this.toggle9}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                     </li>
//                     </div>
//                     ) : null}

                   
//                    {this.state.showButton9 ? (
//                       <div> 
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q9. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_lang"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lang"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lang"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_lang"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                       
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle8}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle10}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                         </div>
//                     ) : null}


//                {this.state.showButton10 ? (
//                       <div>  
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q10. </strong> what is your Dream ?
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_langu"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langu"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langu"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langu"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
                       
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle9}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle11}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                     </li>
//                     </div>
//                     ) : null}

                  

// {this.state.showButton11 ? (
//                       <div>
//                     <li className="_question ca">
//                       <p>
//                         <strong>Q11. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_langua"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langua"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langua"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_langua"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle10}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle12}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                        </li>
//                     </div>
//                     ) : null}

//            {this.state.showButton12 ? (
//                       <div> 
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q12. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="fav_languag"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_languag"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_languag"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="fav_languag"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle11}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle13}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                         </div>
//                     ) : null}

//                     {this.state.showButton13 ? (
//                       <div> 
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q13. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="acd"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="acd"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="acd"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="acd"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                         </ul>
//                         <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle12}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle14}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                        </li>
//                     </div>
//                     ) : null}

//               {this.state.showButton14 ? (
//                       <div>
//                          <li className="_question ca">
//                       <p>
//                         <strong>Q14. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="qwer"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="qwer"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="qwer"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="qwer"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle13}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle15}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                            </div>
//                           </li>
//                         </div>
//                     ) : null}

//                  {this.state.showButton15 ? (
//                       <div>
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q15. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="tyui"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="tyui"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="tyui"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="tyui"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle14}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle16}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                     </div>
//                     ) : null}

                  
// {this.state.showButton16 ? (
//                       <div>
//                     <li className="_question ca">
//                       <p>
//                         <strong>Q16. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="opas"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="opas"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="opas"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="opas"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle15}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle17}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                        </li>
//                        </div>
//                     ) : null}

//              {this.state.showButton17 ? (
//                       <div>
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q17. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="dfgh"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="dfgh"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="dfgh"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="dfgh"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle16}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle18}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                     </li>
//                     </div>
//                     ) : null}

//                {this.state.showButton18 ? (
//                       <div>
//                         <li className="_question ca">
//                       <p>
//                         <strong>Q18. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="jkl"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="jkl"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="jkl"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="jkl"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle17}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle19}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                      </div>
//                     ) : null}

//               {this.state.showButton19 ? (
//                       <div>
//                          <li className="_question ca">
//                       <p>
//                         <strong>Q19. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="zx"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="zx"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="zx"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="zx"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle18}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             {/* <a href= "#" className="subsepbtn">SUBMIT</a> */}
//                             <a
//                               href="#"
//                               onClick={this.toggle20}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                        </li>
//                        </div>
//                     ) : null}

//                    {this.state.showButton20 ? (
//                       <div>
//                         <li className="_question ca" id="_Q1">
//                       <p>
//                         <strong>Q20. </strong> Eight AC coaches of Nagpur-Mumbai
//                         Duronto Express derailed near this station near Thane.
//                       </p>
//                       <ul>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             name="cv"
//                             value="A"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             A) id sis did did did did dkid{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="cv"
//                             value="B"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             B) jg hkh hhhj kj lnj kjn jki{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="cv"
//                             value="C"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             C) pl lkm jnh bgu bhg bhgf jhju{" "}
//                           </label>
//                         </div>
//                         <div className="ansbox ques_optional a3556896950">
//                           <input
//                             type="radio"
//                             id="html"
//                             name="cv"
//                             value="D"
//                             style={{ float: "left" }}
//                           />
//                           <label className="csas">
//                             D) bhnj j hj nijo nlknm lmkj lk{" "}
//                           </label>
//                         </div>                     
//                       </ul>
//                       <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle19}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
//                             <a href="#" className="subsepbtn" onClick={this.postShow}>
//                               SUBMIT
//                             </a>
//                             <a href="#" className="next-slide next disable">
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                         </div>
//                     ) : null}
//                 </ul>
//                 {this.state.ibActive && ( <div 
//                     className="pop_screen"
//                     id="newpost"
//                     style={{ display: "block" }}
//                   >
//                     <div className="overlay-div"></div>

//                     <div className="nquizbox contant-cont-box">
//                       <span className="q-close-btn"><AiFillCloseCircle style={{width:"24px", height:"24px"}}/></span>
//                       <h2 className="panal-header">
//                         Would you like to submit the test?
//                       </h2>
//                       <div className="clear"></div>
//                       <div className="btns_wrapper stbtn">
//                         <a href="#" className=" q-red-btn">
//                           Coutinue the Test
//                         </a>
//                         <a class="q-green-btn" href="#">
//                           Confirm Submission
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   )}

//                </div>
//                ))}
//               </div>   
//             </div>
//           </section>
//         </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default Reasoning;


                                                // REASONING  ADD QUESTIONS ADMIN


import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

class Reasoning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rqId: "",
      rqName: "",
      rqoOne: "",
      rqoTwo: "",
      rqoThree: "",
      rqoFour: "",
      values: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/reasoning/saveReasoningQuestions", this.state)
      .then((response) => {
        console.log(response);
        console.log(response.values);
      });
  };

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/reasoning/getReasoningQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ values: json });
        console.log(json);
      });
  }

  deleteRow(rqId) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete(
        `http://localhost:8081/reasoning/deleteReasoningQuestions/${rqId}`
      );
    }
  }

  getRecord = (rqName) => {
    const obj = this.state.values.find((item) => item.rqName === rqName);
    return obj;
  };
  Edit = (rqName) => {
    const tempProduct = this.state.values;
    const index = tempProduct.indexOf(this.getRecord(rqName));
    const selectedRecord = tempProduct[index];
    this.setState({
      rqId: selectedRecord["rqId"],
      rqName: selectedRecord["rqName"],
      rqoOne: selectedRecord["rqoOne"],
      rqoTwo: selectedRecord["rqoTwo"],
      rqoThree: selectedRecord["rqoThree"],
      rqoFour: selectedRecord["rqoFour"],
    });
  };
  render() {
    const { rqId, rqName, rqoOne, rqoTwo, rqoThree, rqoFour } = this.state;
    return (
      <div className="contes">
        <section className="page-content innerContant">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className="text-center bold">REASONING QUESTIONS</h1>
            </div>
            <p>
              <span className="sub-heading" style={{ paddingLeft: "20px" }}>
                Add Question And Options Here :
              </span>
            </p>

            <div>
              <input
                type="text"
                id="rqId"
                name="rqName"
                data-parse="uppercase"
                value={this.state.rqName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="rqoOne"
                data-parse="uppercase"
                value={this.state.rqoOne}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="rqoTwo"
                data-parse="uppercase"
                value={this.state.rqoTwo}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="rqoThree"
                data-parse="uppercase"
                value={this.state.rqoThree}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="rqoFour"
                data-parse="uppercase"
                value={this.state.rqoFour}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="stbtns">
              <button
                type="submit"
                style={{ width: "20%" }}
                onClick={this.componentDidMount()}
              >
                Save
              </button>
            </div>
          </form>
          <div className="top">
            {this.state.values.map((obj) => {
              return (
                <div>
                  <ul className="oderlist" key={obj.rqId}>
                    <li onClick={() => this.Edit(obj.rqName)}>
                      <BsStarFill className="col" />{" "}
                      <AiFillDelete
                        style={{ marginLeft: "8px" }}
                        onClick={() => this.deleteRow(obj.rqId)}
                      />
                      <GrUpdate style={{ marginLeft: "12px" }} /> {obj.rqName}
                    </li>

                    <ul className="quiz-answer ansbox">
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.rqoOne}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.rqoTwo}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.rqoThree}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.rqoFour}</label>
                        </li>
                      </div>
                    </ul>
                  </ul>
                </div>
              );
            })}
          </div>
          {/* <div className="topbar m-center-btn">
              <ul className="list-inline">
                <Link to={'/Aptitude'}>
                  <button type="submit" className="start" style={{width:"auto"}}>
                    Start Now
                  </button>
                </Link>
              </ul>
            </div> */}
        </section>
      </div>
    );
  }
}
export default Reasoning;
