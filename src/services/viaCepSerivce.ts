import axios from "axios";

const buscarEnderecoPorCep = (cep) => {
  if(cep.length < 9){
    throw new Error("Digite um CEP válido");
  }
  return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      if (response.data.erro) {
        throw new Error("CEP não encontrado");
      }
      return response.data;
    })
    .catch((err) => {
      if(err.message === "Network Error")
      throw new Error("Algo deu errado!")
      else throw new Error(err.message);
    });
};

export { buscarEnderecoPorCep };