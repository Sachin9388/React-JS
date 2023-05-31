import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class ClassCompoMenu extends Component {
  render() {
    return (
       <>
          <ul>
            <li className='d-block'>
              <Link to="classcompointro"><MDBBtn outline rounded  className='my-2' color='primary'> Class Compo Intro</MDBBtn></Link>
              </li>
            <li className='d-block'>
              <Link to="classcompojsx"><MDBBtn outline rounded  className='my-2' color='primary'>JSX in Class Compo</MDBBtn></Link>
              </li>
          </ul>
          <Outlet/>
       </>
    )
  }
}
