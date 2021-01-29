import React, { useEffect } from 'react';
import styled from "styled-components";
import backImage from "../images/image-min.jpg";
import  { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css"



const HeroSection = styled.div`
    background-image: url("https://u.cubeupload.com/luxgroove/imagemin.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    button {
        width: 140px;
        background-color: black;
        border: none;
        color: white;
        padding: 18px;
        font-size: 16px;
        cursor: pointer;
        outline : none;
        letter-spacing: 0.8px;
        transition: all 600ms ease-in-out;
        &:hover {
            background-color: white;
            color: black;
        }
    }
`;
const HeroWrapper = styled.div`
        max-width: 1300px;
        margin: 0 auto;
        height: 100vh;
        
        .hero-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 0;
            margin-bottom: 50px;
            padding: 10px;
            color: white;
            p {
                margin-bottom: 30px;
                font-weight: 500;
                letter-spacing: 0.8px;
                font-size: 18px;
                text-transform: uppercase;
            }
        }

        @media (max-width: 600px) {
            .hero-right {
                
            }
        }
`;

const Hero = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <HeroSection >
            <HeroWrapper>
                <div className="hero-left"></div>
                    <div className="hero-right" data-aos="fade-up" data-aos-delay="1000">
                        <p></p>
                    <Link to="all-products" smooth={true}><button>SHOP NOW</button></Link>
                </div>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
