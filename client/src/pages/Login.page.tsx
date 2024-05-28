import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { fetchAPi } from "../app/api.service";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/auth/auth.slice";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useAppSelector(state => state.auth.user);
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  useEffect( ()=> {
    if(user) {
      navigate('/');
    }
  }, [])
  
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const res = await fetchAPi('/auth/login', 'POST', {username: username, password: password});
        if(res.success) {
          dispach(setUser(res.data));
          navigate('/');
        }
    } catch (error) {
        console.log(error);
    } finally {
      setUsername('');
      setPassword('');  
    }
  }
  
  return (
    <Container >
      <Form className="w-50 m-auto" onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text" 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)} 
                value={username} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Login;