import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div>
    <Form className='loginWrap'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>아이디:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>비밀번호:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='loginBtnArea'>
            <Button variant="primary" type="submit" className='loginBtn'>
            Submit
        </Button>
        </div>
    </Form>

    </div>
  )
}

export default Login