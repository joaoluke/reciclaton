import axios from 'axios';
import { NotificationManager } from "react-notifications";

export const REQUIRE_COMPLAINTS = "REQUIRE_COMPLAINTS";

export const requireComplaints = () => (dispatch) => {

  axios.get("https://reciclatonapi.herokuapp.com/complaint")
    .then(({ data }) => dispatch(setComplaints(data)))
    .catch(({ data }) => dispatch(setComplaints(data)))

}

export const allowComplaint = (id, allows = [], reviews, iduser) => (dispatch) => {
  NotificationManager.info("seus dados estão sendo enviados para o servidor", "Enviando dados...", 700);
  axios
    .patch("https://reciclatonapi.herokuapp.com/complaint/" + id, {
      indicted: [...allows, iduser],
      reviews: reviews + 1,
    })
    .then(({ data }) => {
      dispatch(requireComplaints());
      dispatch(requireComplaints());
      NotificationManager.success(
        "Sua opinião sobre a denuncia foi computada com sucesso",
        "Sucesso!",
        1000
      );
    })
    .catch(({ data }) => {
      NotificationManager.error(
        "Erro no envio",
        "para tentar novamente click aqui!",
        1000,
        () => {
          dispatch(allowComplaint(id, allows, reviews, iduser));
        }
      );
    });

}
export const notAllowComplaint = (id, notAllows = [], reviews, iduser) => (dispatch) => {
  NotificationManager.info(
    "seus dados estão sendo enviados para o servidor",
    "Enviando dados...",
    700
  );
  axios
    .patch("https://reciclatonapi.herokuapp.com/complaint/" + id, {
      innocent: [...notAllows, iduser],
      reviews: reviews + 1,
    })
    .then(({ data }) => {
      dispatch(requireComplaints());
      NotificationManager.success(
        "Sua opinião sobre a denuncia foi computada com sucesso",
        "Sucesso!",
        1000
      );
    })
    .catch(({ data }) => {
      NotificationManager.error(
        "Erro no envio",
        "para tentar novamente click aqui!",
        1000,
        () => {
          dispatch(notAllowComplaint(id, notAllows, reviews, iduser));
        }
      );
    });
}

const setComplaints = (complaints) => ({
  type: REQUIRE_COMPLAINTS,
  complaints
})


