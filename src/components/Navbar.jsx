import React from 'react'
import { Navbar as BsNavbar, Container, Nav, NavDropdown, InputGroup, Button, Form } from 'react-bootstrap'
import { APPNAME } from '../appsettings'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <BsNavbar bg="white" variant='light' expand="lg" className="" id="main-nav">
      <Container className='align-items-center'>
        <div className='topbar'>

        </div>
        <BsNavbar.Brand href="#home" className='d-flex align-items-center'>
          <i className='bx bxs-shopping-bag-alt fs-1 me-2 text-success'></i> <span className='fs-4'>{APPNAME}</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className='nav-item'>
              <form action="">
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                  <button className="btn btn-success text-light rounded-0" type="button"><i className='bx bx-search'></i></button>
                </div>
              </form>
            </li>
            <li className='nav-item ms-2'>
              <Link to="buyer/login" className='nav-link'>
                {/* <i className='bx bx-user fs-3'></i> */}
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </BsNavbar>
  )
}

export default Navbar