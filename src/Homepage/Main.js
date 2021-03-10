import React, { Component } from 'react';
import {gsap, TweenLite, Power3} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Main.css'
import '../Services.css'

import lucie from '../assets/photos/lucie.png';
import fleur from '../assets/photos/fleur.png';
class Main extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        const lucie = document.querySelector('#lucie')
        const fleur = document.querySelector('.fleur')

        gsap.to(lucie, 1, 
            { y : 10,
            opacity : "100%",
            ScrollTrigger : {
                trigger : "#lucie",
                start: top
                
                }
            }
            , Power3.easeIn)
        TweenLite.to(fleur, 1, { y : -10, opacity : "100%"}, Power3.easeIn)

    }

    render(){
        return (
            <div className = "Main relative">
                <div id="lucie" className = "absolute" data-aos="fade-up"> 
                    <img src = {lucie} className="resp" alt = "Lucide Amiante"></img>
                </div>

                <div className = "fleur absolute" data-aos="fade-down"> 
                    <img src = {fleur} className="resp" alt = "Lucide Amiante"></img>
                </div>
            </div>
        )
    }
}

export default Main