import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import {SiTiktok} from "react-icons/si";
import styled from "styled-components";
import { Link } from "react-router-dom";



const FooterWrapper = styled.footer`
        margin-top: 100px;
        background-color: black;
        padding: 30px;
`;
const FooterDiv = styled.div`
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #DFDFDF;
        a {
            text-decoration: none;
            color: #DFDFDF;
            transition: color 300ms ease-in-out;
            &:hover {
                color: gray;
            }
        }

        @media (max-width: 950px) {
            flex-direction: column;
            .left-side {
                padding-bottom: 20px;
            }
            .socials {
                padding-top: 20px;
            }
        }
`;
const AboutFooter = styled.div`
    display: flex;
    a, p {
        margin-right: 10px;
        letter-spacing: 1px;
    }
`;
const Join = styled.div`
    input {
        border: none;
        padding: 8px;
        max-width: 100%;
        width: 200px;
        font-size: 12px;
        outline: none;
    }
    button {
        cursor: pointer;
        background-color: #282828;
        color: #F7F7F7;
        border: none;
        padding: 8px;
        border: 1px solid #DFDFDF;
        outline : none;
        &:hover {
            background-color: black;
        }
    }
`;
const Socials = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        a, p {
            margin-right: 10px;
            letter-spacing: 1px;
        }
        .footer-social-icons {
            margin-right: 10px;
            letter-spacing: 1px;
            cursor: pointer;
        }

        @media (max-width: 950px) {
            padding-top: 20px;
        }
`;
const CopyrightContainer = styled.div`
        padding: 30px 0px;
        background-color: #F7F7F7;
`;
const CopyrightWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0px 30px;

        @media (max-width: 950px) {
            flex-direction: column;
        }
`;
const Copyright = styled.div`
    display: flex;
    p, a {
        font-size: 12px;
        color: gray;
        margin-right: 10px;
        letter-spacing: 1px;
        text-decoration: none;
        transition: color 300ms ease-in-out;
    }
    a {
        &:hover {
            color: black;
        }
    }

    @media (max-width: 950px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        .line {
            display: none;
        }
        a, p {
            padding-bottom: 20px;
        }
    }
`;
const Help = styled.div`
    a {
        font-size: 12px;
        color: black;
        margin-right: 10px;
        letter-spacing: 1px;
        text-decoration: none;
        transition: color 300ms ease-in-out;
        &:hover {
            color: gray;
        }
    }
`;

const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <FooterDiv>
                <div className="left-side">
                    <AboutFooter>
                        <Link to="/">SHOP STORE</Link>
                        <p>|</p>
                        <Link to="/about">ABOUT US</Link>
                    </AboutFooter>
                </div>
                <Join>
                    <input type="text" placeholder="ENTER EMAIL ADDRESS"/>
                    <button>JOIN</button>
                </Join>

                <div className="right-side">
                    <Socials>
                        <p>SHARE:</p>
                        <FaFacebookSquare className="footer-social-icons"/>
                        <FaTwitter className="footer-social-icons"/>
                        <FaInstagram className="footer-social-icons"/>
                        <SiTiktok className="footer-social-icons"/>
                    </Socials>
                </div>
            </FooterDiv>
        </FooterWrapper>

        <CopyrightContainer>
            <CopyrightWrapper>
                <Copyright>
                    <p>© 2020 SHOP Store</p>
                    <p className="line">|</p>
                    <Link to="/">Copyright</Link>
                    <p className="line">|</p>
                    <Link to="/">Privacy</Link>
                    <p className="line">|</p>
                    <Link to="/">Terms & Conditions</Link>
                </Copyright>
                <Help>
                    <Link to="/">Shipping & Returns</Link>
                </Help>
            </CopyrightWrapper>
        </CopyrightContainer>
        </>
    )
}

export default Footer
