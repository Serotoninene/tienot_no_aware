import React, { Component } from 'react'
import './Services.css'
import "./Navbar.css"
import {NavLink} from 'react-router-dom'


class Navbar extends Component{
    render(){
        return (
            <div className = "Navbar flex">
                <div> Logo </div> 
                <div>
                    <NavLink exact to = "/" className="NavLink" activeClassName = "activeStyle"  > Home </NavLink>
                    <NavLink exact to = "/" className="NavLink" activeClassName = "activeStyle"  > Work </NavLink>
                    <NavLink exact to = "/" className="NavLink" activeClassName = "activeStyle"  > About </NavLink>
                </div>

            </div>
        )
    }
}

export default Navbar