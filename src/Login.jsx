import React from 'react'
import { Navbar, Container, Nav, NavDropdown, InputGroup, Button, Form } from 'react-bootstrap'
import { APPNAME } from './appsettings'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

const Login = () => {
    return (
        <div>
            <Navbar bg="white" variant='light' expand="lg" className="" id="main-nav">
                <Container className='align-items-center'>
                    <div className='topbar'>

                    </div>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
                        <i className='bx bxs-shopping-bag-alt fs-1 me-2 text-success'></i> <span className='fs-4'>{APPNAME}</span>
                        <span className='ms-3 fw-bolder'>Login</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="collapse navbar-collapse" id="basic-navbar-nav">
                        <ul className="navbar-nav ms-auto align-items-center justify-content-end">
                            <li className='nav-item ms-2'>
                                <a href="#" className='nav-link text-success'>
                                    Need Help?
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
            {/* content below */}
            <main className='bg-success mb-3'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md py-5">
                            <div className="text-center text-white">
                                <i className='bx bxs-shopping-bag-alt me-2 text-white bx-lg'></i>
                                <h1 className='mt-1'>Nave</h1>
                                <p className="fs-4 mt-3">
                                    The number 1 online shopping platform in the world.
                                </p>
                            </div>
                        </div>
                        <div className="col-md py-5">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="card shadow">
                                        <div className="card-body px-4 py-4">
                                            <p className='fw-bold fs-5'>Log In</p>
                                            <form action="#">
                                                <div className="mb-4">
                                                    {/* <label htmlFor="" className='form-label'>Email address:</label> */}
                                                    <input type="text" placeholder='Username / Email' required className="form-control" />
                                                </div>
                                                <div className="mb-4">
                                                    {/* <label htmlFor="" className='form-label'>Email address:</label> */}
                                                    <input type="password" placeholder='Password' required className="form-control" />
                                                </div>
                                                <div className="d-grid">
                                                    <button className="btn btn-success text-white fw-bold" type='submit'>LOG IN</button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap mt-3">
                                                    <a href="#" className='link-primary my-1 nav-link p-0'>
                                                        <small>Forgot Password</small>
                                                    </a>
                                                    <a href="#" className='link-primary my-1 nav-link p-0'>
                                                        <small>Login with Phone Number</small>
                                                    </a>

                                                </div>
                                                <div className="d-flex mt-4 align-items-center">
                                                    <div className="w-100 bg-secondary" style={{ height: "0.1px" }}></div>
                                                    <span className='mx-2 text-black-50'>OR</span>
                                                    <div className="w-100 bg-secondary" style={{ height: "0.1px" }}></div>
                                                </div>
                                                <div className="mt-4 d-flex justify-content-center flex-wrap">
                                                    <div className="border p-2 rounded-2 mx-2">
                                                        <i className='bx bxl-facebook me-2'></i>
                                                        <span>Facebook</span>
                                                    </div>
                                                    <div className="border p-2 rounded-2 mx-2">
                                                        <i className='bx bxl-google me-2'></i>
                                                        <span>Google</span>
                                                    </div>
                                                    <div className="border p-2 rounded-2 mx-2">
                                                        <i className='bx bxl-apple me-2'></i>
                                                        <span>Apple</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <p className="text-center d-flex align-items-center justify-content-center">
                                                        New to Nave?<a href='#' className='ms-2 p-0 nav-link text-success fw-bold'>Sign Up</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Login