import React, { Component } from 'react';
import { gsap,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Carousel.css';
import '../Services.css';

import sunset from "../assets/photos/sunset.png"

class Carousel extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger)
        // let tl = gsap.timeline({
        //     scrollTrigger:{
        //         pin: '.Carousel',
        //         start: 'top top',
        //         end: "+=100%",
        //         markers: true,
        //         snap : 1 / 1000
        //     }
        // })

        let sections = gsap.utils.toArray(".Carousel-section")
        let width = null;
        sections.forEach( (val, idx) => {
            width += val.offsetWidth;

        })

        console.log(width)
 
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "Power3.ease",
            scrollTrigger: {
                trigger : ".Carousel",
                pin: true,
                id: "carousel",
                markers : true,
                scrub: 1,
                snap : 1 / (sections.length - 1)

            }
        })
        
    }

    render(){
        return (
            <div className = "Carousel flex">
                <div className = "Carousel-section flex">
                    <div className = "Carousel-description flex">

                        <h2> проливає </h2>

                        <p >
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                        </p>
                    </div>


                    <div className = "Carousel-image">
                        <img src={sunset} alt="laeticia" className = "resp"/>
                    </div>
                </div>

               

                <div className = "Carousel-section flex">
                    <div className = "Carousel-description flex" >
                        <h2> на твою красу </h2>

                        <p>
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                        </p>
                    </div>


                    <div className = "Carousel-image">
                        <img src={sunset} alt="laeticia" className = "resp"/>
                    </div>
                </div>


                {/* <div className = "Carousel-section flex ">
                    <div className = "Carousel-description">
                        <p className = "description">
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                        </p>
                    </div>


                    <div className = "Carousel-image">
                        <img src={sunset} alt="laeticia" className = "resp"/>
                    </div>
                </div>
                <div className = "Carousel-section flex ">
                    <div className = "Carousel-description">
                        <p className = "description">
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                        </p>
                    </div>


                    <div className = "Carousel-image">
                        <img src={sunset} alt="laeticia" className = "resp"/>
                    </div>
                </div> */}
            </div>
        )
       
    }
}

export default Carousel