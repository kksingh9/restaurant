import { useState, useCallback, useEffect } from "react";
import CartContext from "./CartContext.jsx";

const CartProvider = (props) => {
  const [cartItemState, setCartItemState] = useState([]);
  const [cartAmountState, setCartAmountState] = useState(0);
  const [emailId, setemailId] = useState("");

  const existingtoken = localStorage.getItem('token');
  const [token, setToken] = useState(existingtoken || null);

 
  
  const onAddItemHandler = (item) => {
    
    //item.quantity = 0;
  
     const arr = [...cartItemState, { ...item }];
    // const res = arr.filter((item, index) => {
    //   return (
    //     index ===
    //     arr.findIndex((obj) => {
    //       return item.id === obj.id;
    //     })
    //   );
    // });
    // for (let items of res) {
    //   if (items.id === item.id) {
    //     items.quantity = JSON.stringify(parseInt(items.quantity) + 1);
    //   }
 
    // }
    // const newArray = res.map((item) => {
    //   return parseInt(item.price) * parseInt(item.quantity);
    // });
    // const sum = newArray.reduce((curr, prev) => {
    //   return curr + prev;
    // }, 0);
    //const objData = res.map((data) => JSON.stringify(data));



    setCartItemState(arr);
    // setCartAmountState(sum);
  };

  // useEffect(() => {
  //   onAddItemHandler();
  // }, [onAddItemHandler])
  
  
  const onRemoveItemHandler = (item) => {
    const newArray = cartItemState.filter((obj) => {
      return obj._id !== item._id;
    });
    const Array = newArray.map((item) => {
      return parseInt(item.price) * parseInt(item.quantity);
    });
    const sum = Array.reduce((curr, prev) => {
      return curr + prev;
    }, 0);



    setCartAmountState(sum);
    setCartItemState(newArray);
  };
  
  const userLoggedIn = !!token;
  const loginHandler = (token) => {
      localStorage.setItem('token',token);
      setToken(token);
  }
  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  const emailHandler = (email) => {
    let i=0;
    let newArray = []
    let extEmail ;
    while(i<email.length-1){
      let ans = "";
      while((email.charCodeAt(i)>=47 && email.charCodeAt(i)<=57) || 
      (email.charCodeAt(i)>=65 && email.charCodeAt(i)<=90) || 
      (email.charCodeAt(i)>=97 && email.charCodeAt(i)<=122)){
        ans = ans + email[i];

        i++;
     }
      newArray.push(ans);
      i++;
  }
  extEmail = newArray.join('')
  setemailId(extEmail);
}
//console.log(emailId);
  const cartContext = {
    items: cartItemState,
    totalAmount: cartAmountState,
    addItem: onAddItemHandler,
    removeItem: onRemoveItemHandler,
    token: token,
    login: loginHandler,
    isLoggedIn: userLoggedIn,
    logout: logoutHandler,
    addEmail: emailHandler,
    emailId: emailId,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
