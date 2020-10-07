import axios from "axios";

export const GET_USER = "GET_USER";

export const requestBusiness = (userId, token) => (dispatch) => {
  axios
    .get(`https://reciclatonapi.herokuapp.com/664/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => {
      dispatch(setBusiness(data));
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      console.log("oi");
    });
  console.log(userId);
  console.log(token);
};

const setBusiness = (business) => ({
  type: GET_USER,
  business,
});
