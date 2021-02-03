import React from 'react'
import { Link } from 'react-router-dom'
import '../Service.css'
import Navbar from './Navbar'
function Services() {
    return (
        <div>
     <Navbar/> 

<div className="image">
    <img src="images/image6.jpeg" style={{height:'600px',width:'1400px'}}></img>
    <div className="block-center-inner">
      Barista training courses</div>
</div>
<div className="txt">
  <h1 class="title">Welcome to MYcoffee</h1>
  <p>MYCoffee Barista training course is designed to provide basic knowledge of coffee and develop excellent skill to brew the varieties of coffee beverages through different brewing methods as well as to provide legendary service to the customers at coffee house. We  break whole course into two procedure Theory and Practical it is because before brewing coffee there are some rules and technique to operate Espresso Machine.

MYcoffee provides detailed training to our students. The training sessions include lectures and demonstrations followed by hands-on practice. Our training sessions include a small group of individuals to ensure every student gets a chance to learn from highly passionate and experienced professionals.</p>
  </div>
  <h1 class="title">Gallery</h1>
  <center>
  <div className="service-card centered">
  
  <div className="card_part card_part-one">
    <img src="images/bt1.jpg"></img>

  </div>
  
   
  <div className="card_part card_part-two">
  <img src="images/bt2.jpg"></img>

  </div>

  
  <div className="card_part card_part-three">
  <img src="images/bt3.jpg"></img>
  </div>

  
  <div className="card_part card_part-four">
  <img src="images/bt4.jpg"></img>
  </div>

</div>
</center>

</div>

       
    )
}

export default Services
