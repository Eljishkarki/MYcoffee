import React from 'react'

function Video() {
    return (
        <div>
            <section className="most-liked p-5">
	
    {/* <div className="video-container">
        <video className="bg-video" autoplay muted loop>
            <source src="video/video1.mp4" type="video/mp4"/>
        </video>
    </div> */}
    
     <div className="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
    
    
    </section>
    
        </div>
    )
}

export default Video
