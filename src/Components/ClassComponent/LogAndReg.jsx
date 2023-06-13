import React, { Component } from 'react'
import LoginForm from './LoginForm'
import "../../App.css"
import RegisterForm from './RegisterForm'
import styled from 'styled-components';

export default class LogAndReg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

    componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add("right");
    }

    changeState() {
        const { isLogginActive } = this.state;

        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
            <>
                <Wrapper>
                    <div className="App">
                        <div className="login">
                            <div className="container" ref={ref => (this.container = ref)}>
                                {isLogginActive && (
                                    <LoginForm containerRef={ref => (this.current = ref)} />
                                )}
                                {!isLogginActive && (
                                    <RegisterForm containerRef={ref => (this.current = ref)} />
                                )}
                            </div>
                            <RightSide
                                current={current}
                                currentActive={currentActive}
                                containerRef={ref => (this.rightSide = ref)}
                                onClick={this.changeState.bind(this)}
                            />
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
}

const RightSide = props => {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
};

const Wrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin: 50px 0px;
    
    .login {
  width: 27em;
  height: 40em;
  //min-height: 44em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  position: relative;
  z-index: 99;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
    border-radius: 4px;
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    z-index: 99;
    padding: 17px 10px;
    //transition: transform 200ms ease-in-out;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    background-color: #3498db;
    width: 100%;
    position: absolute;
    right: -34%;
    border-radius: 6px;
    z-index: 1;
    transition: all 400ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.281);

    &.right {
      right: -40%;
      align-items: flex-end;
      &:hover {
        right: -45%;
      }
    }
    &.left {
      right: 40%;
      align-items: flex-start;
      &:hover {
        right: 45%;
      }
    }

    .text {
      font-size: 21px;
      font-weight: 500;
      color: #fff;
      margin-right: 3em;
      margin-left: 3em;
    }
  }
}

//Button
.btn {
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #3498db;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #2386c8;
  }
  &:focus {
    outline: none;
  }
}

.base-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
}
.image {
  width: 21em;
}
img {
  width: 100%;
  height: 100%;
}

.form {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
}
label {
  font-size: 20px;
}
input {
  margin-top: 6px;
  min-width: 18em;
  height: 37px;
  padding: 0px 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
}
.input:hover{
  background-color: #ffffff;
  box-shadow: 0px 0px 14px 0.3px #0e81ce96;
}
.input:focus{
  outline: none;
  box-shadow: 0px 0px 12px 0.8px #3474dbb2;
}

.footer {
  margin-top: 3em;
}

`

