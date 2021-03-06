import { Router } from 'express';
import TreinoController from './app/controllers/TreinoController';
import GrupoController from './app/controllers/GrupoController';
import EquipamentoController from './app/controllers/EquipamentoController';
import PatologiaController from './app/controllers/PatologiaController';
import ModalidadeController from './app/controllers/ModalidadeController';
import ExercicioController from './app/controllers/ExercicioController';
import UsuarioController from './app/controllers/UsuarioController';
import ProfessorController from './app/controllers/ProfessorController';
import AlunoController from './app/controllers/AlunoController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.store);

routes.get('/aluno', AlunoController.index);
routes.post('/aluno', AlunoController.store);
routes.put('/aluno/:id', AlunoController.update);
routes.delete('/aluno/:id', AlunoController.delete);

routes.get('/professor', ProfessorController.index);
routes.post('/professor', ProfessorController.store);
routes.put('/professor/:id', ProfessorController.update);
routes.delete('/professor/:id', ProfessorController.delete);

routes.get('/grupo', GrupoController.index);
routes.post('/grupo', GrupoController.store);

routes.get('/treino', TreinoController.index);
routes.post('/treino', TreinoController.store);

routes.get('/equipamento', EquipamentoController.index);
routes.post('/equipamento', EquipamentoController.store);

routes.get('/patologia', PatologiaController.index);
routes.post('/patologia', PatologiaController.store);

routes.get('/modalidade', ModalidadeController.index);
routes.post('/modalidade', ModalidadeController.store);

routes.get('/exercicio', ExercicioController.index);
routes.post('/exercicio', ExercicioController.store);

export default routes;
