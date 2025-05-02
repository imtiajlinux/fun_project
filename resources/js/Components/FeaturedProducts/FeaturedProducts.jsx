import React from "react";
import services from "./OurService";

export default function AboutSection() {
    return (
        <div className="about-section">
           <div className="container mt-5">
             
                <h2 className="text-center mb-4">Our Services</h2>

                <div className="row">
                    {services.map((service) => (
                        <div className="col-md-3 mb-3" key={service.id}>
                            <div className="card py-5">
                                <img
                                    src={service.image}
                                    className="card-img-top w-25 align-self-center"
                                    alt={service.title}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{service.title}</h5>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    );
}