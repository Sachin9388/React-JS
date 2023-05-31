import React from "react";
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Link,Outlet} from "react-router-dom";

export default function BtnGroup() {
  return ( 
    <>
    <MDBBtnGroup shadow='0' aria-label='Basic example'>
      <MDBBtn color='secondary' outline>
          <Link to='/About/BtnLeft'>Left</Link>
      </MDBBtn>
      <MDBBtn color='secondary' outline>
          <Link to='/About/BtnMid'>Middle</Link>
      </MDBBtn>
      <MDBBtn color='secondary' outline>
          <Link to='/About/BtnRight'>Right</Link>
      </MDBBtn>
    </MDBBtnGroup>
    {/* <Outlet/> */}
    </>
  );
}