import React from 'react'
import { Link } from 'react-router-dom'


function Tab() {
    return (
        <div>
			<section className="my-50">
	<div className="container">
		<div className="content-4">
			<ul className="nav" role="tablist">
				<li className="nav-item nav-tabs">
					<a href="#pie"className="active tab-item" role="tab" data-toggle="tab">
						<i className="fas fa-apple-alt"></i>
						<span>Apple Pie</span>
					</a>
				</li>
				<li className="nav-item nav-tabs">
					<a href="#bread"className="tab-item" role="tab" data-toggle="tab">
						<i className="fas fa-bread-slice"></i>
						<span>Organic Bread</span>
					</a>
				</li>
				<li className="nav-item nav-tabs">
					<a href="#candy"className="tab-item" role="tab" data-toggle="tab">
						<i className="fas fa-candy-cane"></i>
						<span>Sugar Free Candies</span>
					</a>
				</li>
				<li className="nav-item nav-tabs">
					<a href="#cookies"className="tab-item" role="tab" data-toggle="tab">
						<i className="fas fa-cookie"></i>
						<span>chocolates</span>
					</a>
				</li>
			</ul>
			
			<div className="tab-content">
				<div className="active tab-pane" role="tab-panel" id="pie">
					<div className="row justify-content-md-center">
						<div className="col-md-3 offset-md-1">
							<h4>Home Made Apple Pie</h4>
						</div>
						<div className="col-md-7">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
						</div>
					</div>
				</div>
				<div className="tab-pane" role="tabpanel" id="bread">
					<div className="row justify-content-md-center">
						<div className="col-md-3 offset-md-1">
							<h4>Home Made Organic Bread</h4>
						</div>
						<div className="col-md-4">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. </p>
						</div>
						<div className="col-md-4">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
						</div>
					</div>
				</div>
				<div className="tab-pane" role="tabpanel" id="candy">
					<div className="row justify-content-md-center">
						<div className="col-md-4 offset-md-1">
							<h4>Sugar Free Candies</h4>
						</div>
						<div className="row pt-3">
							<div className="col-md-10 offset-md-1">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane" role="tabpanel" id="cookies">
					<div className="row">
						<div className="col-md-4 offset-md-1">
							<h4>Home Made Chocolate Cookies</h4>
						</div>
						<div className="row">
							<div className="col-md-3 offset-md-1">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>

			</div>
			<div className="col-md-3">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
			<div className="col-md-3">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</section>

			</div>
            
    )
}

export default Tab
