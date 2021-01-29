import React, { useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";


const CartTitle = styled.div`
    text-align: center;
    .title {
        margin-top: 50px;
        margin-bottom: 25px;
        font-size: 22px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    .spend {
        color: gray;
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;
const CartEmpty = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    text-align: center;
    p {
        margin-bottom: 40px;
    }
    button {
        padding: 14px 28px;
        cursor: pointer;
        border: none;
        background-color: black;
        color: white;
        letter-spacing: 0.2em;
        &:hover {
            opacity: 0.8;
        }
    }
`;
const CartItemsContainer = styled.div`
        margin-bottom: 50px;
        .shopping-btn {
            margin-top: 10px; 
            padding: 10px 24px;
            border: none;
            background-color: black;
            color: white;
            cursor: pointer;
            letter-spacing: 0.1rem;
            font-size: 12px;
            outline : none;
            margin-top: 20px;
            text-transform: uppercase;
            &:hover {
            opacity: 0.8;
        }
        }
`;
const ProductInCart = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    img {
        height: 100%;
    }
    .item-info, .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .item-info {
        letter-spacing: 1px;

        h3 {
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 10px;
            text-align: center;
        }
        p {
            color: gray;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 10px;
            text-align: center;
        }
    }
    .buttons {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        button {
            padding: 2px 8px;
            background-color: white;
            border: 1px solid lightgray;
            margin: 0px 5px;
            cursor: pointer;
            outline : none;
        }
    }
    .remove-btn {
        border: none;
        border-bottom: 1px solid gray;
        background-color: white;
        cursor: pointer;
        color: gray;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        font-size: 12px;
        outline : none;
        &:hover {
            color: black;
        }
    }
    @media (max-width: 500px) {
        .item-info h3 {
            font-size: 10px;
            letter-spacing: 0.2px;
        }
        .item-info p {
            font-size: 10px;
        }
        .remove-btn {
            font-size: 10px;
        }
    }
`;
const TotalPrice = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: right;
    margin-top: 70px;
    p {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-bottom: 15px;
        color: #1C1B1B;
    }
    button {
        margin-top: 10px; 
        padding: 14px 28px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
        letter-spacing: 0.1rem;
        font-size: 12px;
        outline : none;
    }
`;


const Basket = ({ products, cart, getTotalSum, removeFromCart, removeAllItems, addToCart, decreaseQuantity }) => {


    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])


    
    return (
        <CartItemsContainer>
            {cart.length === 0 && <CartEmpty>
            <p>YOUR CART IS EMPTY</p>
            <Link to="/"><button>SHOP OUR PRODUCTS</button></Link>
            </CartEmpty>}
           {cart.length > 0 && <CartTitle>
           <p className="title">CART</p>
           <p className="spend">Spend $ 70 USD and get free shipping!</p>
           <Link to="/"><button className="shopping-btn">Continue Shopping</button></Link>
           </CartTitle>}
          
            
            {cart.map((product, index) => (
                <ProductInCart key={index}>
                    <img width="90px" src={product.img} alt=""/>
                        <div className="item-info">
                            <h3>{product.name}</h3>
                            <p>{product.tag}</p>
                            <p>$ {product.price} USD</p>
                    </div>
                        <div className="quantity">
                            <div className="buttons">
                                <button onClick={()=> addToCart(product)}>+</button>
                                <p>{product.quantity}</p>
                                <button onClick={()=> decreaseQuantity(product)}>-</button>
                            </div>
                        <button className="remove-btn" onClick={()=> removeFromCart(product)}>Remove</button>
                    </div>
                </ProductInCart>
            ))}
       
           <TotalPrice>{cart.length !== 0 && 
           <div>
           <p>Total: ${getTotalSum()} USD</p>
           <button>CHECKOUT</button>
           </div>
           }</TotalPrice>
        </CartItemsContainer>
    )
}

export default Basket
