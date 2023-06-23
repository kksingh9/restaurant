import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
const ContactForm = (props) => {

    const enterNameRef = useRef('')
    const enterEmailIdRef = useRef('')
    const enterPhoneNumberRef = useRef('')

    const onSubmitHandler = (event) => {
            event.preventDefault();
            const ContactDetail = {
                name: enterNameRef.current.value,
                emailId: enterEmailIdRef.current.value,
                phoneNumber: enterPhoneNumberRef.current.value
            }
            props.onSaveContactDetail(ContactDetail);
    }

    return (
        <>
        <Container style={{margin: "5rem"}}>
        <Form onSubmit={onSubmitHandler} style={{margin:"5rem", maxWidth:'45rem', width:'50%',}}>
            <Form.Group className="mb-3" controlId="nameref">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" ref={enterNameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailidref">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" placeholder="email" ref={enterEmailIdRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phonenumberref">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="phonenumber" ref={enterPhoneNumberRef} />
            </Form.Group>
            <Button variant="primary" style={{width:'100%', maxWidth:'45rem'}} type="submit">
                Submit
            </Button>
        </Form>
        </Container>
        </>
    );
};

export default ContactForm;