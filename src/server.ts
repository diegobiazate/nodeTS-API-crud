import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes';

dotenv.config();
const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(mainRoutes);
server.use((req: Request, res: Response)=>{
    res.status(404).send('Endpoint não encontrado');
});

server.listen(process.env.PORT);