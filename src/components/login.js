import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { base_url } from './config';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
export default function Login() {


    const token = localStorage.getItem("token")
    const userEmail = localStorage.getItem("userEmail")

    let loggedIn = true
    if (token == null) {
        loggedIn = false
    }
    console.log('token', token)
    console.log('loggedIn', loggedIn)


    const [phone, setPhone] = useState();
    const [otp, setOtp] = useState();
    const [show, setShow] = useState(false);

    const [regshow, setregShow] = useState(false);
    const [regemailError, setregEmailError] = useState('');
    const [regPhoneError, setregPhoneNoError] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [OtpScreen, UpdateOtpScreen] = useState('_210lwq d-none');
    const [LoginScreen, UpdateLoginScreen] = useState('');

    const handleRegShow = () => {
        setShow(false);
        setregShow(true);
    }
    const GenerateOtp = () => {
        fetch(base_url + 'api/v1/sendOtp', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ mobile: phone }),
        }).then(response => response.json()).then(response => {
            console.log("response=============", response);

            if (response.status == 200) {
                SetErrorMessage(response.message)
                setregPhoneNoError('');
                UpdateOtpScreen('_210lwq')
                UpdateLoginScreen('d-none')
            } else {
                console.log(response)
                if (response.errors.mobile[0])
                    setregPhoneNoError(response.errors.mobile[0])

                SetErrorMessage(response.message)
            }
        })
            .catch(err => console.log(err))
    }
    const handleRegClose = () => setregShow(false);
    const [ErrorMessage, SetErrorMessage] = useState('');
    function RegisterForm(e) {
        e.preventDefault()
        const params = {
            email: e.target.email.value,
            mobile: e.target.phone.value,
        }
        fetch(base_url + 'api/v1/signup', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params),
        }).then(response => response.json()).then(response => {
            console.log("response=============", response);

            if (response.status == 200) {
                SetErrorMessage(response.message)
                setShow(true);
                setregShow(false);
                setPhone(params.mobile)
                // GenerateOtp()
            } else {
                console.log(response)
                SetErrorMessage(response.message)
                if (response.errors.email[0]) {
                    setregEmailError(response.errors.email[0])
                }
                if (response.errors.mobile[0]) {
                    setregPhoneNoError(response.errors.mobile[0])
                }
            }
        })
            .catch(err => console.log(err))
    }
    function FormSubmit(e) {
        console.log('submitted')
        e.preventDefault();
        return;
    }
    function logout() {
        localStorage.removeItem("token");
        window.location.reload()
    }
    function Login() {
        const params = {
            mobile: phone,
            otp: otp,
            device_name: 'web'
        }

        fetch(base_url + 'api/v1/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params),
        }).then(response => response.json()).then(response => {
            console.log("response=============", response);

            if (response.status == 200) {

                localStorage.setItem("token", response.token)
                localStorage.setItem("userEmail", response.userDetails.email)
                window.location.reload()

            } else {
                if (response.status === 422) {
                    console.log(response)
                    SetErrorMessage(response.message)
                    if (response.errors.otp) {
                        SetErrorMessage(response.errors.otp[0])
                    }
                }
            }
        })
            .catch(err => console.log(err))
    }
    if (loggedIn == true) {
        return <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic" className="d__button">
                proflie
</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Offers</Dropdown.Item>
                <Dropdown.Item><Link to="/profile">profile</Link></Dropdown.Item>
                <Dropdown.Item href="#">Orders</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    }
    return (
        <>
            <Link variant="danger" onClick={handleShow} className="text-white header__login">
                login
                    </Link>

            <Modal show={show} onHide={handleClose} style={{ marginTop: '90px' }}>
                <Modal.Body>
                    <button class="cls-btn top__btn" onClick={handleClose}>✕</button>
                    <div className="main-login d-flex">
                        <div className="left-login text-white">
                            <h3 className="text-uppercase top-heading">login</h3>
                            <p className="left-login-text mt-5">
                                <span className="left-text pt-3">Get access to your Orders, Wishlist and Recommendations</span>
                            </p>

                        </div>
                        <div className="right-login">
                            <h6 class="text-danger text-center">{ErrorMessage}</h6>
                            <Form onSubmit={FormSubmit} className={LoginScreen}>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" value={phone} onChange={event => setPhone(event.target.value)} className="text__height" />
                                    <Form.Text className="text-danger">{regPhoneError}</Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <span class="form-text">By continuing, you agree to ZRROH CRAFT's
                                        <a class="text-danger term-text" target="_blank" href="">Terms of Use</a>and <a class="text-danger term-text" target="_blank" href="">Privacy Policy</a>
                                    </span>
                                </Form.Group>

                                <Form.Group>
                                    <button className="btn text-capitalize w-100 btn-danger py-3 mt-5" type="button" onClick={GenerateOtp}>request <span className="text-uppercase">otp</span></button>
                                </Form.Group>
                                <Form.Group className="text-center mx-auto">
                                    <span class="new-user mt-5 p-3" onClick={handleRegShow}>New to ZRROH CRAFT <span className=""><a href="" className="createacc text-danger">Create an account</a></span>
                                    </span>
                                </Form.Group>
                            </Form>
                            <div className={OtpScreen}>
                                <div>Please enter the OTP sent to</div>
                                <div>
                                    <span class="_2eL2SZ"></span>
                                    <button type="button" class="_14Me7y w-75 btn btn-danger mt-3" onClick={GenerateOtp}>Change</button>
                                </div>
                                <Form onSubmit={FormSubmit}>
                                    <div class="HSKgdN">
                                        <input type="number" name="otp" onChange={event => setOtp(event.target.value)} class="form-control" />
                                    </div>
                                    <button type="button" class="_2KpZ6l 14EHzR 3dESVI btn btn-danger w-75 mt-3" onClick={Login}>Verify</button>
                                </Form>
                                <div class="uhuX5T mt-3">Not received your code? <span class="_3Vt3BV r-code">Resend code</span></div>
                            </div>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>
            <Modal show={regshow} onHide={handleRegClose} style={{ marginTop: '90px' }}>
                <Modal.Body>
                    <button class="cls-btn top__btn" onClick={handleRegClose}>✕</button>
                    <div className="main-login d-flex">
                        <div className="left-login text-white">
                            <h3 className="text-uppercase top-heading">Register</h3>
                            <p className="left-login-text mt-5">
                                <span className="left-text pt-3">Get access to your Orders, Wishlist and Recommendations</span>
                            </p>

                        </div>
                        <div className="right-login">
                            <Form onSubmit={RegisterForm}>
                                <h6 class="text-danger text-center">{ErrorMessage}</h6>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" className="text__height" />
                                    <Form.Text className="text-danger">{regemailError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="position-relative">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" name="phone" className="text__height" />
                                    <Form.Text className="text-danger">{regPhoneError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <button className="btn btn-danger text-uppercase w-100">Register</button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}