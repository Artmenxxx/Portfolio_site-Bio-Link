import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Label>Name</Form.Label>
        <Form.Control type="textarea" placeholder="your name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button>sumbit</button>
    </Form>
  );
}

export default ContactForm;