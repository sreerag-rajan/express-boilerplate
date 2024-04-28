# Express TypeScript Boilerplate

This project serves as a boilerplate for setting up an Express backend application using TypeScript.

## Project Structure

The project structure is organized as follows:

project-root/
│
├── src/
│ ├── app.ts # Entry point for the application
│ ├── config/ # Main configurations for the application
│ │ ├── index.ts # Service for accessing configuration values
│ │ ├── constants.ts # Where the variables are declared
│ │ └── db/ # Logic for setting up the database
│ │    └── index.ts # Class for connecting to the database
│ │    └── config.ts # Class for configuring the database
│ ├── infra/ # Logic for various implementations
│ │ ├── database/ # database implementations
│ │ └── logger/ # logger service
│ ├── routes/ # Endpoint routes
│ ├── models/ # Data models
│ ├── controllers/ # Request handling logic
│ └── services/ # Business logic services


### Config

The `config` folder contains the main configurations for the application. The `configService.ts` file manages all configuration values, including environment variables. Database setup logic resides in the `db` subfolder.

### Infra

The `infra` folder holds logic for various implementations. For example, connections to PostgreSQL and MongoDB are defined here. Additionally, infrastructure services like mailer services are placed in this folder.

### Routes, Models, Controllers, and Services

- **Routes**: Define endpoint paths and connect them to controllers.
- **Controllers**: Handle incoming requests, manage request and response objects, and perform body payload validation.
- **Services**: Implement business logic for the application.

## Getting Started

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
Install dependencies:
```
```bash
cd project-root
npm install
```
### Running the Application

```bash
npm start
```

This command will compile the TypeScript code and start the Express server.

### Configuration
Environment variables and other configurations can be set in the configService.ts file within the config folder. You can refer to `.env.example` to see what all env variables are present and need to be configured
