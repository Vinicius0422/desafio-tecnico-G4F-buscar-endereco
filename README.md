# Desafio Técnico - G4F - Buscar Endereço
## Este repositório contém a solução para o desafio técnico G4F de buscar um endereço por CEP.

## Baixar o Código Fonte
Para baixar o código fonte, é necessário ter o Git instalado em sua máquina.

Acesse o terminal no diretório desejado e execute o seguinte comando:

```
git clone https://github.com/Vinicius0422/desafio-tecnico-G4F-buscar-endereco.git
```

Isso fará o download do repositório para sua máquina local.

## Executar a Aplicação Localmente

1. Executar os Testes

Para rodar os testes da aplicação, execute o seguinte comando no terminal:

```
npm test
```

Isso executará os testes configurados na aplicação.

2. Iniciar a Aplicação Localmente

Para iniciar a aplicação localmente, execute o comando:

```
npm start
```

Isso irá iniciar o servidor e você poderá acessar a aplicação em http://localhost:3000.

## Executar a Aplicação no Docker
Para executar a aplicação dentro de um container Docker, siga os passos abaixo:

1. Gerar a Imagem Docker

Execute o comando a seguir para construir a imagem Docker da aplicação:

```
docker buildx build -t buscar-endereco:v1.0.0 .
```

Esse comando irá criar a imagem com a tag buscar-endereco:v1.0.0.

2. Rodar a Imagem Docker

Após a construção da imagem, execute o seguinte comando para rodar a aplicação em um container Docker:

```
docker run -p 8080:80 buscar-endereco:v1.0.0
```

Acessar a Aplicação

Acesse a aplicação em http://localhost:8080 no seu navegador.

## Justificativa para a Estrutura de Pastas e Arquivos
A estrutura de diretórios foi organizada com base nos princípios de modularização e componentização. As pastas e arquivos foram distribuídos conforme suas responsabilidades, visando:

- Clareza: Organização de pastas por responsabilidade, tornando o código fácil de entender.
- Manutenibilidade: A organização modular facilita a atualização e a manutenção do projeto, permitindo que alterações sejam feitas de maneira isolada.
- Escalabilidade: A estrutura facilita o crescimento do projeto, permitindo adicionar novas funcionalidades sem comprometer a organização do código.
A escolha por um modelo de componentização visa a criação de componentes reutilizáveis, que podem ser facilmente mantidos e testados.

Considerações Finais
Certifique-se de ter as dependências corretamente instaladas antes de rodar a aplicação.
Caso utilize Docker, verifique se o Docker está instalado e configurado corretamente em sua máquina.
Se tiver dúvidas ou sugestões, fique à vontade para contribuir ou entrar em contato!