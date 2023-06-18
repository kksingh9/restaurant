import { Container, Image, Row, Col } from "react-bootstrap";



const ProductOnScreen = (props) => {

    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center">
                <Col>
            <h1>{props.title}</h1>
            <Image src={props.imageUrl}></Image>
            <h2>Rs{props.price}</h2>
            </Col>
            </Row>
        </Container>
    );

};

export default ProductOnScreen;