import React from "react";
import { Modal, Button, Row } from "react-bootstrap";
import CartItem from "./CartItem";

const CartElements = (props) => {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
        
        
    return(
            <AddToCart cartElements={cartElements} onHideCart={props.onHideCart} showCart={props.showCart} />
    )
}


const AddToCart = (props) => {
    return (
        <div 
        className="modal show"
        style={{ position: 'initial'}}
        >
        <Modal show={props.showCart} onHide={props.onHideCart}>
        <Modal.Header closeButton>
            <Modal.Title>
            </Modal.Title>
        </Modal.Header>
            
        {props.cartElements.map((item) =>  (
        <CartItem title={item.title} price={item.price} imageUrl={item.imageUrl} quantity={item.quantity} />

        ))}
    
      
        <Modal.Body>
            <h1>Total<span>Rs 0</span></h1>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary">Purchase</Button>
        </Modal.Footer>
        </Modal>
        </div>

    );
};

export default CartElements;