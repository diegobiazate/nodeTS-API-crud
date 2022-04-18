import { Router } from "express";
import * as ClientController from '../controllers/clientController';

const router = Router();

router.get('/ping', ClientController.ping);//Endpoint para testar comunicação
router.get('/findAllClient', ClientController.findAllClient);
router.get('/findOneClient/:id', ClientController.findOneClient);

router.post('/addClient', ClientController.addClient);
router.put('/updateClient', ClientController.updateClient);
router.delete('/deleteClient/:id', ClientController.deleteClient);

export default router;