import React, { useEffect } from 'react'
import AllProducts from './AllProducts';
import styled from "styled-components";
import Hero from "./components/Hero";
import Section from "./components/Section";


const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = ({ products }) => {

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Hero />
            <HomeContainer>
                <Section />
                <AllProducts  products={products}/>
            </HomeContainer>
        </>
    )
}

export default Home
