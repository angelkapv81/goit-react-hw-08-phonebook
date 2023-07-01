import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { useState } from 'react';

import { login } from 'store/auth/operations';
import { Form, Label, Input} from './LoginForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      dispatch(
        login({
          email: state.email,
          password: state.password,
        })
      );
      form.reset();
    } catch (error) {
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
      <Label >
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
        Log In
      </Button>
    </Form>
  );
};
