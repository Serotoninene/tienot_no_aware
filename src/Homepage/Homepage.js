import React, { Component } from 'react'
import { gsap,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../Services.css'
import "./Homepage.css"

import Navbar from '../Navbar'
import HeroBanner from './HeroBanner'
import Main from './Main'
import Description from './Description'

class Homepage extends Component{

    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger)
        const page = document.querySelector('body')
        let tl1 = gsap.timeline({
            scrollTrigger:{
                trigger: '.lucie',
                start: 'top center',
                end: "+=300px",
                markers: true,
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


        tl1.to('.Homepage', { duration: 1, backgroundColor: '#FF0000', ease: Power3.easeIn }, 0)
        tl2.to('.Homepage', { duration: 1, backgroundColor: '#0000FF', ease: Power3.easeIn }, 0)
        // tl.from('.lucie', {opacity:0, duration: 1, id: 'lucief', y:30, ease:Power3.ease})

    }
    render(){
        return (
            <div className = "Homepage ">
                <div className = "container flex">
                    <Navbar />
                    <HeroBanner />
                    <Main />
                    <Description />
                </div>
            </div>
        )
    }
}

export default Homepage