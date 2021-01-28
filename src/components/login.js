import React,{useState} from 'react'
import { Button,Modal,Form} from 'react-bootstrap';
import { base_url } from './config';
import { Link } from 'react-router-dom'

var axios = require('axios');


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ErrorMessage, SetErrorMessage] = useState('');
    function submitForm(e){
        e.preventDefault()   
        const params = {
            email : e.target.email.value,
            password : e.target.password.value,
            device_name : 'web'
        }
        var data = JSON.stringify(params);

            var config = {
                method: 'post',
                url: base_url + 'api/v1/signin',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data : data
            };

            axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('this is error',JSON.stringify(error.messages));
            });
    }
    return(
      <>
             <Link variant="primary" onClick={handleShow}>
                Sign in
            </Link>
            
            <Modal show={show} onHide={handleClose} style={{marginTop : '150px'}}>
                <Form onSubmit={submitForm}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 class="text-danger text-center">{ErrorMessage}</h6>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Passowrd</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button> */}
                        <Button type="submit" variant="primary">
                        Login
                        </Button>
                    </Modal.Footer>
                </Form>
            
            </Modal>
      </>
    )
}