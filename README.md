# React Maps Lister

## Descrição

O **React Maps Lister** é um projeto que permite visualizar os 10 lugares mais próximos à sua localização atual. Ao clicar em qualquer lugar da lista, você pode visualizar o trajeto até esse local na tela do mapa.

## Funcionalidades

- **Visualizar os lugares próximos**: A aplicação mostra os 10 lugares mais próximos da sua localização atual.
- **Trajeto para o local selecionado**: Ao clicar em um lugar na lista, a aplicação mostra a rota do local atual até o local selecionado.
- **Ordenação por proximidade**: A lista de lugares é ordenada do mais próximo ao mais distante.

## Como Funciona

1. **Localização Atual**: A aplicação usa a API de Geolocalização do navegador para obter a localização atual do usuário.
2. **Buscar Lugares**: Utiliza a API do Google Places para buscar os 10 lugares mais próximos com base na localização atual.
3. **Mostrar Rota**: Utiliza a API de Direções do Google Maps para traçar e mostrar a rota até o lugar selecionado.

## Tela do Aplicativo

![tela completa](https://private-user-images.githubusercontent.com/74365018/351555207-35acf26e-6ee6-480d-8173-bc02776ccdf1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE3ODkwMDYsIm5iZiI6MTcyMTc4ODcwNiwicGF0aCI6Ii83NDM2NTAxOC8zNTE1NTUyMDctMzVhY2YyNmUtNmVlNi00ODBkLTgxNzMtYmMwMjc3NmNjZGYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDAyMzgyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRkY2Q3ZGRlYzQ2YjY4NTc0MzgyYzFhZGZiNDg2ODExOTgxNTk3ZTlmYjhiN2RmNjM0NzI1N2NlNDg5MjQ3NWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.UQWTN8QwYnS3nJfwKHxzi43d7bDJn4wt3RJ6JjParls)

## Requisitos

- **Navegador com suporte a Geolocalização**: Para obter a localização atual do usuário.
- **Chave da API do Google Maps**: Necessária para acessar os serviços de mapas e direções do Google.

