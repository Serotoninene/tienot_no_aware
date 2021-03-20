import React, { Component } from 'react';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import './Main.css'
import '../Services.css'
import "animate.css/animate.min.css";


import lucie from '../assets/photos/lucie.png';
import fleur from '../assets/photos/fleur.png';


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        gsap.registerPlugin(ScrollTrigger)
    }

    componentDidMount(){
        //  TENTATIVE DE DÉCLENCHER PETITE ANIMATION AVEC LE SCROLLTRIGGER DE GSAP
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.lucie',
                start: 'top center',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('.lucie', {opacity:0, duration: 1, id: 'lucief', y:30, ease:Power3.ease})
          .from('.fleur', {opacity:0, duration:1, y:-30,id: 'fleurs' , ease:Power3.ease}, '-=1')
    }

    render(){
        return (
            <div className = "Main relative">
                <div id="" className = "absolute lucie"> 
                    <img src = {lucie} className="resp" alt = "Lucide Amiante"></img>
                </div>

                <div className = "fleur absolute"> 
                    <img src = {fleur} className="resp" alt = "Lucide Amiante"></img>
                </div>
            </div>
        )
    }
}

export default Main