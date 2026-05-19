# Central de usuários da Intranet

Planilha criada:

https://docs.google.com/spreadsheets/d/1GFOBNEJa7gHAPkgpdWQ7Xs3p6U2-w8A0ClNSMqlNSKs/edit

## Publicar o Apps Script

1. Abra a planilha.
2. Vá em `Extensões > Apps Script`.
3. Cole o conteúdo de `apps-script/intranet-users.gs`.
4. Clique em `Implantar > Nova implantação`.
5. Tipo: `App da Web`.
6. Executar como: `Eu`.
7. Quem tem acesso: `Qualquer pessoa`.
8. Copie a URL do Web App.
9. No `script.js`, preencha `CENTRAL_USERS_API_URL` com essa URL.

Depois disso, cada login envia nome/e-mail para a planilha e a tela Configurações > Usuários lê a base central.

## Implantação atual

URL do Web App:

https://script.google.com/macros/s/AKfycbzeiRL72RqV9KQbB-MfnZJr7G7RgVEz_6o01ej2EctsEgEgwzWvaNGJgaU6RVQG-zDZKw/exec
