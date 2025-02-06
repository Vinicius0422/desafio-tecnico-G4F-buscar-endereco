import React from 'react';

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BuscarEndereco } from "../../components/buscar-endereco/index.tsx";
import axios from "axios";

jest.mock("axios");

describe("Busca de Endereço por CEP", () => {
    it("deve exibir um erro se o CEP for inválido", async () => {

      // Dado que o usuário forneceu um CEP inválido
      axios.get.mockResolvedValueOnce({
        data: { erro: true },
      });
      render(<BuscarEndereco />);
  
      const input = screen.getByLabelText("Digite um CEP");
      const button = screen.getByText("Buscar");
  
      fireEvent.change(input, { target: { value: "12345-678" } });
      fireEvent.click(button);
  
      // Quando a requisição for feita
      await waitFor(() => expect(axios.get).toHaveBeenCalledWith("https://viacep.com.br/ws/12345-678/json/"));
  
      // Então, o erro deve ser exibido
      const erro = await screen.findByText("CEP não encontrado");
      expect(erro).toBeInTheDocument();
    });
  
    it("deve retornar os dados de endereço corretamente quando o CEP for válido", async () => {

      // Dado que o usuário forneceu um CEP válido
      axios.get.mockResolvedValueOnce({
        data: {
          cep: "70040-010",
          logradouro: "Quadra SBN Quadra 1",
          bairro: "Asa Norte",
          localidade: "Brasília",
          uf: "DF",
          estado: "Distrito Federal",
          regiao: "Centro-Oeste",
          ibge: "5300108",
          ddd: "61",
          siafi: "9701"
        },
      });
  
      render(<BuscarEndereco />);
  
      const input = screen.getByLabelText("Digite um CEP");
      const button = screen.getByText("Buscar");
  
      fireEvent.change(input, { target: { value: "70040-010" } });
      fireEvent.click(button);
  
      // Quando a requisição for feita
      await waitFor(() => expect(axios.get).toHaveBeenCalledWith("https://viacep.com.br/ws/70040-010/json/"));
  
      // Então, os dados do endereço devem ser exibidos
      const cep = await screen.findByDisplayValue("70040-010");
      const logradouro = await screen.findByDisplayValue("Quadra SBN Quadra 1");
      const bairro = await screen.findByDisplayValue("Asa Norte");
      const localidade = await screen.findByDisplayValue("Brasília");
      const uf = await screen.findByDisplayValue("DF");
      const estado = await screen.findByDisplayValue("Distrito Federal");
      const regiao = await screen.findByDisplayValue("Centro-Oeste");
      const ibge = await screen.findByDisplayValue("5300108");
      const ddd = await screen.findByDisplayValue("61");
      const siafi = await screen.findByDisplayValue("9701");
  
      expect(cep).toBeInTheDocument();
      expect(logradouro).toBeInTheDocument();
      expect(bairro).toBeInTheDocument();
      expect(localidade).toBeInTheDocument();
      expect(uf).toBeInTheDocument();
      expect(estado).toBeInTheDocument();
      expect(regiao).toBeInTheDocument();
      expect(ibge).toBeInTheDocument();
      expect(ddd).toBeInTheDocument();
      expect(siafi).toBeInTheDocument();
    });
  
    it("deve exibir a mensagem de erro caso a requisição falhe", async () => {
      // Dado que a requisição falhou
      axios.get.mockRejectedValueOnce(new Error("Algo deu errado!"));
  
      render(<BuscarEndereco />);
  
      const input = screen.getByLabelText("Digite um CEP");
      const button = screen.getByText("Buscar");
  
      fireEvent.change(input, { target: { value: "70040-010" } });
      fireEvent.click(button);
  
      // Quando a requisição falhar
      await waitFor(() => expect(axios.get).toHaveBeenCalledWith("https://viacep.com.br/ws/70040-010/json/"));
  
      // Então, a mensagem de erro deve ser exibida
      const erro = await screen.findByText("Algo deu errado!");
      expect(erro).toBeInTheDocument();
    });
  });