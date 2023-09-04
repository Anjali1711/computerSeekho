import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function Contact() {
  return (
    <Container>
        <br></br>
      <Row  sm={1}>
        <Col sm={5}>
      <iframe 
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1496.088720702838!2d72.83217507168757!3d19.111722611088823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c3a5e26d7b%3A0x89a89f343cff9c29!2sSM%20VITA!5e0!3m2!1sen!2sin!4v1692027007938!5m2!1sen!2sin'
            className='h-100 w-100,'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
          </Col>
      <Col sm={4}>
        <Form>
      <Form.Group controlId="f1">
      <Form.Label>Parent Name</Form.Label>
      <Form.Control
        size="sm"
        placeholder="Parent Name"
        type="text"
        id="Name"
      />
      </Form.Group>

      <Form.Group controlId="f2">
      <Form.Label>Your Name</Form.Label>
      <Form.Control
        size="sm"
        placeholder="Your Name"
        type="text"
        id="Name"
      />
      </Form.Group>
      
      <Form.Group controlId="f3">
      <Form.Label>Mobile No.</Form.Label>
      <Form.Control
        size="sm"
        placeholder="Mobile No."
        type="text"
        id="Name"
      />
      </Form.Group>

      <Form.Group controlId="f4">
      <Form.Label>Email</Form.Label>
      <Form.Control
        size="sm"
        placeholder="Email"
        type="text"
        id="Name"
      />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Query</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your text here..." />
        </Form.Group>
      <br></br>
        <input type='submit'/>
      </Form>
  
    <br></br>
        <h6>Authorised Training Centre</h6>
     5th Floor, Vidyanidhi Education Complex,<br></br> Vidyanidhi Road, Juhu Scheme Andheri (W), Mumbai 400 049 India<br></br>
    Mobile : 9029435311 / 9324095272 / 9987062416<br></br>
       Email : training@vidyanidhi.com
       </Col>
    </Row>
    </Container>
  );
}

export default Contact;