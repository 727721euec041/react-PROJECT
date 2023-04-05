
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` ,
    backgroundRepeat: 'no-repeat',  height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',}} >
      <center>
        <div className="col-md-6">
              <h4>
                <center>
                 YOUR ITEM IS ADDED</center>
              </h4>
              <div className="row text-center" style={{marginTop:"300px"}}>
                
              <p style={{color:"yellow"}}>YOUR ITEM IS ADDED</p>
                <Link to="./products" className="btn btn-large btn-primary">
                  CLICK TO EXPLORE MORE
                </Link>
              </div>
            </div>
            </center>
        </div>
       
  );
}
