import { register } from '../store/auth/operations';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// styles
import {
  Form,
  Label,
  Input,
  Button,
} from '../ComponentsStyled/Components.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    console.log({
      name,
      email,
      password,
    });
    setName('');
    setEmail('');
    setPassword('');
    navigate('/login');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </Label>
      <br />
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
      <Button type="submit" disabled={!name || !email || !password}>
        Sign Up
      </Button>
    </Form>
  );
};
export default RegisterPage;
