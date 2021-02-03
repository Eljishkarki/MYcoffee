import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../loginform.css'


function Navbar() {
    return (
        <div>
           
<div className="container">
      <div className="row">
      <img className="" id="logo1" src="images/logo1.png" style={{marginLeft:'-50px'}}/>
      
    <div className="col-md-8" style={{marginLeft:'150px'}}>
   
      <form className="d-flex">
    
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn" type="submit"><i className="bi bi-search"style={{fontSize: '25px'}}></i></button>

      </form>
   </div>
   <div className="col">
     <ul className="d-flex justify-content-end">
       <li className="list-unstyled"><a href="" className="px-2"><i className="fas fa-bell" style={{color:'#634832'}}></i></a></li>
       <li className="list-unstyled"><a href="" className="px-2"><i className="bi bi-people-fill"style={{color:'#634832'}}></i></a></li>
       
     </ul>
   </div>
    </div>
    </div>

    <nav id="subnav" className="navbar navbar-expand-lg">
  <div className="container-fluid">
<div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
    <div className="collapse navbar-collapse" id="nav2">
      <ul className="navbar-nav">
         <li className="nav-item">
          <NavLink activeClassName="active_nav" className="nav-link" aria-current="page" to="/"><i className="fas fa-mug-hot " style={{fontSize: '15px'}}></i>&nbsp;MY COFFEE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active_nav" className="nav-link" aria-current="page" to="/Order"><i className="fas fa-edit" style={{fontSize: '15px'}} ></i>&nbsp;ORDER MENU</NavLink>
        </li>
        
		<li className="nav-item">
          <NavLink activeClassName="active_nav" className="nav-link" aria-current="page" to="/Offer">OFFERS</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="active_nav" className="nav-link" aria-current="page" to="/Services">SERVICE</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/"><img className="img" src="images/logo.png" id="img1" height="100px" width="100px"/></Link>
        </li>

         {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
          <li className="list1">
              <ul className="d-flex" type='none'>
          <li className="nav-item">
          <NavLink activeClassName="active_nav" className="nav-link" to="/Cart"><i className="fas fa-shopping-cart"></i>&nbsp;MY CART</NavLink>
        </li>
        <li className="nav-item">
          <a  activeClassName="active_nav" className="nav-link" href="#modal1" data-bs-toggle="modal" data-bs-target="#modal1"><i className="fas fa-sign-in-alt"></i>&nbsp;COSTUMER LOGIN</a>
          </li>
          </ul>
        </li>
        
      </ul>
    </div>
    </ul>
  </div>
  </div>
</nav>   
<div className="modal" id="modal1" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Enter your details correctly</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Login here...</p>
        <div className="container1">
	<div className="row w-100 d-flex justify-content-center align-items-center main-div">

		<div className="col-12 col-lg-12 col-md-12 col-xxl-5">
			<div className="card3 py-3 px-2">
				<p id="frm" className="text-center my-3 text-capitalize"><span>Connect with us</span></p>
				<div className="row mx-auto">
					<div className="col-4">
						<a id="social" href="#" target=""><i className="fab fa-instagram"></i></a>
					</div>
				</div>
				<div className="row mx-auto">
					<div className="col-4">
						<a id="social" href="#" target=""><i className="fab fa-facebook"></i></a>
					</div>
				</div>
				<div className="row mx-auto mb-4">
					<div className="col-4">
						<a id="social" href="#" target=""><i className="fab fa-twitter"></i></a>
					</div>
				</div>
				<div className="division">
					<div className="row">
						<div className="col-6 mx-auto">
							<span className="main-heading">Login form</span>
						</div>
					</div>
		
						<div className="mb-5">
							<form className="myform">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control1" id="exampleInputPassword1"/>
  </div>
  <div className="row">
 
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input text-left" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div>

  <div className="col-md-6 col-12 bn text-capitalize">
  	<a href="#" className="register ">Register here</a>
  	 </div>
  </div>
  <div className="my-3">
  <button type="button" className="btn btn-block btn-primary btn-lg">
  	<small><i className="far fa-user pr-2"></i>Login</small>
  			</button>
  						</div>
              </form>
						</div> 
					</div>

				
				</div>
				
			</div>
		</div>
		
	</div>
</div>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>



</div>


      
    )
}

export default Navbar
