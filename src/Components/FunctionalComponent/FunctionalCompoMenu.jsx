import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class FunctionalCompoMenu extends Component {
  render() {
    return (
      <>
      <div className="w-100">
        <div className="col-6 offset-6">
         <ul>
            <li className='d-block'>
                <Link to="functionalcompointro"><MDBBtn outline rounded className='my-2' color='primary'>Functional Compo Intro</MDBBtn></Link>
            </li>
            <li className='d-block'>
                <Link to="styledcomponent"><MDBBtn outline rounded className='my-2' color='primary'>Styled Component</MDBBtn></Link>
            </li>
        </ul>
      </div>
    </div>
    <Outlet/>
  </>
    )
  }
}
