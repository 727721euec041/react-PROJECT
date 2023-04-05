import React from "react";

export default function index() {
  return (
    <>
      <h1 style={{color:"red",marginLeft:"650px"}}>REGISTER</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              OTP
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>

          
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>{" "}
      </div>
    </>
  );
}
