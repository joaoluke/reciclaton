import axios from 'axios';

export const REQUIRE_COMPLAINTS = "REQUIRE_COMPLAINTS";

export const requireComplaints = () => (dispatch) => {

  axios.get("https://reciclatonapi.herokuapp.com/complaint")
    .then(({ data }) => dispatch(setComplaints(data)))
    .catch(({ data }) => dispatch(setComplaints(data)))

}

export const allowComplaint = (id, allows = [], reviews, iduser) => (dispatch) => {
  console.log(allows, "allows")
  axios.patch("https://reciclatonapi.herokuapp.com/complaint/" + id, {
    indicted: [...allows, iduser],
    reviews: reviews + 1
  })
    .then(({ data }) => { dispatch(requireComplaints()) })
    .catch(({ data }) => { allowComplaint(id, allows, reviews, iduser) })

}
export const notAllowComplaint = (id, notAllows = [], reviews, iduser) => (dispatch) => {
  axios.patch("https://reciclatonapi.herokuapp.com/complaint/" + id, {
    innocent: [...notAllows, iduser],
    reviews: reviews + 1
  })
    .then(({ data }) => { dispatch(requireComplaints()) })
    .catch(({ data }) => { dispatch(notAllowComplaint(id, notAllows, reviews, iduser)) })

}

const setComplaints = (complaints) => ({
  type: REQUIRE_COMPLAINTS,
  complaints
})


