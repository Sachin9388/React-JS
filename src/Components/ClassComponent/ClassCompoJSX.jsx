import React, { Component } from 'react'

export default class Jsx extends Component {
  render() {
    const user = {
        firstname : "SONAGRA",
        lastname: "SACHIN",
    }
    let something = "My site Title";
    const heading = <h2>{something}</h2>
    return (
      <div>
        {heading}
        2/2 = {2/2}
        <br/>
        2*2 = {2*2}
        <br/>
        2+2 = {2+2}
        <p>fullname : {user.firstname} {user.lastname}</p>

        {/* {<img src="https://picsum.photos/id/537/500/800" alt="" />}
        <br /><br />
        <img src={img1} alt="" />
        <br /><br />
        { {JSON.stringfy(process.env)} }
        <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="" />
        <img src={`/logo512.png`} alt="" />  */}
      </div>
    )
  }
}
