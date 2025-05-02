import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function BottomNavbar() {
    return (
        <>
            <nav className="navbar navbar-dark p-0  fixed-bottom" id='bottom_navbar' >
                <div className="container-fluid  align-items-center p-0"  style={{ backgroundColor: "#4CAF50" }}>
                   
                    
                    <div className="collapse navbar-collapse bg-light align-items-center text-center" id="navbarNav">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-medium text-light-emphasis" href="/" >Home</a>
                            </li>
                            <hr className="my-2 border-top border-secondary w-100" />
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-medium text-light-emphasis" href="/">Certificates</a>
                            </li>
                            <hr className="my-2 border-top border-secondary w-100" />

                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-medium text-light-emphasis" href="/">Documents</a>
                            </li>
                            <hr className="my-2 border-top border-secondary w-100" />                            
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-medium text-light-emphasis" href="/">Contact</a>
                            </li>

                            <hr className="my-2 border-top border-secondary w-100" />

                             <li className="nav-item d-flex justify-content-center gap-3 my-1 pb-2">
                                                            
                                <a href="https://www.facebook.com/WingsFinSecuritiesLtd" target="_blank" rel="noopener noreferrer" 
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white" 
                                    style={{ width: "35px", height: "35px", fontSize: "20px" }}>
                                    <FaFacebookF />
                                </a>

                                
                                <a href="https://www.linkedin.com/company/wingsfin-securities-limited/" target="_blank" rel="noopener noreferrer" 
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-info text-white" 
                                    style={{ width: "35px", height: "35px", fontSize: "20px" }}>
                                    <FaLinkedinIn />
                                </a>

                                
                                <a href="https://www.instagram.com/wingsfin/" target="_blank" rel="noopener noreferrer" 
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" 
                                    style={{width: "35px", height: "35px", fontSize: "20px" }}>
                                    <FaInstagram />
                                </a>

                                
                                <a href="https://www.youtube.com/@wingsfinsecuritieslimited" target="_blank" rel="noopener noreferrer" 
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" 
                                    style={{ width: "35px", height: "35px", fontSize: "20px" }}>
                                    <FaYoutube />
                                </a>
                            </li>
                            <hr className="my-2" style={{ borderTop: "1px solid gray", width: "100%" }} />
                            <li>

                                <form className="bottom_nab_search py-3 px-1" role="search">
                                        
                                        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                                        
                                </form>
                            </li>
                        </ul>
                    </div>

                     
                     <button className="navbar-toggler mx-auto my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    

                </div>
            </nav>
        </>
    );
}

