import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class ClassCompoMenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li className='d-block'>
            <Link to="classcompointro"><MDBBtn outline rounded className='my-2' color='primary'> Class Compo Intro</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompojsx"><MDBBtn outline rounded className='my-2' color='primary'>JSX in Class Compo</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="props"><MDBBtn outline rounded className='my-2' color='primary'>Class Compo Props</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompoconstructor"><MDBBtn outline rounded className='my-2' color='primary'>Constructor</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompostate"><MDBBtn outline rounded className='my-2' color='primary'>State in Class compo</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompostatelifecycle"><MDBBtn outline rounded className='my-2' color='primary'>State LifeCycle</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompostatelifecycleloader"><MDBBtn outline rounded className='my-2' color='primary'>State LifeCycle Loader</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="logandreg"><MDBBtn outline rounded className='my-2' color='primary'>Log And Reg Form</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompoconditionalrendering"><MDBBtn outline rounded className='my-2' color='primary'>Conditional Rendering</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompolistandkeys"><MDBBtn outline rounded className='my-2' color='primary'>ListKeys</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcontrolledcompo"><MDBBtn outline rounded className='my-2' color='primary'>Controlled Compo</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classuncontrolledcompo"><MDBBtn outline rounded className='my-2' color='primary'>Uncontrolled Compo</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompositionvsinheritance"><MDBBtn outline rounded className='my-2' color='primary'>Composition Vs Inheritance</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompostatelifting"><MDBBtn outline rounded className='my-2' color='primary'>State Lifting</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompoarray"><MDBBtn outline rounded className='my-2' color='primary'>Array Acces</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="classcompoapiexample"><MDBBtn outline rounded className='my-2' color='primary'>Api Example</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="cssexample"><MDBBtn outline rounded className='my-2' color='primary'>CSS Example</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="dynamicsubmenu"><MDBBtn outline rounded className='my-2' color='primary'>Dynamic SubMenu</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="spreadandrest"><MDBBtn outline rounded className='my-2' color='primary'>Spread And Rest</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="hoc"><MDBBtn outline rounded className='my-2' color='primary'>HOC</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="task"><MDBBtn outline rounded className='my-2' color='primary'>Task</MDBBtn></Link>
          </li>
          <li className='d-block'>
            <Link to="checklist"><MDBBtn outline rounded className='my-2' color='primary'>CheckList</MDBBtn></Link>
          </li>
        </ul>
        <Outlet />
      </>
    )
  }
}
