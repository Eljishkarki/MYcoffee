import React from 'react'
// import Form from '../Classes/Form'
// import Time from '../Classes/Time'
// import Counterapp from '../Classes/Counterapp'
// import Likeunlike from '../Classes/Likeunlike'
// import Formanil from '../Classes/Formanil'
import About from './About'
// import Card from './Card'
import Card1 from './Card1'

import Carousel from './Carousel'
import Content1 from './Content1'

import Footer from './Footer'
import Modal from './Modal'
import Navbar from './Navbar'

// import Order from './Order'
import Tab from './Tab'

// function myFunction(item){
//     return (
//     <Card
//     key={item.key}
//     imgname={item.imgname}
//     title={item.title}
//     description={item.description}
//     />
//     )
// }
// let LoggedIn=true;
function Main() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <About/>
            <Content1/>
            <Card1/> 
            <Tab/> 
            <Footer/> 
            <Modal/> 
            
            {/* <Time/>
            <Formanil/> */}
        </div>
    )
}

export default Main
