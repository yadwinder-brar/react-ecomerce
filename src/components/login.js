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
             <Link variant="danger" onClick={handleShow} className="text-white header__login">
                login
            </Link>
            
            <Modal show={show} onHide={handleClose} style={{marginTop : '90px'}}>
                <Modal.Body>
                <button class="cls-btn top__btn">✕</button>
                <div className="main-login d-flex">
                    <div className="left-login text-white">
                        <h3 className="text-uppercase top-heading">login</h3>
                        <p className="left-login-text mt-5">
                            <span className="left-text pt-3">Get access to your Orders, Wishlist and Recommendations</span>
                        </p>

                    </div>
                    <div className="right-login">
                    <Form onSubmit={submitForm}>    
                        <h6 class="text-danger text-center">{ErrorMessage}</h6>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email"  className="text__height"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="position-relative">
                            <Form.Label>Passowrd</Form.Label>
                            <Form.Control type="password" name="password" className="text__height" />
                            <a class="forget pass" tabindex="-1"><span>Forgot?</span></a>
                            <Form.Text className="text-muted">
                            </Form.Text>  
                        </Form.Group>
                        <Form.Group>
                        <span class="form-text">By continuing, you agree to ZRROH CRAFT's 
                            <a class="text-danger term-text" target="_blank" href="">Terms of Use</a> 
                            and <a class="text-danger term-text" target="_blank" href="">
                            Privacy Policy</a>
                        </span>
                        </Form.Group>
                        <Form.Group>
                            <button className="btn btn-danger text-uppercase w-100">login</button>
                        </Form.Group>
                        <Form.Group className="w-100 text-center">
                            <span className="text-uppercase">or</span>  
                        </Form.Group>
                        
                        <Form.Group>
                            <button className="btn btn__lower text-danger text-capitalize w-100">request <span className="text-uppercase">otp</span></button>
                        </Form.Group>
                        <Form.Group className="text-center mx-auto">
                        <a class="new-user text-danger" href="">New to ZRROH CRAFT Create an account</a>
                        </Form.Group>                         
                    </Form>
                    </div>
                </div>
                </Modal.Body>
            
            </Modal>
      </>
    )
}