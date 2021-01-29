import React, { useEffect } from 'react';
import styled from "styled-components";
import { FaChevronLeft } from 'react-icons/fa';
import storeImg1 from "../images/store-inside.jpg";
import storeImg2 from "../images/thehundreds50251.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"



const AboutPage = styled.div`
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 25px;
        padding: 15px;
        h1 {
            display: block;
            margin-bottom: 20px;
        }
        a {
            text-decoration: none;
            color: gray;
            font-size: 16px;
            margin-bottom: 15px;
            transition: color 300ms ease-in-out;
            &:hover {
                color: black;
            }
        }
        p {
            color: gray;
            font-size: 16px;
            margin-bottom: 15px;
        }
        .chevron {
            margin-right: 5px;
        }
        img {
            max-width: 800px;
            width: 100%;
            margin-bottom: 10px;
        }
`;

const About = () => {

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <AboutPage data-aos="fade-in">
            <Link to="/" data-aos="fade-down"><FaChevronLeft className="chevron"/> Back to store</Link>
            <h1 data-aos="fade-up">About Us</h1>
            <p data-aos="fade-up">- Started in 2020</p>
            <p data-aos="fade-up">- High quality fashion clothing</p>
            <img data-aos="fade-up" src={storeImg1} alt="store inside"/>
            <img data-aos="fade-up" src={storeImg2} alt="store inside"/>
        </AboutPage>
    )
}

export default About
