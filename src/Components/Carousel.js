import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel carousel_car   slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="images/coffeeA.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="images/coffee1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/coffee2.jpg" className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="images/coffee3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
        </div>
    )
}

export default Carousel
