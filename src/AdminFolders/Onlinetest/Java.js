// import React, { Component } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import { AiFillCloseCircle } from "react-icons/ai";

// class Technical extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
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

//       showButton21: false,

//       minutes: 20,
//       seconds: 0,
//       images: [],
//       aqoTwo:"",
//       aqoOne:"",
//       aqoThree:"",
//       aqoFour:"" 
//     };
//   }

//   postShow = () => {
//     this.setState({ ibActive: true });
//   };
//   postHide = () => {
//     this.setState({ ibActive: false });
//   };
  
//   // PAGE SHOW & HIDE

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

//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }

//   componentDidMount() {
//     fetch("http://" + window.hostname + "/java/getJavaQuestions")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         this.setState({
//           images: json,
//         });
//       });
//     console.log(this.state.images);
//   }

//   render() {
//     const { images } = this.state;
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
//         <form className="fors">
//           <section>
//             <div className="conter">
//               <div className="nquizbox onlinetest" style={{paddingTop:"50px"}}>
//                 <div className="page-heading">
//                   <h1>TECHNICAL EXAMINATIONS</h1>
//                   <h1 style={{ float: "right"}}>Total Questions:- 20</h1>
//                 </div>
//                 {this.state.images.map((imgs,) => <div className="1hspart">
//                   <ul>
//                     {this.state.showButton ? (
//                       <div>
//                          <div style={{ marginLeft: "18px"}}> 
//                 <p>The Team of subject matter experts of JagranJosh has 
//                     come up with all new Conceptual Practice Test on Quantitative Aptitude- Data 
//                     Interpretation which contains topics such as Pie Chart, Tables, Graphs, 
//                     Combination of graphs and Miscellaneous. </p></div>
                       
//                         <li className="1click">
//                           <p style={{paddingTop:"30px"}}>
//                             <strong>Q1. </strong>{imgs.jqName}
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="age"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               {imgs.jqoOne}
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="age"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>{imgs.jqoTwo}</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="age"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               {imgs.jqoThree}
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="age"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>{imgs.jqoFour}</label>
//                           </div>
                         
//                         </li>
                      
//                         <div className="prev-next">
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

//                     {this.state.showButton2 ? (
//                       <div>
//                         <li className="1click">
//                           <p style={{paddingTop:"30px"}}>
//                             <strong>Q2. </strong>what is dhfvbdfbvfdb?
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="Guj"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Guj</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="Guj"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bi</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="Guj"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Uttara</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="Guj"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odis</label>
//                           </div>
//                         </li>

//                         <div className="prev-next">
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

//                     {this.state.showButton3 ? (
//                       <div>
//                         <li className="1click">
//                           <p style={{paddingTop:"30px"}}>
//                             <strong>Q3. </strong>where i syouigfffekfn
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                         </li>
//                         <div className="prev-next">
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
//                         <li className="1click">
//                           <p style={{paddingTop:"30px"}}>
//                             <strong>Q4. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                         </li>
//                         <div className="prev-next">
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

//                     {this.state.showButton5 ? (
//                       <div>
//                         <li className="1click">
//                           <p style={{paddingTop:"30px"}}>
//                             <strong>Q5. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                         </li>
//                         <div className="prev-next">
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

//                     {this.state.showButton6 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q6. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                         </li>
//                         <div className="prev-next">
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
//                     {this.state.showButton7 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q7. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                           </div>
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton8 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q8. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton9 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q9. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle8}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
                           
//                             <a
//                               href="#"
//                               onClick={this.toggle10}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton10 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q10. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
//                             <a
//                               href="#"
//                               onClick={this.toggle9}
//                               className="prev-slide prev"
//                             >
//                               {" "}
//                               Previous <i className="icon-prev"></i>
//                             </a>
                           
