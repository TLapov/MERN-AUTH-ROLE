import { Button, Form } from "react-bootstrap";


function HomePage() {
    return (
      <section>
        <h1>Welcome to MERN authentication system</h1>  
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </section>
    )
}

export default HomePage;



{/* <Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>  */}