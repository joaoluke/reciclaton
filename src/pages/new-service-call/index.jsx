import React from "react";
import { Box } from "./new-service.style";
import { Title } from "./new-service.style";
import { useForm } from "react-hook-form";
const NewServiceCalls = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Box>
      <Title>Title</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Valor para a coleta </label>
        <input
          type="number"
          placeholder="Ponha um valor para a coleta"
          name="contribuicao"
          ref={register({ required: "true" })}
        />
        <h2>Materiais para a coleta</h2>
        <label>Orgânico</label>
        <input
          ref={register}
          type="checkbox"
          value={{ organic: true }}
          name="organic"
        ></input>
        <label>Plástico</label>

        <input ref={register} type="checkbox" value={{ plastic: true }}></input>
        <label>Vidro</label>

        <input ref={register} type="checkbox" value={{ glass: true }}></input>
        <label>Papel</label>

        <input ref={register} type="checkbox" value={{ paper: true }}></input>
        <label>Metal</label>

        <input ref={register} type="checkbox" value={{ metal: true }}></input>
        <label>Bateria</label>

        <input ref={register} type="checkbox" value={{ battery: true }}></input>
        <label>Eletrônico</label>

        <input
          ref={register}
          type="checkbox"
          value={{ eletronic: true }}
        ></input>
        <label>Tecido</label>

        <input ref={register} type="checkbox" value={{ cloth: true }}></input>
        <label>Borracha</label>

        <input ref={register} type="checkbox" value={{ rubber: true }}></input>
        <label>Quantidade do Material para a coleta em sacos/200L </label>
        <input
          type="number"
          placeholder="Ponha a quantidade da coleta"
          name="quantidade_estimada"
          ref={register({ required: "true" })}
        />
        <h2>Materiais: </h2>
        <div>{}</div>
        <input type="submit" />
      </form>
    </Box>
  );
};

export default NewServiceCalls;
