import React, { useRef } from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isloading, setIsLoading] = useState(false);
  const history = useHistory();
  const authCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

   

        setIsLoading(true);
    fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVxMocJNaZfB1DKpsUzh5czeHrq-PoA6w",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Authentication failed!");
          }
        })
        .then((data) => {
          authCtx.login(data.idToken);
          history.replace('/');
        })
        .catch((err) => {
          alert(err.message);
        });
  };

  return (
    <Container style={{ marginTop: "5rem" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form
        onSubmit={submitHandler}
        style={{ maxWidth: "40rem", width: "90%", margin: "auto" }}
      >
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailInputRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            minLength="6"
            ref={passwordInputRef}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%", maxWidth: "40rem", margin: "auto" }}
        >
          Submit
        </Button>
        {isloading && <p>sending request...</p>}
      </Form>
    </Container>
  );
};

export default LoginForm;
