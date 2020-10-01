import React, { useState } from "react";
import { loginAction } from "../../redux/action/login";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledError,
} from "./styled";

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => dispatch(loginAction(values, setErrorText));
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          name="email"
          onChange={() => {
            setErrorText("");
          }}
          ref={register({
            required: true,
            // eslint-disable-next-line
            pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i,
          })}
        />
        {errors?.email && <StyledError>Campo Inválido</StyledError>}
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          name="password"
          type="password"
          onChange={() => {
            setErrorText("");
          }}
          ref={register({ required: true })}
        />
        {errors?.password && <StyledError>Campo Inválido</StyledError>}
        {errorText && <StyledError>{errorText}</StyledError>}
        <StyledLabel>Remember-me?</StyledLabel>
        <StyledInput name="rememberme" type="checkbox" ref={register} />

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
