import { useContext } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../Store/CartContext.jsx";

const ProductOnScreen = (props) => {
  const cartctx = useContext(CartContext);
  const EmailId = cartctx.emailId

  const onAddProductHandler = () => {

    const cartElements = {
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      quantity: 1,
    };
    
    fetch(`https://crudcrud.com/api/2ca6a3cd42454b4aaaae3887d5b11c04/cart${EmailId}`,{
    
    method: "POST",
    body: JSON.stringify(cartElements),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if(response.ok){
    return response.json()
    }else{
      throw new Error("something went wrong");
    }
  }).then((data) => {
    console.log(data);
  }).catch((error) => alert(error.message) )
  };

  return (
    <Container className="mt-3 col-md-4" style={{marginLeft:'4rem'}}>
      <Row className="display-2">
        <Col>
          <h1 style={{fontSize:'2rem'}}>{props.title}</h1>
          <Image src={props.imageUrl}></Image>
          <br></br>
          <span style={{fontSize:'2rem'}}>Rs{props.price}</span>
          <span>
            {" "}
            <Button variant="primary" onClick={onAddProductHandler}>
              ADD TO CART
            </Button>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductOnScreen;
