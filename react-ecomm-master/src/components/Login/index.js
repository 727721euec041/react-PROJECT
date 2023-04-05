import React from 'react'

export default function index() {
  return (
    <div>
    <h1 style={{color:"red",marginLeft:"700px"}}>LOGIN</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
            />
          
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
