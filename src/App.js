import React from 'react';
import background from "./background.jpg";
import wan from "./wan.jpg";
import {styles} from "./Styles";

function App() { 
  //Style Object Variable
  const Background = {backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",
  backgroundSize:"cover", backgroundPosition: "center", minHeight: "100vh",
  width: '100vw', height: '100vh'}

  return (
  <div style={Background}>
  <div style={{display: "flex", flexDirection: "column" }}>
  <h2 style={{
  padding: "10px 20px",
  color: "Tan", marginTop:"50px", marginBottom: "1px", marginLeft:"170px",
  fontFamily: "times", fontSize: "75px",}}> LOG IN</h2>

  <div style={{display: "flex"}}>
  <form style={{border: "2px solid", backgroundImage:`url(${wan})`, 
  backgroundRepeat:"no-repeat", backgroundSize:"cover",
  marginTop:"0px",marginLeft:"100px", width:"450px", borderRadius: "25px"}}>
  <h2 style={{
  padding: "10px 20px", textAlign: "center", 
  color: "black", marginTop:"50px", 
  fontFamily: "times", fontSize: "50px",}}>
    <br></br>
  </h2>

  <input type="text" placeholder='Email or Username' style={styles.EmailStyle} />
  <br></br> <br></br>
  <input type="password" placeholder="Password" style={styles.PasswordStyle} />
  <br></br> <br></br>
  <button style={styles.ButtonStyle}> Log In </button>
  <br></br><br></br>
  <a href="" style={{color:'black', fontFamily:"times", marginLeft: "170px"}}>
  Forgot Password?</a>
  <br></br><br></br><br></br>
  </form>
  
  </div>
  </div> 
  </div>
);
};
export default App;
