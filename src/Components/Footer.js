import React from 'react'
import { Link } from 'react-router-dom'
import '../footer-top.css'

function Footer() {
    return (
        <div>
            <div className="footer-top">
	<div className="container">
		<div className="row">
			<div className="col-md-3 col-sm-6 col-xs-12 segment-one">
				<h2>MYcoffee</h2>
				<p class="cont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				
					 </p>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 segment-two">
					<h2>Links</h2>
				<ul>
					<li><Link to="#">Event</Link></li>
					<li><Link to="#">Support</Link></li>
					<li><Link to="#">Contact</Link></li>
					<li><Link to="#">Career</Link></li>
					<li><Link to="#">Blog</Link></li>
			</ul>
				
			</div>
			<div className="col-md-3 col-sm-6 col-xs-12 segment-three">
				<h2>Follow us</h2>
				<p class="cont">please follow us on our social media profile inorder to keep updated.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				 </p>
				<a href="#"><i className="fab fa-facebook"></i></a>
				<a href="#"><i className="fab fa-twitter"></i></a>
				<a href="#"><i className="fab fa-linkedin"></i></a>
				<a href="#"><i className="fab fa-instagram"></i></a>
			</div>
			<div className="col-md-3 col-sm-6 col-xs-12 segment-four">
				<h2>our newsletter</h2>
				<p class="cont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
				<form action="">
					<input type="email" name=""/><br/>
					<input type="submit" value="subscribe"/>
				</form>
			</div>
		</div>
	</div>
</div>
            <footer>Copyright &copy; MYcoffee. All rights reserved.</footer>
        </div>
    )
}

export default Footer
