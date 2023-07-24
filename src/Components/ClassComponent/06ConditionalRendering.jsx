import React, { Component } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

export default class ConditionalRendering extends Component {
  constructor(props){
    super(props)
    this.state = {
      status : true,
    }
  }
  loginChange=()=>{
    this.setState({status:!this.state.status})
  }
  render() {
    let loginbtn = ""
    const count = 1
    return (
      <>
        {count && <h1>Meassages :{count} </h1>}
        <br/>
        {loginbtn}
        <br/>
        <br/>
        <MDBBtn rounded className='mx-auto d-block' color='info' onClick={this.loginChange}>{this.state.status ? "Login" : "Logout"}</MDBBtn>
        <br/>
        <br/>
        <MDBBtn rounded className='mx-auto d-block' color='info' onClick={() => this.setState({ status:! this.state.status })}>{this.state.status ? "Login" : "Logout"}</MDBBtn>
      </>
    )
  }
}
