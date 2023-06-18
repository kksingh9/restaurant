import { Button } from "react-bootstrap";
import React, {useState} from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

const Counter = () => {

    const [state, setState] = useState({
        count : 0
    })

    const increm = () => {
        setState({
            count: state.count + 1
        })
    }
    const decrem = () => {
        setState({
            count: state.count - 1
        })
    }
    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col xs={4}>
                <Card className="shadow-lg">
                    <Card.Body>
                        <p className="display-2">{state.count}count</p>
                        <Button onClick={increm} variant="success" className="m-1">Increment</Button>
                        <Button onClick={decrem} variant="warning" className="m-1">
                            decrement</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Counter;