import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Form } from './login.styles';
import { InputWrapper } from './login.styles';
import { Label } from './login.styles';
import { Input } from './login.styles';
import { ErrorMessage } from './login.styles';
import { Button } from './login.styles';

const Login = () => {
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Email</Label>
        <Input type="email" {...register('email')} />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputWrapper>

      <InputWrapper>
        <Label>Password</Label>
        <Input type="password" {...register('password')} />
        {errors.password && <Error>{errors.password.message}</Error>}
      </InputWrapper>

      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default Login;
