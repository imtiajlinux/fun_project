import React  from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function TopNavbar() {
    return (
        <>

            <nav className="navbar bg-light px-lg-5  px-md-1 px-sm-0 navbar-light fixed-top">


                <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://wingsfin.com/wp-content/uploads/2023/01/logo-300x147.png" style={{width:"100px"}} alt="brand logo for wingfin" />
                </a>


                    <div className="top_navbar_item" >
                        <div>
                            <ul className="nav ">
                                <li className="nav-item">
                                    <a className="nav-link fs-5" href="/" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fs-5" href="#">Certificates</a>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fs-5" href="#">Documents</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link fs-5" href="#"> Contact</a>
                                </li>

                                <li className="nav-item d-flex justify-content-center gap-3 my-1">
                                
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
                            </ul>
                        </div>
                    </div>

                    <form className="top_nab_search" role="search">
                            
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                     </form>
                </div>

            </nav>
        </>
    );


}