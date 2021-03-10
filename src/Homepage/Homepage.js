import React, { Component } from 'react'
import '../Services.css'
import "./Homepage.css"

import Navbar from '../Navbar'
import HeroBanner from './HeroBanner'
import Main from './Main'

class Homepage extends Component{
    render(){
        return (
            <div className = "Homepage container flex">
                <Navbar />
                <HeroBanner />
                <Main />
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
            </div>
        )
    }
}

export default Homepage