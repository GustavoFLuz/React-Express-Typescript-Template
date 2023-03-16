# Vite, ReactJS and ExpressJS with Typescript project template

A fullstack project template using Vite and ReactJS for the front-end and ExpressJS as the back-end, both using Typescript

## Instalation
Run `npm install ` at the terminal to install the packages

### Development

Run `npm run dev`, it will start both the express and the react applications

Both ports can be configured by setting environment variables

The default ports are 

- `3000` or `SERVER_PORT` environment variable for the server
- `3001` or `CLIENT_PORT` environment variable for the client


The client is located at `/*`<br>
The api is located at `/api/*`

### Deployment

Run `npm start`, it will build the application which both front and back end will be started at the port `3000` or `SERVER_PORT` variable

Or run `npm run build` just to build the application