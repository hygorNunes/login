import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import configDatabase from './database/config';
import MongoDB from './lib/MongoDB';

const app = express();
app.use(cors());

app.use(express.static('public'));

const mongoDB = new MongoDB(configDatabase)
mongoDB.connect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import routes from "./routes/index";
import UsuarioRoute from "./routes/UsuarioRoute"

app.use("/", routes);
app.use("/usuarios", UsuarioRoute)


app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    console.log(`Sua API REST está funcionando na porta 3000`);
})

export default app;
