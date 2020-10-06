import axios from "axios";

export const GET_USER = "GET_USER";

export const setBusiness = (business) => ({
  type: GET_USER,
  business,
});

export const requestBusiness = (userId, token) => (dispatch) => {
  axios
    .get(`https://reciclatonapi.herokuapp.com/664/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    })

    .then(({ data }) => {
      dispatch(requestBusiness(data));
      console.log("data action: " + data);
    })
    .catch((error) => {
      console.log(error);
    });
};
