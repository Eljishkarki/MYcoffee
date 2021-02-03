import React from 'react'
import '../order.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
function Order() {
    return (
        <div>
  
         <Navbar/> 
            <div className="container-fluid">
      <div className="row">
      <div className="col text-center py-5">
        <h1 className="text-uppercase text-color font-weight-bold">Order Menu</h1>
    </div>
    </div>

   

    <div className="row justify-content-around align-items-center">
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Espresso</h4>
          </div>
          <div className="card-body">
            <img src="images/image2.jpg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Muffin
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs180</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
    

        
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Cafe Latte</h4>
          </div>
          <div className="card-body">
            <img src="images/image1.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Croissant
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs200</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
    

        
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Cappuccino</h4>
          </div>
          <div className="card-body">
            <img src="images/image5.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Arabica</h4>
          </div>
          <div className="card-body">
            <img src="images/arabica.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Robusta</h4>
          </div>
          <div className="card-body">
            <img src="images/robusta.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Black</h4>
          </div>
          <div className="card-body">
            <img src="images/black.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Doppio</h4>
          </div>
          <div className="card-body">
            <img src="images/doppio.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm rotate">
        <div className="card text-center mb-3 coffee-card">
          <div className="card-header">
            <h4 className="font-weight-light title-text">Americano</h4>
          </div>
          <div className="card-body">
            <img src="images/americano.jpeg" className="img-fluid rounded"/>

          </div>
          <div className="card-footer">
            With Chocolate Cookies
          </div>
          <div className="back">
            <div className="back-content">
              <h1 className="text-uppercase font-weight-light">Only for</h1>
              <h4 className="mb-3">Rs250</h4>
              <a href="#" className="btn hvr-right my-4 text-capitalize">Order</a>
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
    

        </div>
    )
}

export default Order
