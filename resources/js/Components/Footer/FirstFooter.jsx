import React from "react";

export default function FirstFooter(){
    return (<>


<footer className=" text-dark p-4 pb-0">
      <div className="container pt-5">
        <div className="row">

          {/* Section 1: Company */}
          <div className="col-12 col-md-6 col-lg-3">
          
            <div>
                <img src="/assets/image/wing_fin_logo.png" alt="" className="w-100" />
            </div>
          </div>

          {/* Section 2: Services */}
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="d-md-none">
              <button
                className="btn w-100 text-center text-uppercase  fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#footerSection2"
              >
                Quick Links
              </button>
              <hr className="my-2 border-top border-secondary w-100" />
              <div className="collapse text-center" id="footerSection2">
                <ul className="list-unstyled mt-2">
                  <li><a href="#" className=" text-decoration-none">Home</a></li>
                  <li><a href="#" className=" text-decoration-none">Conract Us</a></li>
                  <li><a href="#" className=" text-decoration-none">Bangladesh Securities and Exchange Commission</a></li>
                  <li><a href="#" className=" text-decoration-none">Chittagong Stock Exchange</a></li>
                  <li><a href="#" className=" text-decoration-none">Dhaka Stock Exchange</a></li>
                  <li><a href="#" className=" text-decoration-none"> Central Depository Bangladesh Ltd</a></li>
                </ul>
              </div>
            </div>
            <div className="d-none d-md-block text-center">
              <h5 className="fw-bold text-uppercase">Quick Link</h5>
              <ul className="list-unstyled">
                  <li><a href="#" className=" text-decoration-none">Home</a></li>
                  <li><a href="#" className=" text-decoration-none">Conract Us</a></li>
                  <li><a href="#" className=" text-decoration-none">Bangladesh Securities and Exchange Commission</a></li>
                  <li><a href="#" className=" text-decoration-none">Chittagong Stock Exchange</a></li>
                  <li><a href="#" className=" text-decoration-none">Dhaka Stock Exchange</a></li>
                  <li><a href="#" className=" text-decoration-none"> Central Depository Bangladesh Ltd</a></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Support */}
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="d-md-none">
              <button
                className="btn w-100 text-center text-uppercase fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#footerSection3"
              >
                contact info
              </button>
              <hr className="my-2 border-top border-secondary w-100" />
              <div className="collapse text-center" id="footerSection3">
                <ul className="list-unstyled mt-2">
                  <li><a href="#" className=" text-decoration-none"><strong>Head Office : 3rd Floor, Yousuf Chamber , 20 Dilkusha C/A , Dhaka 1000</strong></a></li>
                  <li><a href="#" className=" text-decoration-none"> info@wingsfin.com</a></li>
                  <li><a href="#" className=" text-decoration-none">02-55042694</a></li>
                  <li><a href="#" className=" text-decoration-none">+8801329669660</a></li>
                </ul>
              </div>
            </div>
            <div className="d-none d-md-block text-center">
              <h5 className="fw-bold text-uppercase">contact info</h5>
              <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none"><strong>Head Office : 3rd Floor, Yousuf Chamber , 20 Dilkusha C/A , Dhaka 1000</strong></a></li>
                  <li><a href="#" className=" text-decoration-none"> info@wingsfin.com</a></li>
                  <li><a href="#" className=" text-decoration-none">02-55042694</a></li>
                  <li><a href="#" className=" text-decoration-none">+8801329669660</a></li>
              </ul>
            </div>
          </div>

          {/* Section 4: Contact */}
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="d-md-none">
              <button
                className="btn w-100 text-center text-uppercase  fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#footerSection4"
              >
                Certificates
              </button>
              <hr className="my-2 border-top border-secondary w-100" />

              <div className="collapse text-center" id="footerSection4">
                <ul className="list-unstyled mt-2">
                  <li><a href="#" className=" text-decoration-none">TREC Certificate</a></li>
                  <li><a href="#" className=" text-decoration-none">Stock Broker License</a></li>
                  <li><a href="#" className=" text-decoration-none">Stock Broker License</a></li>
                </ul>
              </div>
            </div>
            <div className="d-none d-md-block text-center">
              <h5 className="fw-bold text-uppercase">Contact</h5>
              <ul className="list-unstyled">
                    <li><a href="#" className=" text-decoration-none">TREC Certificate</a></li>
                  <li><a href="#" className=" text-decoration-none">Stock Broker License</a></li>
                  <li><a href="#" className=" text-decoration-none">Stock Broker License</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
    
    
    
    </>);
}