import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



const PurchaseContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;

`;
const PurchaseWrapper = styled.div`
    margin-top: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;

    @media (max-width: 950px) {
        flex-direction: column;
    }
    @media (max-width: 500px) {
        margin-top: 25px;
    }
`;
const PurchaseImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .main-img img {
        width: 100%;
        max-width: 350px;
        height: 100%;
    }
    .small {
        width: 80px;
        cursor: pointer;
        display: flex;
        height: 100%;
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        .main-img img {
            width: 250px;
        }
    }
    @media (max-width: 500px) {
        .main-img img {
            max-width: 225px;
        }
    }
`;
const Imgs = styled.div`
    margin-top: 50px;
    img {
        max-width: 100%;
        margin-right: 50px;
        margin-bottom: 20px;
        height: 100%;
    }

    @media (max-width: 800px) {
        display: flex;
        img {
            margin: 15px;
            height: 100%;
        }
    }
`;
const PurchaseInfo = styled.div`
    h4,
    h1 {
        margin-bottom: 30px;
    }
    .price {
        color: grey;
        font-weight: 900;
        margin-bottom: 20px;
        line-height: 1.65;
        letter-spacing: 0.5px;
    }
    .add-to-cart {
        letter-spacing: 0.2em;
        font-size: 12px;
        text-transform: uppercase;
        background-color: black;
        color: white;
        border: 1px solid transparent;
        width: 100%;
        padding: 14px 28px;
        cursor: pointer;
        margin-bottom: 20px;
        outline : none;
        &:hover {
            opacity: 0.8;
        }
    }
    @media (max-width: 950px) {
        margin-top: 75px;

        h1, h4, .price {
            text-align: center;
        }
    }
    @media (max-width: 800px) {
        h1 {
            font-size: 22px;
        }
    }
`;
const ProductInfo = styled.div`
    li {
        margin-left: 25px;
        padding: 5px 0;
        line-height: 1.65;
        font-size: 14px;
        letter-spacing: 0.2px;
    }
`;

const SingleProduct = ({ products, addToCart }) => {

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {
        Aos.init({duration: 1200})
    },[])

    useEffect(()=> {
        const ImgClick = (e) => {
        current.src = e.target.src;
        imgs.forEach(img => (img.style.border = "none"));
        e.target.style.border = "1px solid black";
        }

        const current = document.querySelector('.current');
        const imgs = document.querySelectorAll('.small');
        imgs.forEach(img => img.addEventListener('click', ImgClick))
    },[])



    const { title } = useParams();
    return (
        <div data-aos="fade-in">
            {products.filter(product => product.title === title).map((product, index) => (
                <PurchaseContainer key={index}>
                    <PurchaseWrapper>
                        <PurchaseImg>
                            <Imgs>
                                <img className="small" src={product.img} alt="main-small"/>
                                <img className="small" src={product.imgSide} alt="side"/>
                                <img className="small" src={product.imgBack} alt="back"/>
                            </Imgs>
                            <div className="main-img">
                                <img className="current" src={product.img} alt="main-img"/>
                            </div>
                        </PurchaseImg>
                            <PurchaseInfo>
                                <h4>{product.name}</h4>
                                <h1>{product.moreInfo}</h1>
                                <p className="price">$ {product.price} USD</p>
                                <Link to="/cart"><button onClick={()=> addToCart(product)} className="add-to-cart">Add To Cart</button></Link>

                                <ProductInfo>
                                    <ul>
                                        <li>{product.info1}</li>
                                        <li>{product.info2}</li>
                                        <li>{product.info3}</li>
                                        <li>{product.info4}</li>
                                        <li>{product.info5}</li>
                                    </ul>
                                </ProductInfo>
                            </PurchaseInfo>
                    </PurchaseWrapper>
                </PurchaseContainer>
            ))}
        </div>
    )
}

export default SingleProduct
