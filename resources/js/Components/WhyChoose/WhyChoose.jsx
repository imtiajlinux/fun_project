import React from "react";
import option from "./choose_data";

export default function WhyChoose() {
    return (<>
                <div className="why_choose_section">
                    <div className="container pt-5 pb-5">
                        <h2 className="text-center mb-4 text-light">Why Choose Us</h2>
                        <div className="row">
                            {option.map((option) => (
                                <div className="col-md-3 mb-3" key={option.id}>
                                    <div className="card py-3">
                                        <img
                                            src={option.img}
                                            className="card-img-top w-25 align-self-center"
                                            alt={option.titel}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{option.titel}</h5>
                                            <p className="card-text">{option.text}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
    
    </>);
}