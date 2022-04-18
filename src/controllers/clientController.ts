import { Request, Response } from "express";
import {Client} from '../models/Client';

export const ping = async (req: Request, res: Response)=> {
    res.json({pong: true});
}

export const findAllClient = async (req: Request, res: Response)=> {
    let clients = await Client.findAll();
    res.status(200).json({clients});
}

export const findOneClient = async (req: Request, res: Response)=> {
    let {id} = req.params;
    let client = await Client.findByPk(id);

    if(client){
        res.status(200).json({client});
    }else{
        res.status(404).json({Error: 'Cliente não encontrado'});
    }    
}

export const addClient = async (req: Request, res: Response)=>{
    let {firstName, lastName, email, aboutYou} = req.body;
    
    //verificando se o Nome e o Sobrenome estão preenchidos
    if(firstName && lastName && email){
        //setando os valores em seus devidos campos
        const cliente = Client.build({
            firstName,
            lastName,
            email,
            aboutYou
        });
        //salvando as alterações no banco
        //Neste caso em específico, está sendo criado no banco
        await cliente.save();
    }

    res.status(201).json({response: 'Sucess'});
}

export const updateClient = async (req: Request, res: Response)=> {
    let {id, firstName, lastName, email, aboutYou} = req.body;
    
    //usando o trycatch para verificação de possíveis erros
    try {
        //buscando o cliente pelo ID
        let cliente = await Client.findByPk(id);
        //verificando se houve retorno
        if(cliente){
            //atualizando os dados
            cliente.firstName = firstName;
            cliente.lastName = lastName;
            cliente.email = email;
            cliente.aboutYou = aboutYou;
            
            //salvando as alterações no banco
            await cliente.save();
            res.status(200).json({response: 'sucess'});
        }
    } catch (error) {
        res.json({Error: error});
    }
}

export const deleteClient = async (req: Request, res: Response)=>{
    //pegando o ID do cliente
    let idCliente: string = req.params.id;
    //buscando o cliente no banco pelo ID
    let cliente = await Client.findByPk(idCliente);
    //verificando se existe
    if(cliente){
        //destriundo os dados do cliente no banco
        await cliente.destroy();
    }
    res.status(200).json({response: 'sucess'});
}