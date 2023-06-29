import React, { useContext, useCallback, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../../Store/CartContext";
import { useState } from "react";

const CartElements = (props) => {
  const cartCtx = useContext(CartContext);
    const itemData = cartCtx.items
  const [loadingCartData, setLoadingCartData ] = useState([]);
  const EmailId = cartCtx.emailId;
  console.log(EmailId);
  
  const abcGet = useCallback(() => {
    
    fetch(`https://crudcrud.com/api/2ca6a3cd42454b4aaaae3887d5b11c04/cart${EmailId}`)
    .then((response) => {
      if(response.ok){
    return response.json()
      }else{
        throw new Error("something went wrong!");
      }
      
    }).then((data) =>{
      console.log(data);
    let cartData = [];
      for(let key in data){
        cartData.push({
          
          id: data[key]._id ,
          title: data[key].title,
          imageUrl: data[key].imageUrl,
          quantity: data[key].quantity,
          price: data[key].price
        })
      }
      cartCtx.addItem(data)
      setLoadingCartData(cartData);
    }).catch((err) => {
        console.log(err.message);
    });
      
  },[EmailId]);
  
  useEffect(() => {
  abcGet();
  
  },[abcGet]);

  // console.log(loadingCartData);

  return (
    <AddToCart
      cartData={loadingCartData}
      onHideCart={props.onHideCart}
      showCart={props.showCart}
    />
  );
};

const AddToCart = (props) => {
  const ctx = useContext(CartContext);
  const TotalAmount = `${ctx.totalAmount}`;
  return (
    <div className="modal show" style={{ position: "initial" }}>
      <Modal show={props.showCart} onHide={props.onHideCart}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        {props.cartData.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          />
        ))}

        <Modal.Body>
          <h1>
            Total amount {" "}<span>Rs {TotalAmount}</span>
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartElements;
