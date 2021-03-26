import React, { Component } from 'react'
import { gsap,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../Services.css'
import "./Homepage.css"

import Navbar from '../Navbar'
import HeroBanner from './HeroBanner'
import Main from './Main'
import Carousel from './Carousel'
import Description from './Description'

class Homepage extends Component{

    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger)
        let tl1 = gsap.timeline({
            scrollTrigger:{
                trigger: '.lucie',
                start: 'top center',
                end: "+=300px",
                scrub: true,
            }
        })
        let tl2 = gsap.timeline({
            scrollTrigger : {
                trigger: '.Description',
                start: 'top center',
                end: "+=300px",
                toggleActions : 'play reverse reverse  reverse',
                scrub: true
            }
        })


        tl1.to('.Homepage', { duration: 1, backgroundColor: '#C9A6A6', ease: Power3.easeIn }, 0)
        tl2.to('.Homepage', { duration: 1, backgroundColor: '#B57F7F', ease: Power3.easeIn }, 0)
        // tl.from('.lucie', {opacity:0, duration: 1, id: 'lucief', y:30, ease:Power3.ease})

    }
    render(){
        return (
            <div className = "Homepage ">
                <div className = "container flex">
                    <Navbar />
                    <HeroBanner />
                    <Main />
                    <Carousel />
                    <Description />
                </div>
            </div>
        )
    }
}

export default Homepage