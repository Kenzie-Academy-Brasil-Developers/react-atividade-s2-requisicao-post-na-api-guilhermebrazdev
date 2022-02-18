import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";

import "./login.css";

function Login({ setRequest, request }) {
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmiction = (data) => {
    console.log("teste", data);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setRequest(true);
        // console.log(response);
        toast.success("Requisição completa");
      })
      .catch((err) => {
        setRequest(false);
        // console.log(err);
        toast.error("Requisição falhou");
      });
  };

  return (
    <div>
      <div id="loginBox">
        <form id="form" onSubmit={handleSubmit(onSubmiction)}>
          <div className="inputBox">
            <input placeholder="Usuário" {...register("username")} />
            <p>{errors.username?.message}</p>
          </div>
          <div className="inputBox">
            <input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button id="botao" type="submit" /*onClick={notify}*/>
            {" "}
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
