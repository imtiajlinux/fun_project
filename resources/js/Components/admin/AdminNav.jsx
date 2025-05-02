import { Link } from "@inertiajs/react";
import React from "react";

export default function AdminNav() {
    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-5 ">

                    <div className="container">
                            <a href="/dashboard" className="navbar-brand">Admin pnale</a>
                            <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/dashboard" className="nav-link">Admin Panal</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={route('admin.carousel')} className="nav-link">Carousel</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={route('admin.latest-news')} className="nav-link">Latest News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={route('logout')} method={'Post'} className="nav-link">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
        
        </>
    );
}