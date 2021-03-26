import React, { Component } from 'react'
import { TweenLite, Power3 } from "gsap"
// import SplitText from 'gsap/dist/SplitText'
import '../Services.css'
import "./HeroBanner.css"
import lac from "../assets/photos/lac.png"

class HeroBanner extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // gsap.registerPlugin(SplitText)
    }

    componentDidMount(){
        const upTitle = document.querySelector('#title .upTitle')
        const downTitle = document.querySelector('#title .downTitle')
        const image = document.querySelector('.HeroBanner-img')
        
        TweenLite.from(upTitle, {y:200, opacity:"0", delay: 0.1}, Power3.easeIn);
        TweenLite.to(upTitle, 1, {y:0}, Power3.easeIn);
        TweenLite.from(downTitle, {y:200, opacity:"0", delay: 0.5}, Power3.easeIn);
        TweenLite.to(downTitle, 1, {y:0} ,  Power3.easeIn);
        TweenLite.to(image, 1, {y:-10, width: '60%' }, Power3.easeIn)
    }
    render(){
        
        return (
            <div className = "HeroBanner flex relative">
                <div className = "HeroBanner-midpage flex">
                    <div id = "title" className = "relative" > 
                        <h1 className = "upTitle">tienot_no</h1>
                    </div>
                    <div id = "title" className = "relative" > 
                        <h1 className = "downTitle">_aware</h1>
                    </div>
                    
                    <div className = "HeroBanner-story relative">
                            <h2 style = {{zIndex: "10000"}}> <span>A short story ma</span>de by Etienne Glénat</h2>
                    </div>
                </div>
                <p className = "absolute"> @ made by Serotoninene</p>
                <div className= "HeroBanner-img absolute">
                    <img src = {lac} className="resp" alt = "magnifique lac (et non magnifique alc)"></img>
                </div>
            </div>
        )
    }
}

export default HeroBanner