import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController'

const routes = Router();

const controller = new UsuarioController()

/**
 * Rota que retorna todos os usuarios paginados
 * @route GET /usuarios/
 * @group Usuario
 * @param { integer } page.query - Página a exibir. Ex. 1
 * @param { integer } perPage.query.required - Qtd. Registros por página. Max: 25
 * @returns { object } 200 - Return JSON results
 * @returns { Error }  500 - Tecnical Error!
 * @returns { Error }  401 - Invalid Login!
 */
routes.get('/', controller.list);

/**
 * Rota que retorna todos os usuarios sem paginação
 * @route GET /usuarios/all
 * @group Usuario
 * @param { integer } page.query - Ordernar por nome em ordem crescente. Ex: order: 'nome', sort: 1
 * @returns { object } 200 - Return JSON results
 * @returns { Error }  401 - Invalid Login!
 */
 routes.get('/all', controller.findAll);

 /**
  * Rota que retorna apenas um usuario cujo id foi passado pela chamada
  * @route GET /usuarios/id
  * @group Usuario
  * @param { integer } page.query - Página a exibir. Ex. 1
  * @returns { object } 200 - Return JSON results
  * @returns { Error }  500 - Tecnical Error!
  * @returns { Error }  401 - Invalid Login!
  */
 routes.get('/:id', controller.get);

  /**
  * Rota que cria um usuario através dos dados passados pelo body da requisicao
  * @route POST /usuarios/
  * @group Usuario
  * @param { integer } page.query - Página a exibir. Ex. 1
  * @returns { object } 200 - Return JSON results
  * @returns { Error }  500 - Tecnical Error!
  * @returns { Error }  401 - Invalid Login!
  */
   routes.post('/', controller.create);

  /**
  * Rota que atualiza o usuario atraves dos dados passados pelo body da requisicao e pelo id passado na chamada
  * @route POST /usuarios/
  * @group Usuario
  * @param { integer } page.query - Página a exibir. Ex. 1
  * @returns { object } 200 - Return JSON results
  * @returns { Error }  500 - Tecnical Error!
  * @returns { Error }  401 - Invalid Login!
  */
    routes.put('/:id', controller.update);

    
  /**
  * Rota que deleta apenas um usuario pelo id que foi passado na chamada 
  * @route POST /usuarios/
  * @group Usuario
  * @param { integer } page.query - Página a exibir. Ex. 1
  * @returns { object } 200 - Return JSON results
  * @returns { Error }  500 - Tecnical Error!
  * @returns { Error }  401 - Invalid Login!
  */
   routes.delete('/:id', controller.delete);
 
 
 export default routes;