import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import {SiTiktok} from "react-icons/si";
import styled from "styled-components";
import { Link } from "react-router-dom";


const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: ${({open}) => open ? 1 : 0};
    visibility: ${({open})=> open ? "visible" : "hidden"};
    transition: all 500ms ease-in-out;
`;
const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    height: 100%;
    width: 25%;
    transform: ${({open})=> open ? "translateX(0%)" : "translateX(-100%)"};
    visibility: ${({open})=> open ? "visible" : "hidden"};
    padding: 15px;
    transition: all 600ms ease-in-out;

    .side-nav-ul {
        margin-top: 80px;
    }
    li {
        list-style: none;
        font-size: 18px;
        padding-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: #DFDFDF;
        letter-spacing: 1px;
        font-size: 18px;
        &:hover {
            color: gray;
        }
    }
    .main-menu-item {
        margin: 15px;
        border-bottom: 1px solid gray;
    }
    .socials-container {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0px;
        border-top: 1px solid gray;
        background-color: black;
    }
    .social-icons {
        color: gray;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
    @media (max-width: 1000px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        width: 80%;
    }
`;
const CloseIconDiv = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3; 
    
    .slide-menu-icon {
        display: inline-block;
        color: white;
        z-index: 5;
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px 20px;
        cursor: pointer;
    }
`;
const ScrollOverflow = styled.div`
    overflow-y: scroll;
`;
const OtherMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    li {
        padding-bottom: 20px;
        margin: 0px 15px;
    }
    a {
        font-size: 14px;
        color: grey;
        &:hover {
            color: white;
        }
    }
`;

const NavMenu = ({ open, setOpen }) => {

    //CLICK OUTSIDE OF MENU
    const menuRef = useRef()
    const handleClick = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)) {
            setOpen(false)
        }
    };
    useEffect(()=> {
        //detects click outside component
        //when mounted
        document.addEventListener("mousedown", handleClick);

        //when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    },[]);

    //CLOSES MENU
    const closeMenu = () => {
        setOpen(false)
    }

    useEffect(()=> {
        //turns scroll off and on
        open ? document.querySelector('body').style.overflow = "hidden" : document.querySelector('body').style.overflow = "visible";
    },[open])

    
    return (
        <OverLay open={open}>
            <SideNav open={open} ref={menuRef}>
                <ScrollOverflow>
                    <CloseIconDiv>
                        <AiOutlineClose onClick={()=> closeMenu()} className="slide-menu-icon" size={24}/>
                    </CloseIconDiv>
                    <ul className="side-nav-ul">
                        <Link to="/" onClick={closeMenu}><li className="main-menu-item">Home</li></Link>
                        <Link to="/about" onClick={closeMenu}><li className="main-menu-item">About</li></Link>
                        <Link to="/" onClick={closeMenu}><li className="main-menu-item">Shop</li></Link>

                        <OtherMenu>
                            <li><a href="/">Shipping & Returns</a></li>
                            <li><a href="/">Copyright</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                        </OtherMenu>
                    </ul>
                </ScrollOverflow>

                <div className="bottom-socials">
                    <div className="socials-container">
                        <FaFacebookSquare className="social-icons"/>
                        <FaTwitter className="social-icons"/>
                        <FaInstagram className="social-icons"/>
                        <SiTiktok className="social-icons"/>
                    </div>
                </div>
                
            </SideNav>
        </OverLay>

    )
}

export default NavMenu
