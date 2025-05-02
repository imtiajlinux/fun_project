import React from "react";


const SectionTemp = ({ name, title, description, image, imagePosition }) => {
    return (
      <div className="card mb-3 col-12 col-xl-5 p-0" id="about_section">
        <div
          className={`d-flex flex-column ${
            imagePosition === "left" ? "flex-xl-row" : "flex-xl-row-reverse"
          } h-100`}
        >
          
          <div className="col-xl-6 d-flex align-items-end h-100">
            <img src={image} className="img-fluid w-100" alt={name} />
          </div>
  
          
          <div className="col-xl-6 d-flex flex-column justify-content-between h-100">
            <div className="card-body d-flex flex-column justify-content-between flex-grow-1 text-end">
              <p className="card-text">{description}</p>
              <div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <small className="text-muted">{title}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default  SectionTemp;