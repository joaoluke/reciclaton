import React from "react";
import { loginAction } from "../../redux/action/login";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledError,
} from "./styled";

type FormValues = {
  email: string;
  password: string;
  rememberme: boolean;
};

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) =>
    dispatch(loginAction(email, password));
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          name="email"
          ref={register({
            required: true,
            pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i,
          })}
        />
        {errors?.email && <StyledError>Campo Inválido</StyledError>}
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        {errors?.password && <StyledError>Campo Inválido</StyledError>}
        <StyledLabel>Remember-me?</StyledLabel>
        <StyledInput name="rememberme" type="checkbox" ref={register} />

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
