import React, { Component } from 'react'
// import loginImg from '../../Image/loginimg.svg'
import Frontend from '../../Image/FrontEnd.jpg'
// import styled from 'styled-components';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Wrapper> */}
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={Frontend} />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Login
              </button>
            </div>
          </div>
        {/* </Wrapper> */}
      </>
    )
  }
}

