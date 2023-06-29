import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/operations';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// styles
import {
  Form,
  Label,
  Input,
  Button,
} from '../ComponentsStyled/Components.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      swal('Good!', 'You have successfully logged in our service', 'success');
      setEmail('');
      setPassword('');
      navigate('/contacts');
    } catch (error) {
      swal('Login failed', 'Please check your credentials.', 'error');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email:
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </Label>
      <br />
      <Label>
        Password min 8 symbols:
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Label>
      <br />
      <Button type="submit" disabled={!email || !password}>
        Ok
      </Button>
    </Form>
  );
};

export default Login;
