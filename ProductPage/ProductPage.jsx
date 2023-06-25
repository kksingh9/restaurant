import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProductPage = () => {
    return (
        <Container style={{marginTop:'5rem'}}>
    <h1>The Products Page </h1>
    <ul>
        <li><Link to='/productpage/images'>Tshirt</Link></li>
        <li><Link to='/productpage/p2'>A Carpet</Link></li>
        <li><Link to='/productpage/p3'>An online Course</Link></li>
    </ul>
    </Container>
    );
};

export default ProductPage;