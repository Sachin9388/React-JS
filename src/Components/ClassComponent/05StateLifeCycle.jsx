import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react'
import lifecycle from '../../Image/lifecycle.png'

export default class StateLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "Something" }
  }

  // componentWillMount(){
  //   console.log(componentWillMount);
  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("componentWillReceiveProps");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // return false
    return true
  }

  // componentWillUpdate(nextProps,nextState){
  //   console.log("componentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }


  render() {
    console.log("render");
    return (
      <div>
        <p>Change Data</p>
        {/* {<button onClick={changeDataFunc}>Click</button>} */}
        <MDBBtn rounded className='mx-2' color='info' onClick={() => this.setState({ data: "Testing" })}>Click</MDBBtn>
        <p><strong>State</strong>{this.state.data}</p>

        <div className="col-8 my-5 mx-auto">
          <img src={lifecycle} alt="..." />
        </div>
      </div>
    )
  }
}
