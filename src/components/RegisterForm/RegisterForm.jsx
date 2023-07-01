import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { signup } from 'store/auth/operations';
import { Label, Input, Form } from './RegisterForm.styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};



const RegisterForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: state.name,
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          required
          value={state.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          value={state.email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          value={state.password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" sx={{ mt: 2 }}>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
