import React, { Component } from 'react'
// import LoaderCompo from './LoaderCompo'
import { MDBBtn } from 'mdb-react-ui-kit'

export default class StateLifeCycleLoader extends Component {
    constructor(props) {
        super(props)
        // Declare State with default value for loader enable disable functionalities START
        this.state = { data: "something", loader: false }
        // Declare State with default value for loader enable disable functionalities END
        // Using setTimeOut function make chnages in state after 2sec START
        // Using setTimeOut function make chnages in state after 2sec END

    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({ loader: true })
        }, 2000);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     // return false
    //     return true
    // }   
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        setTimeout(() => {
            console.log("componentDidUpdate time out");
            this.setState({ loader: false })
        }, 5000);
    }
    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    // }

    render() {

        // variable declaration with diff default values and its impact
        //  let HtmlDisp = null;  //variable with null value will be adopt any data with its type
        // const HtmlDisp = "";  //variable with empty value will be adopt any value with only string type
        // const HtmlDisp = 0;  
        // const HtmlDisp = {};  
        // const HtmlDisp = []; 

        //  if (this.state.laoder) {
        //     HtmlDisp = <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
        // } else {
        //     HtmlDisp = "inside else"
        // }
        // console.log("render");

        let HtmlDisp = null;
        this.state.loader ? HtmlDisp = <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> : HtmlDisp = "inside else"


        return (
            <>
                {JSON.stringify(this.state.loader)}
                {/* {this.state.loader ? <LoaderCompo/>:<p>Data</p>} */}
                {/* {this.state.loader ? <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt=""/>:<p>Data</p>} */}
                {/* <MDBBtn rounded className='mx-2' color='info' onClick={cahngeDataFunc}>Click</MDBBtn> */}
                {HtmlDisp}
                <MDBBtn rounded className='mx-2' color='info' onClick={() => this.setState({ data: "Testing" })}>Click</MDBBtn>
                <p><strong>State</strong>{this.state.data}</p>
            </>
        )
    }
}
