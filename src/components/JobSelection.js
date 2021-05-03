import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./com.css";


class JobSelection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let mggg=this.props.mgggPrams;
    let state=["penn","100999"];
    console.log(mggg,state);
    return (
      <div>
        <h3>Select a Job</h3>

        <div class="card bg-light mb-3" style={{ width: "550px", fontSize: "15px", left: "13px" }}>
          <div class="card-body">
            <h5 class="card-title">Job 1</h5>
            <p class="card-text">  {state.map((value, index) => { return <li key={index}>{value}</li>})}  •100,139 districtings    •27 districts</p>
            <p class="card-text">•Additional Parameters</p>
            <input class="form-check-input" type="radio" value="1" checked={this.props.jobChecked===1?true :false} id="flexCheckDefault 1" onClick={this.props.selectJobs(1)} />
            <label class="form-check-label" for="flexCheckDefault">
              Select Job
                  </label>
          </div>
        </div>

        <div class="card bg-light mb-3" style={{ width: "550px", fontSize: "15px", left: "13px" }}>
          <div class="card-body">
            <h5 class="card-title">Job 2</h5>
            <p class="card-text">•New York   •100,139 districtings    •27 districts</p>
            <p class="card-text">•Additional Parameters</p>
            <input class="form-check-input" type="radio" value="2" id="flexCheckDefault 2" checked={this.props.jobChecked===2?true :false} onClick={this.props.selectJobs(2)}/>
            <label class="form-check-label" for="flexCheckDefault">
              Select Job
                  </label>
          </div>
        </div>

        <div class="card bg-light mb-3" style={{ width: "550px", fontSize: "15px", left: "13px" }}>
          <div class="card-body">
            <h5 class="card-title">Job 3</h5>
            <p class="card-text">•New York   •100,139 districtings    •27 districts</p>
            <p class="card-text">•Additional Parameters</p>
            <input class="form-check-input" type="radio" value="3" id="flexCheckDefault 3" checked={this.props.jobChecked===3?true :false} onClick={this.props.selectJobs(3)}/>
            <label class="form-check-label" for="flexCheckDefault">
              Select Job
                  </label>
          </div>
        </div>

      </div>
    )
  }
}


export default JobSelection