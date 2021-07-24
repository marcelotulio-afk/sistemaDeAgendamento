import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app.controllers/UserController';

import SessionController from './app.controllers/UserController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationsController from './app/controllers/NotificationsController';
import authMiddleware from './app/middlewares/auth';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)
routes.put('/users, UserController.update')

// Rota de agendamento
routes.post('/appointments', AppointmentController.store)

// Lista de agendamento
routes.get('/appointments', AppointmentController.index)

// Lista todos os colaboradores
routes.get('/collaborator', CollaboratorController.index)

// Listagem de agendamentos colaborador
routes.get('/shcedule', ScheduleController.index)

routes.put('/users', authMiddleware, 
UserController.update)

// Listagem de notificações
routes.get('/notifications', NotificationsController.index)

// Marcar como lida
routes.put('/notifications/:id', NotificationsController.update)

//Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes; 