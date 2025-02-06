import React, { useState } from 'react';

import { Input } from '../input/index.tsx';
import { Loader2 } from 'lucide-react';
import './buscar-endereco.css';

import { buscarEnderecoPorCep } from "../../services/viaCepSerivce.ts"; 

interface Endereco {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    estado: string;
    ibge: string;
    gia: string;
    localidade: string;
    logradouro: string;
    regiao: string;
    siafi: string;
    unidade: string;
    uf: string;
  }

export const BuscarEndereco = () => {
    
    const [cep, setCep] = useState<string>("");
    const [endereco, setEndereco] = useState<Endereco>(null);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const adicionarMascara = (cep: string) => {
        const cepLimpo = cep.replace(/\D/g, "");
        const cepComMascara = cepLimpo.replace(/(\d{5})(\d)/, '$1-$2');
        setCep(cepComMascara);
    }

    const handleBuscarEndereco =  async () => {
        if(cep === endereco?.cep){
            return;
        }
        setLoading(true);
        setErro('');
        setEndereco(null);
        try {
            const dadosEndereco = await buscarEnderecoPorCep(cep);
            setEndereco(dadosEndereco);
            setLoading(false);
          } catch (error) {
            setErro(error.message);
            setLoading(false);
          }
    };

    return (
        <section className="buscarEnderecoContainer flexColumn">
            <div className="dFlex gap1rem">
                <div className="flexColumn gap1rem">
                    <label className="labelInputBusca" htmlFor="cep">Digite um CEP</label>
                    <div className="dFlex gap1rem">
                        <input
                            className="inputBox"
                            id="cep"
                            value={cep}
                            type="text"
                            maxLength="9"
                            onChange={(e) => adicionarMascara(e.target.value)}
                            placeholder="70040-010"
                        />
                        <button className="buttonBuscar" onClick={handleBuscarEndereco} disabled={loading}>Buscar</button>
                    </div>
                </div>
            </div>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            {loading && <><Loader2 className="loader" size={24} /></>}
            <div>
                {endereco && (
         
                        <div className="enderecoInputWrapper">
                            <Input disabled={true} label="Logradouro" value={endereco.logradouro} type="text"/>                          
                            <Input disabled={true} label="Bairro" value={endereco.bairro} type="text"/>                      
                            <Input disabled={true} label="Localidade" value={endereco.localidade} type="text"/>

                            <Input disabled={true} label="UF" value={endereco.uf} type="text"/>
                            <Input disabled={true} label="CEP" value={endereco.cep} type="text"/>
                            <Input disabled={true} label="Complemento" value={endereco.complemento} type="text"/>
                            <Input disabled={true} label="Estado" value={endereco.estado} type="text"/>

                            <Input disabled={true} label="DDD" value={endereco.ddd} type="text"/>
                            <Input disabled={true} label="IBGE" value={endereco.ibge} type="text"/>
                            <Input disabled={true} label="Região" value={endereco.regiao} type="text"/>

                            <Input disabled={true} label="SIAFI" value={endereco.siafi} type="text"/>
                            <Input disabled={true} label="GIA" value={endereco.GIA} type="text"/>
                            <Input disabled={true} label="UNIDADE" value={endereco.unidade} type="text"/>
                        </div>
                )}
            </div>
        </section>
    )
}