import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const Register = () => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });

  const updateInput = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const Register = (e) => {
        e.preventDefault();
        console.log(state.user);
  }
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: "#ffc107" }}
              >
                <h4>Register</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f2efe5" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                    name="username"
                    onChange={updateInput} 
                    type="text" 
                    placeholder="username" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                    name="email"
                    onChange={updateInput}
                    type="email" 
                    placeholder="Email" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                    name="password"
                    onChange={updateInput}
                    type="password" 
                    placeholder="password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button onClick={Register} variant="warning" type="submit">
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
