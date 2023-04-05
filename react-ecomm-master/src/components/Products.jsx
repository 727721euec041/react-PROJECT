import React from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
return (
      <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` ,
      backgroundRepeat: 'no-repeat',  height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',}}> 
                                       <h1 style={{marginLeft:"600px",color:"yellow",backgroundColor:"black",marginRight:"610px"}}>OUR PRODUCTS</h1>
            <>
            <div style={{display:'flex',flexDirection:'row',overflow:'auto',marginTop:'100px',marginLeft:'100px'}}>
            <center>
              <div style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aVpAqbNwXrjBuaJk5OkP2cnQ7sOpvgli_Q&usqp=CAU"}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>PUSH BUTTONS</h5>
                    <h4>PRICE:25Rs</h4>
                    
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark"
                    >
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>
              <center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"data:image/jpeg;base64,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"}
                    height="250px"
                    className="card-img-top"
                  />
                  <div  className="card-body">
                    <h5>TRANSISTORS SET</h5>
                    
                    <h4>PRICE:200Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark"
                    >
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>
<center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRd4rX_fU9fYOXzI9G6-FuobLfGdIv2E1Ww&usqp=CAU"}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>OSCILLOSCOPE</h5>
                     <h4>PRICE:15000Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark"
                    >
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>
<center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-zX6IcOlnXc8MG3V0k2ysgBAuJMR55Z3sg&usqp=CAU"}
                    height="225px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>PRINTED CIRCUIT BOARDS</h5>
                   <h4>PRICE:450Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark">
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>

              <center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VNdUmHObwEeSbvAOHud5MxbkR7Ms7ZeqBA&usqp=CAUU"}
                    height="225px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>MULTIMETER</h5>
                   <h4>PRICE:250Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark">
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>

              <center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUjWyPe59a4sLtNOd7R0MlkcW08XEAA8o2I83BrFLBy21UFWEekkeUTMrtUPbYPHwOlk&usqp=CAU"}
                    height="225px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>ARDUINO BOARD</h5>
                   <h4>PRICE:600Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark">
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>

              <center>
              <div  style={{width:'320px'}} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKhANQAk4UQyElkVGoIocH0lv4r48BrGHuw&usqp=CAU"}
                    height="225px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>STARTUP KIT FOR BEGINNERS</h5>
                   <h4>PRICE:1500Rs</h4>
                    <NavLink
                      to={`/Cart`}
                      className="btn  btn-outline-dark">
                      Buy 
                    </NavLink>
                  </div>
                </div>
              </div>
              </center>
             </div>
            </>
           </div>
    );
}
