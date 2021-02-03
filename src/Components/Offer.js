import React from 'react'
import { Link } from 'react-router-dom'
import '../Offer.css'
import Navbar from './Navbar'

function Offer() {
    return (
        <div>
   <Navbar/> 
{/* <!-- ####card2##### --> */}
 
 

{/* special offer */}
<div className="wrapper">
	<div className="outer">
		<div className="content animated fadeInLeft">
			<span className="bg animated fadeInDown">Special Offer</span>
			<h1 class="one">Couples<br/> Get Discount</h1>
			<p class="cont">This package is for couples.........................</p>
			
			<div className="button5">
				<a href="#">Rs115</a><a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i>ADD TO CART</a>
			</div>
			
		</div>
		<img src="images/couple.jpeg" width="300px" class="photo animated fadeInRight"/>
	</div>
	<p class="footer">Based on the Silk UI Kit - DesignModo Market</p>
</div>

        </div>
        
    )
}

export default Offer
