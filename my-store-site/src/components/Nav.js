import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavMenu from './NavMenu';


const NavContainer = styled.div`
    background-color: black;
    color: #DFDFDF;
    nav {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 25px;
    }
    .logo {
        display: flex;
        align-items: center;
        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.1px;
            font-size: 28px;
        }
        a {
            text-decoration: none;
        }
    }
    .burger {
        cursor: pointer;
        z-index: 1;
    }
    .fa-shopping-cart {
        cursor: pointer;
        color: #DFDFDF;
    }
    a {
        text-decoration: none;
        color: #DFDFDF;
    }
    @media (max-width: 700px) {
        .logo p {
            font-size: 24px;
        }
    }
`;

const Nav = ({ displayCartNum }) => {

    const [open, setOpen] = useState(false)

    return (    
        <>
            <NavContainer className="nav-container">
                <nav>
                    <div className="burger">
                        <FontAwesomeIcon onClick={()=> setOpen(!open)} icon={faBars} size="2x"/>
                    </div>
                    <div className="logo">
                        <Link to="/"><p>Nine Fifty co</p></Link>
                    </div>
                    <div className="cart">
                        <Link to="/cart"><p><FontAwesomeIcon icon={faShoppingCart}/> {displayCartNum()}</p></Link>
                    </div>
                </nav>
            </NavContainer>
            <NavMenu open={open} setOpen={setOpen}/>
        </>
    )
}

export default Nav
