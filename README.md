# DevTask

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge)
![Badge License](http://img.shields.io/static/v1?label=LICENSE&message=MIT&color=green&style=for-the-badge)
![Badge .NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Badge React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 💻 Sobre o projeto

**DevTask** é uma aplicação de gerenciamento de tarefas, foi utilizado o sistema do GitLab como referência do projeto.

O objetivo principal deste projeto é demonstrar meus conhecimentos com as tecnologias utilizadas e também testar conceitos ou tecnologias que venho aprendendo.

---

## ⚙️ Funcionalidades e Roadmap

O projeto está em constante evolução. Abaixo, o status atual do desenvolvimento:

- [x] Estrutura Base (Clean Architecture)
- [x] Configuração de Banco de Dados e Migrations
- [x] Integração Frontend-Backend
- [ ] **Autenticação e Autorização**
- [ ] **CRUD Completo de Tarefas**
- [ ] **Desenvolver testes unitários**

---

## 🛠 Tecnologias

### Backend
A aplicação foi construído utilizando **C#** e o ecossistema **.NET**, seguindo os princípios do Clean Architecture para garantir desacoplamento e testabilidade.

-   **.NET Core / C#**
-   **Entity Framework Core** (ORM)
-   **SQL Server** (Banco de Dados)
-   **xUnit** (Testes Unitários)

### Frontend
A interface foi construída com **React**, utilizando **TypeScript** para tipagem estática e maior segurança no código.

-   **React** + **Vite**
-   **TypeScript**
-   **Zustand**
-   **React Router** (Roteamento)
-   **Axios** (Consumo de API)
-   **Styled Components**

---

## 🚀 Como rodar o projeto

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
-   [.NET SDK](https://dotnet.microsoft.com/download) **.NET 10**
-   [Node.js](https://nodejs.org/en/) **Node 22.21.1**
-   Uma instância de banco de dados SQL (SQL Server ou LocalDB) **Configurar ConnectionString**

### Rodar Backend

```bash
$ cd backend

$ dotnet restore
$ dotnet ef database update

$ cd DevTask.Api
$ dotnet run OU rodar pela interface
```

### Rodar Frontend

```bash
cd frontend
npm install

cd DevTask.Ui
npm run dev (Desta forma não inicia pela rota "dashboard", então precisa mudar manualmente na url)
```
