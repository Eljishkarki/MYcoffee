import React from 'react'

function Card1() {
    return (
        <div>
		
            <div className="container-card">
			
	<div className="row main-row">
		<div className="col-md-4 mb-5">
			<div className="card1 p-3" style={{width: '18rem'}}>
				<img src="images/image1.jpeg" alt="" className="card-img-top shadow bg-white rounded"/>
				<div className="card-body">
					<h5 className="card-title">image1</h5>
					<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	
					</p>
					<button type="button" className="btn btn-outline-dark">Read More</button>
				</div>
			</div>
		</div>
		<div className="col-md-4 mb-5">
			<div className="card1 p-3" style={{width: '18rem'}}>
				<img src="images/image3.jpeg" alt="" className="card-img-top shadow bg-white rounded"/>
				<div className="card-body">
					<h5 className="card-title">image2</h5>
					<p className="card-text">Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit, sed do eiusmod
					
					</p>
					<button type="button" className="btn btn-outline-dark">Read More</button>
				</div>
			</div>
		</div>
		<div className="col-md-4 mb-5">
			<div className="card1 p-3" style={{width: '18rem'}}>
				<img src="images/image5.jpeg" alt="" className="card-img-top shadow bg-white rounded"/>
				<div className="card-body">
					<h5 className="card-title">image3</h5>
					<p className="card-text">Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit, sed do eiusmod
					
					</p>
					<button type="button" className="btn btn-outline-dark">Read More</button>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default Card1
