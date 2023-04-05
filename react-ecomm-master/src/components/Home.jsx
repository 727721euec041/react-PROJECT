import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <>
      <div  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` ,
      backgroundRepeat: 'no-repeat',  height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',}}>
        
    
    <h1 style={{color:"",marginLeft:"480px"}} >JOHN CONSTANTINE ELECTRONICS</h1>
    <p style={{color:"yellow",marginLeft:"400px",marginRight:"320px",backgroundColor:"black"}}>JOHN CONSTANTINE ELECTRONICS </p>
    
    <p style={{color:"yellow",marginTop:"200PX",marginLeft:"40PX",backgroundColor:"black"}}>EXPLORE AND PURCHASE THE WORLD'S CLASSY COMPONENTS </p>
    
    <p style={{color:"yellow",marginTop:"200PX",marginLeft:"40PX"}}> </p>
 
        </div>
      <Products />
    </>
  );
}
