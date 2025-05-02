import React from "react";

export default function HeroImage({carousels}) {
    
    
    return (
        <div className="hero-image-container " >
            <div className="hero-image">
                <div className="container mb-5">
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                    <h1 className="text-light">INVESTING FOR ALL</h1>
                        <div className=" d-flex justify-content-end gap-1">
                        <a href={route('register')} className="btn btn-success hero_custom_btn text-light fs-4">Register</a>
                        <a href={route('login')} className="btn btn-light hero_custom_btn fs-4">Login</a>
                        </div>
                       
                    </div>
                    
                    <div style={{ boxShadow: "10px 20px 30px rgba(0,0,0,0.5)", borderRadius: "10px 0", overflow: "hidden" }}>
                    
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                    
                            <div className="carousel-inner">
                                { carousels.map((carousel) => (
                                <div className="carousel-item active" key={carousel.id}>
                                    <img src={`/storage/${carousel.image}`} className="d-block w-100" alt="carousel_image_1" />
                                    <div className="carousel-caption d-none d-md-block text_off_white">
                                        <h5>{carousel.title}</h5>
                                        <p>{carousel.description}</p>

                                    </div>
                                </div>
                            )) }
                                
                               
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
