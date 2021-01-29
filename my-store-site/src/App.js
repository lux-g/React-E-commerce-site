import React, { useState, useEffect, Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import SingleProduct from './SingleProduct';
import Nav from "./components/Nav";
import Basket from "./components/Basket";
import About from "./components/About";
import styled from "styled-components";


const Footer = lazy(()=> import("./components/Footer"));


const Content = styled.div`
  flex: 1 0 auto;
`;


function App() {

  const [products] = useState([
    {
      name: "Crooks and Castles",
      title: "BandinoTee",
      tag: "Bandido Dot Tee",
      moreInfo: "The Bandido Dot Tee in White",
      price: 32,
      img: "https://i.ibb.co/rGscSP7/tshirt-1.jpg",
      info1: "Crewneck",
      info2: "Short Sleeves",
      info3: "Print on front chest and back",
      info4: "Double-stitched hems",
      info5: "100% Cotton",
      imgSide: "https://i.ibb.co/RTrD2r2/bandido-tee-side.jpg",
      imgBack: "https://i.ibb.co/w7b106b/bandido-tee-back.jpg",
      id: 1,
      quantity: 1
    },
    {
      name: "Riot",
      title: "RiotTee",
      tag: "Vote Peace Tee",
      moreInfo: "Vote Peace Mens T-Shirt",
      price: 24,
      img: "https://i.ibb.co/FgY0NW4/tshirt-2.jpg",
      info1: "Crewneck",
      info2: "Short Sleeves",
      info3: "Print on front chest and back",
      info4: "Double-stitched hems",
      info5: "100% Cotton",
      imgSide: "https://i.ibb.co/wwkbXjx/votepeace-tee-side.jpg",
      imgBack: "https://i.ibb.co/k9L2H9T/votepeace-tee-back.jpg",
      id: 2,
      quantity: 1
    },
    {
      name: "Adidas",
      title: "MonoSquareTee",
      tag: "Mono Square Tee",
      moreInfo: "Mono Square Short Sleave Tee",
      price: 29,
      img: "https://i.ibb.co/jTVyW5D/tshirt-3.jpg",
      info1: "Crewneck",
      info2: "Short Sleeves",
      info3: "Print on front chest and back",
      info4: "Double-stitched hems",
      info5: "100% Cotton",
      imgSide: "https://i.ibb.co/svmnrtJ/monosquare-tee-side.jpg",
      imgBack: "https://i.ibb.co/J5ZhC8q/monosquare-tee-back.jpg",
      id: 3,
      quantity: 1
    },
    {
      name: "Vans",
      title: "ThankYouTee",
      tag: "Thank You Tee",
      moreInfo: "Thank You Short Sleeve Tee",
      price: 23,
      img: "https://i.ibb.co/jVzR86x/tshirt-4.jpg",
      info1: "Crewneck",
      info2: "Short Sleeves",
      info3: "Print on front chest and back",
      info4: "Double-stitched hems",
      info5: "100% Cotton",
      imgSide: "https://i.ibb.co/k1B6QHW/thankyou-tee-side.jpg",
      imgBack: "https://i.ibb.co/C0f6GDj/thankyou-tee-back.jpg",
      id: 4,
      quantity: 1
    },
    {
      name: "Adidas",
      title: "WarmUpHoodie",
      tag: "Warm-up Hoodie",
      moreInfo: "Trefoil Warm-up Hoodie",
      price: 40,
      img: "https://i.ibb.co/YXRyRjh/hoodie-1.jpg",
      info1: "100% cotton french terry",
      info2: "Pullover Hood",
      info3: "Side cuffs, drawstring cord",
      info4: "Ribbed cuffs",
      info5: "Print on front chest",
      imgSide: "https://i.ibb.co/Hq9DsHj/adidas-hoode-side.jpg",
      imgBack: "https://i.ibb.co/z76t1GK/adidas-hoodie-back.jpg"
    },
    {
      name: "Riot Society",
      title: "ScreamingCupHoodie",
      tag: "Screaming Cup Hoodie",
      moreInfo: "Screaming Cup Mens Hoodie",
      price: 58,
      img: "https://i.ibb.co/2Z5QRxf/hoodie-2.jpg",
      info1: "50% Polyester / 50% Cotton",
      info2: "Pullover Hood",
      info3: "Satin neck label zig-zag stitch behind hoodie",
      info4: "Machine Washable",
      info5: "Print on front chest",
      imgSide: "https://i.ibb.co/gds83ks/riot-hoodie-side.jpg",
      imgBack: "https://i.ibb.co/2nLRypP/riot-hoodie-front.jpg"
    },
    {
      name: "Vans",
      title: "DistortTypeHoodie",
      tag: "Distort Type Hoodie",
      moreInfo: "Distort Type Pullover Hoodie",
      price: 49,
      img: "https://i.ibb.co/x5sg9PR/hoodie-3.jpg",
      info1: "100% Cotton",
      info2: "Pullover Hood",
      info3: "Kangaroo pocket",
      info4: "Drawstrings",
      info5: "Graphic print on the back and hoodie",
      imgSide: "https://i.ibb.co/7zzMSQn/vans-hoodie-side.jpg",
      imgBack: "https://i.ibb.co/XL6Vbpw/vans-hoodie-back.jpg"
    },
    {
      name: "Primitive",
      title: "NavystripedHoodie",
      tag: "Navy striped Hoodie",
      moreInfo: "Jackson Striped Hoodie",
      price: 70,
      img: "https://i.ibb.co/wK5zsDz/hoodie-4.jpg",
      info1: "100% Cotton",
      info2: "Pullover Hood",
      info3: "Striped print",
      info4: "Drawstrings",
      info5: "Primitive logo on the center",
      imgSide: "https://i.ibb.co/Zx7xHQq/primitive-hoodie-side.jpg",
      imgBack: "https://i.ibb.co/MhxVx82/primitive-hoodie-back.jpg"
    }
  ]);

  
  const [cart, setCart] = useState([])

  //LOCAL STORAGE ON FIRST PAGE LOAD
  useEffect(()=> {
    const data = localStorage.getItem('cart');
    if(data) {
      setCart(JSON.parse(data))
    }
  },[])
  //SET LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])


  //ADD ITEMS TO CART/AND ADD QUANTITY
  const addToCart = (product) => {
    //make new cart array which is the old array
    let newCart = [...cart];
    //loop through new cart and find item equal to product name
    let itemInCart = newCart.find((item) => product.tag === item.tag);
    //if item exists quantity is increased
    if(itemInCart) {
      itemInCart.quantity++
      //if it doesnt we add it with a quantity of 1
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      }
      //push item to cart
      newCart.push(itemInCart)
    }
    setCart(newCart)
  }
  //REMOVE QUANTITY IN CART
  const decreaseQuantity = (product) => {
        //make new cart array which is the old array
        let newCart = [...cart];
        //loop through new cart and find item equal to product name
        let itemInCart = newCart.find((item) => product.tag === item.tag);
        //if item exists quantity is decreased
        if(itemInCart.quantity > 1) {
          itemInCart.quantity--
        } 
        setCart(newCart)
  }
  //REMOVE EACH ITEM FROM CART
  const removeFromCart = (productToRemove) => {
    //filter all products that dont equal current one that was sent in
    setCart(cart.filter(product => product !== productToRemove))
  }
  //CLEAR CART
  const removeAllItems = (product) => {
    setCart([])
  }
  //TOTAL COST
  const getTotalSum = () => {
    return cart.reduce((sum, {price, quantity}) => sum + price * quantity, 0)
  }
  //DISPLAY NUMBER OF ITEMS IN CART
  const displayCartNum = () => {
    return cart.reduce((sum, {quantity}) => sum + quantity, 0)
  }


  
  return (
    <>
    <Router>
      <Content>
          <Nav displayCartNum={displayCartNum}/>
          <Switch>
              <Route exact path="/">
                <Home products={products}/>
              </Route>
            <Route path="/products/:title">
              <SingleProduct addToCart={addToCart} products={products}/>
            </Route>
            <Route path="/cart">
              <Basket decreaseQuantity={decreaseQuantity} addToCart={addToCart} products={products} removeAllItems={removeAllItems} removeFromCart={removeFromCart} getTotalSum={getTotalSum} cart={cart} />
            </Route>
            <Route>
              <About path="/about"/>
            </Route>
          </Switch>
      </Content>
      
      <Suspense fallback={<div>loading...</div>}>

        <Route>
          <Footer/>
        </Route>

      </Suspense>
    </Router>
    </>
  );
}

export default App;





