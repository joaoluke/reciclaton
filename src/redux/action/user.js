import axios from "axios";

export const GET_USER = "GET_USER";

<<<<<<< HEAD
export const setBusiness = (business) => ({
  type: GET_USER,
  business,
});

=======
>>>>>>> ac8c6c84a7d2bc23125b2fa21598b7970db6e260
export const requestBusiness = (userId, token) => (dispatch) => {
  axios
    .get(`https://reciclatonapi.herokuapp.com/664/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    })
<<<<<<< HEAD

    .then(({ data }) => {
      // console.log(data);
      dispatch(setBusiness(data));
=======
    .then(({ data }) => {
      dispatch(setBusiness(data));
      console.log(data);
>>>>>>> ac8c6c84a7d2bc23125b2fa21598b7970db6e260
    })
    .catch((err) => {
      console.log(err);
      console.log("oi");
    });
<<<<<<< HEAD
=======
  console.log(userId);
  console.log(token);
>>>>>>> ac8c6c84a7d2bc23125b2fa21598b7970db6e260
};

const setBusiness = (business) => ({
  type: GET_USER,
  business,
});
