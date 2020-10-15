import React, { useState } from "react";
import { loginAction, reqError } from "../../redux/action/login";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledError,
} from "./styled";
import Modal from "../../components/modal/";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const { err, pass } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => dispatch(loginAction(values));
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          name="email"
          onChange={() => {
            dispatch(reqError(""));
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
            dispatch(reqError(""));
          }}
          ref={register({ required: true })}
        />
        {errors?.password && <StyledError>Campo Inválido</StyledError>}
        {err && <StyledError>{err}</StyledError>}
        <StyledLabel>Remember-me?</StyledLabel>
        <StyledInput name="rememberme" type="checkbox" ref={register} />
        {pass && <Redirect to={{ pathname: "/" }} />}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Modal visible={visible} setVisible={setVisible}>
            Registrar
          </Modal>
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
