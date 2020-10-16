import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Content from "./helper";
import decode from "jwt-decode";
import { CardContainer } from "./card.styled";
import { getServices } from "../../redux/action/card-informations";
import { requestUsers } from "../../redux/action/users";
import { requestBusiness } from "../../redux/action/user-service";
const Card = ({ status }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.authen);
  const { list } = useSelector((state) => state.card);
  const user = useSelector((state) => state.userService);
  const test = useSelector((state) => console.log(state));
  const { brand } = user;
  useEffect(() => {
    dispatch(getServices());
    if (!brand) {
      dispatch(requestBusiness(decode(token).sub, token));
      dispatch(requestUsers());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, dispatch, user]);

  return (
    <CardContainer>
      <Content status={status} />
    </CardContainer>
  );
};

export default Card;
