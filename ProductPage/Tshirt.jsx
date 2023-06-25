import { Container, Image, Row, Col } from "react-bootstrap";

const TshirtImages = () => {
    return (
        <Container >
            <p>Tshirt images</p>
            <Row>
                <Col xs={6} md={4}>
                <Image src="images/images1.jpg" />
                </Col>
                <Col xs={6} md={4}>
                <Image src="images/images2.jpg" />
                </Col>
                <Col xs={6} md={4}>
                <Image src="images/images3.jpg" />
                </Col>
            </Row>
            <p>Rating 5.5</p>
        </Container>
    );
};

export default TshirtImages;