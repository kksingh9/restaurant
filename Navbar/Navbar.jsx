import { Button, Col, Row } from "react-bootstrap";
//import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
//import CartContext from "../../Store/CartContext";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";

const CartNavbar = (props) => {


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
            
              <NavLink 
              to="/product"
              // className={({ isActive }) => (isActive ? 'a' : 'b')}
              //end
              style={({isActive}) => ({
                textAlign: isActive ? 'center' : 'left',
              })}
              >
                HOME
                </NavLink>
              
            </Col>
            <Col>
              <NavLink 
              to="/productstore"
              style={({isActive}) => ({
                textAlign: isActive ? 'center' : 'left',
              })}
              >
                STORE
                </NavLink>
            </Col>
            <Col>
              <NavLink 
              to="/about"
              style={({isActive}) => ({
                textAlign: isActive ? 'center' : 'left',
              })}
              >
                ABOUT
                </NavLink>
            </Col>
          </Row>
        <CartButton />
        </Container>
      </Navbar>
    </>
  );
};

export default CartNavbar;
