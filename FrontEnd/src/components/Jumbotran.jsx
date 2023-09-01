import React from "react";

export default function Jumbotran() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row featurette'>
          <div className='col-md-7'>
            <h1 className='animated slideInLeft featurette-heading fw-bold'>
            Empowering Your Journey <br/>
            to the Right Job.
              <br />
            </h1>
            <p
              className='animated fadeInUp lead'
              style={{ animationDelay: "0.8s" }}
            >
            Looking for the perfect job? Your search ends here. Career Portal, India's premier job portal, hosts a wide array of job listings from 1000+ companies. Our sole objective is to assist you in securing your dream career.
            </p>

            
          </div>
          <div className='col-md-5'>
            <img
              src='/Assets/Images/HomePage/preview.jpg'
              alt='intro-img'
              className='img-responsive img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  );
}
