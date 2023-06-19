import { Button } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";


const CartItem = (props) => {
    return (
        <Container className="mb-3">
            
                
                <span>{props.title}</span><br></br>
                
                <Image src={props.imageUrl}></Image><br></br>
                
                <span>Rs{" "}{props.price}</span><br></br>
               
                <span>Quantity:{" "}{props.quantity}</span>
                <Button variant="warning">Remove</Button>
    
        </Container>
    );
};

export default CartItem;