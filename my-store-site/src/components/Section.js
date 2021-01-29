import React, { useEffect } from 'react';
import styled from "styled-components";
import SideImgOne from "../images/side-by-side-two.jpeg";
import SideImgTwo from "../images/side-by-side-two.jpg";
import SideImgThree from "../images/side-by-side-three.jpg"
import SideImgFour from "../images/side-by-side-four.jpg";
import Logos from "../images/logos.png";
import Aos from "aos";
import "aos/dist/aos.css"


const ImageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    .image-wrapper {
        display: flex;
        justify-content: center; 
        align-items: center;
        justify-content: space-evenly;
        img {
            width: 100%;
        } 
    }
`;
const SideBySideImg = styled.div`
    display: flex;
    img {
        max-width: 100%;
        width: 100%;
    }
    .left-side {
        flex: 1;
    }
    .right-side {
        flex: 1;
    }
`;
const SideBySideImgTwo = styled.div`
    display: flex;
    img {
        max-width: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
    .left-side {
        flex: 1;
    }
    .right-side {
        flex: 1;
    }
`;




const Section = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (
        <div>
            <ImageContainer>
                <div className="image-wrapper" data-aos="fade-in" data-aos-delay="300">
                    <img src={Logos} alt=""/>
                </div>
            </ImageContainer>

            <SideBySideImg data-aos="fade-in" data-aos-delay="500">
                <div className="left-side">
                    <img src={SideImgOne} alt="adidas"/>
                </div>
                <div className="right-side">
                    <img src={SideImgTwo} alt="adidas"/>
                </div>
            </SideBySideImg>

            <SideBySideImgTwo data-aos="fade-in" data-aos-delay="500">
                <div className="left-side">
                    <img src={SideImgThree} alt="adidas"/>
                </div>
                <div className="right-side">
                    <img src={SideImgFour} alt="adidas"/>
                </div>
            </SideBySideImgTwo>
        </div>
    )
}

export default Section
