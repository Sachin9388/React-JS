import {useState} from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  import { Link, Outlet } from "react-router-dom";
  
  export default function Header() {
    const [showNav, setShowNav] = useState(false);
  
    return (
        <>
                  <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>SACHIN</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        // onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                {/* <MDBNavbarLink aria-current='page' to='/'>
                                    Home
                                </MDBNavbarLink> */}
                                <Link className='nav-link' to='/'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/feature'>Feature</Link>
                                {/* <MDBNavbarLink to='/features'>Features</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/contact'>Contact</Link>
                                {/* <MDBNavbarLink href='/pricing'>Pricing</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/about'>About</Link>
                                {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/examples'>Examples</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet/>
      </>
    );
  }
