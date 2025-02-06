import axios from "axios";

const buscarEnderecoPorCep = (cep) => {
  return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }
      return response.data;
    })
    .catch((err) => {
      throw new Error(err.message || "Algo deu errado!");
    });
};

export { buscarEnderecoPorCep };