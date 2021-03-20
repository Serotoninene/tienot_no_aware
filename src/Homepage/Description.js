import React, {Component} from 'react'
import "./Description.css"
import "../Services.css"

import sunset from "../assets/photos/sunset.png"
class Description extends Component{
    constructo(props){

    }

    render(){
        return (
            <div className = "Description"> 
                <div className = "row">
                    <div className = "Description-photo flex">
                        <img src = { sunset } alt = "sunset" className = "resp"></img>
                    </div>

                    <div className = "Description-text flex resp">
                            <h2> Lorem Ipsum </h2>
                            <br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. psum is simply dummy text of the printing and typesetting industry. </p>
                            <br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

                    </div>

                </div>
            </div>
        )
    }
}

export default Description