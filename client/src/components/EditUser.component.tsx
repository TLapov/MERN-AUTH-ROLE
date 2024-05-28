import { Button, Form, Modal } from 'react-bootstrap';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { fetchAPi } from '../app/api.service';
import { IUser } from '../pages/Users.page';

interface IEditUserProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    data: IUser | null,
    refreshData: () => {}
}

function EditUser({show, setShow, data, refreshData}: IEditUserProps) {
    const handleClose = () => setShow(false);
    const [userData, setUserData] = useState({
        username: data ? data.username : '',
        password: '',
        email: data ? data.email : '',
        phone: data ? data.phone : ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(data) {
                const res = await fetchAPi('/auth/update', 'PUT', {_id: data._id, ...userData});
                if(res.success) {
                setShow(false);
                refreshData();
                }
            }else {
                const res = await fetchAPi('/auth/register', 'POST', userData);
                if(res.success) {
                    setShow(false);
                    refreshData();
                }    
            }
          }catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{data ? 'Edit user': 'Create user'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name='username' 
                            placeholder="Username"
                            onChange={handleChange} 
                            value={userData.username} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name='password' 
                            placeholder="Password"
                            onChange={handleChange} 
                            value={userData.password} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name='email' 
                            placeholder="Email"
                            onChange={handleChange} 
                            value={userData.email} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text"
                            name='phone' 
                            placeholder="Phone"
                            onChange={handleChange} 
                            value={userData.phone} 
                        />
                    </Form.Group>
                    <Button className="w-100" variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
  )
}

export default EditUser;