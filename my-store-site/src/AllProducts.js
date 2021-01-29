import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css"


const ProductsTitle = styled.h1`
    margin: 20px 0px;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 24px;
    border-bottom: 2px solid lightgray;
`;
const AllProductsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    img {
        max-width: 200px;
        width: 100%;
    }
`;
const AllMyProducts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 1000px) {
        padding: 15px;        
        display: grid;
        grid-template-columns: repeat(4, 200px);
        justify-content: space-evenly;
        grid-gap: 0px 20px;
    }

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        margin-top: 0px;
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 170px);
    }
    @media (max-width: 500px) {
        grid-gap: 0px 0px;
    }
`;
const MyProducts = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    &:hover {
        background-color: #F9F8F6;
    }
    h3 {
        letter-spacing: 0.6px;
        font-size: 14px;
        line-height: 2;
        text-align: center;
    }
    p {
        letter-spacing: 0.6px;
        font-size: 14px;
        line-height: 2;
        margin-bottom: 5px;
        text-align: center;
        color: gray;
    }
    h4 {
        letter-spacing: 0.6px;
        font-size: 16px;
        text-align: center;
        font-weight: 600;
    }
    .price {
        font-weight: bold;
    }
    @media (max-width: 600px) {
        margin-bottom: 25px;
    }
`;


const AllProducts = ({ products }) => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])



    return (
        <>
        <ProductsTitle id="all-products">TEES & HOODIES</ProductsTitle>
        <AllProductsContainer data-aos="fade-in">
            <AllMyProducts>
                {products.map((product, index) => (
                    <MyProducts key={index}>
                        <Link to={`/products/${product.title}`}>
                            <img src={product.img} alt=""/>
                            <h3>{product.name}</h3>
                            <p className="tag">{product.tag}</p>
                            <p className="price">$ {product.price}</p>
                        </Link>
                    </MyProducts>
                ))}
            </AllMyProducts>
        </AllProductsContainer>
        </>
    )
}

export default AllProducts