//                             <a
//                               href="#"
//                               onClick={this.toggle11}
//                               className="next-slide next"
//                             >
//                               Next <i className="icon-next"></i>
//                             </a>
//                           </div>
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton11 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q11. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton12 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q12. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                       </div>
//                     ) : null}
//                     {this.state.showButton13 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q13. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton14 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q14. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                           </div>
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton15 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q15. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                       </div>
//                     ) : null}
//                     {this.state.showButton16 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q16. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton17 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q17. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton18 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q18. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                       </div>
//                     ) : null}
//                     {this.state.showButton19 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q19. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                         </li>
//                       </div>
//                     ) : null}
//                     {this.state.showButton20 ? (
//                       <div>
//                         <li className="1click">
//                           <p>
//                             <strong>Q20. </strong>when is brhgfibhkgdkdfkbv
//                           </p>
//                           <div className="ansbox ques_option1 a3524613090">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Gujarat
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613091">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Bihar</label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613092">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>
//                               Uttarakhand
//                             </label>
//                           </div>
//                           <div className="ansbox ques_option1 a3524613093">
//                             <input
//                               type="radio"
//                               name="fav_language"
//                               value="HTML"
//                               style={{ marginLeft: "15px" }}
//                             />
//                             <label style={{ marginLeft: "-4px" }}>Odisaa</label>
//                           </div>
//                           <div className="prev-next">
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
//                       </div>
//                     ) : null}
//                   </ul>
                 
//                   {this.state.ibActive && ( <div 
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

//                   {/* <div className="prev-next">
//                     <a href= "#" onClick={this.toggle}  className="prev-slide prev" style={{marginLeft:"40px"}}> Previous <i className="icon-prev"></i></a>
//                     <a href= "#" className="subsepbtn">SUBMIT</a>
//                     <a href= "#" onClick={this.toggle2} className="next-slide next">Next <i className="icon-next"></i>
                   
//                     </a>
//                   </div> */}
//                 </div>
//                     )}
//               </div>
//             </div>
//           </section>
//         </form>
//       </div>
//     );
//   }
// }

// export default Technical;


                               //JAVA ADD QUESTIONS ADMIN


import React, { Component } from "react";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

class Java extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jqId: "",
      jqName: "",
      jqoOne: "",
      jqoTwo: "",
      jqoThree: "",
      jqoFour: "",
      values: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/java/saveJavaQuestions", this.state)
      .then((response) => {
        console.log(response);
        console.log(response.values);
      });
  };

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/java/getJavaQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ values: json });
        console.log(json);
      });
  }

  deleteRow(jqId) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete(
        `http://localhost:8081/java/deleteJavaQuestions/${jqId}`
      );
    }
  }

  getRecord = (jqName) => {
    const obj = this.state.values.find((item) => item.jqName === jqName);
    return obj;
  };
  Edit = (jqName) => {
    const tempProduct = this.state.values;
    const index = tempProduct.indexOf(this.getRecord(jqName));
    const selectedRecord = tempProduct[index];
    this.setState({
      jqId: selectedRecord["jqId"],
      jqName: selectedRecord["jqName"],
      jqoOne: selectedRecord["jqoOne"],
      jqoTwo: selectedRecord["jqoTwo"],
      jqoThree: selectedRecord["jqoThree"],
      jqoFour: selectedRecord["jqoFour"],
    });
  };
  render() {
    const { jqId, jqName, jqoOne, jqoTwo, jqoThree, jqoFour } = this.state;
    return (
      <div className="contes">
        <section className="page-content innerContant">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className="text-center bold">QUESTIONS & OPTIONS</h1>
            </div>
            <p>
              <span className="sub-heading" style={{ paddingLeft: "20px" }}>
                Add Question And Options Here :
              </span>
            </p>

            <div>
              <input
                type="text"
                id="jqId"
                name="jqName"
                data-parse="uppercase"
                value={this.state.jqName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoOne"
                data-parse="uppercase"
                value={this.state.jqoOne}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoTwo"
                data-parse="uppercase"
                value={this.state.jqoTwo}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoThree"
                data-parse="uppercase"
                value={this.state.jqoThree}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoFour"
                data-parse="uppercase"
                value={this.state.jqoFour}
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
                  <ul className="oderlist" key={obj.aqId}>
                    <li onClick={() => this.Edit(obj.jqName)}>
                      <BsStarFill className="col" />{" "}
                      <AiFillDelete
                        style={{ marginLeft: "8px" }}
                        onClick={() => this.deleteRow(obj.aqId)}
                      />
                      <GrUpdate style={{ marginLeft: "12px" }} /> {obj.jqName}
                    </li>

                    <ul className="quiz-answer ansbox">
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.jqoOne}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.jqoTwo}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.jqoThree}</label>
                        </li>
                      </div>
                      <div className="a3500801050 ques_option2">
                        <li className="opt-list" type="radio">
                          <input type="checkbox" />
                          <label className="lab">{obj.jqoFour}</label>
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
export default Java;


                              



                               
