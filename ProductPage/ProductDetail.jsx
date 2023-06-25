import { Container } from 'react-bootstrap';
import { useParams, Route } from 'react-router-dom';
import TshirtImages from './Tshirt';

const ProductDetail  = () => {

    const params = useParams();
    console.log(params.productId);
    return(

        <Container style={{marginTop:"5rem"}}>
            <p>Product Detail</p>
            <h1>{params.productId}</h1>
            <Route path='/productpage/:productId'>
            <TshirtImages/>
            </Route> 
        </Container>
    );
}

export default ProductDetail;