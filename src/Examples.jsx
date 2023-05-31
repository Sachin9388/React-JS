import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
  
  export default function Examples() {
  
    return (
      <>
         <div className='container'>
            <div className='row my-5'>
              <div className='col-6'>
                <Link to="classcomponent"><MDBBtn className='mx-auto d-block' color='dark'>Class Component </MDBBtn></Link>
              </div>
              <div className='col-6'>
                <Link to="functionalcomponent"><MDBBtn className='mx-auto d-block' color='dark'>Functional Component</MDBBtn></Link>
              </div>
            </div>
           </div>
         <Outlet/>
      </>
      
    );
  }