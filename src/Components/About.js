import React from 'react'

function About() {
    return (
        <div>
            <section id="about" className="py-5">
	
    <div className="container">
        <div className="row">
            <div className="col-md-6 my-4">
                <h1 className="text-uppercase title-text display-3">About Us</h1>
                <p className="text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="#" className="btn hvr-right my-4 text-capitalize">
                    know More
                </a>
            </div>
            <div className="col-md-6 about-images my-4 d-none d-lg-block">
                <img src="images/image1.jpeg" alt="" className="img-1 img-thumbnail about-img"/>
                <img src="images/image2.jpg" alt="" className="img-2 img-thumbnail about-img"/>
                <img src="images/image3.jpeg" alt="" className="img-3 img-thumbnail about-img"/>
                <img src="images/image4.jpeg" alt="" className="img-4 img-thumbnail about-img"/>
                <img src="images/image5.jpeg" alt="" className="img-5 img-thumbnail about-img"/>
            </div>	
    
        </div>
    
    </div>
    
    </section>
        </div>
    )
}

export default About
