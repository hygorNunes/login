import AbstractController from './AbstractController'
import UsuarioRepository from '../repositories/UsuarioRepository'
import AbstractRepository from '../repositories/AbstractRepository'

const repository = new UsuarioRepository()

class UsuarioController extends AbstractController {
    constructor() {
        super()
    }

    get(req, res) {
        super.get(req, res, repository)
    }

    list(req, res) {
        super.list(req, res, repository)
    }

    findAll(req, res) {
        super.findAll(req, res, repository)
    }

    create(req, res) {
        super.create(req, res, repository)
    }

    update(req, res) {
        super.update(req, res, repository)
    }

    delete(req, res) {
        super.delete(req, res, repository)
    }

    async login(req, res) {
        try {
            let login = req.body.login;
            let senha = req.body.senha;

            let params = {
                login: login
            }

            //verificando se o login existe no sistema
            const usuario = await repository.getBy(params)

            if (usuario) {
                if (usuario.senha == senha) {
                    res.status(200).send({ message: 'Bem vindo ao Sistema'})
                } else {
                    res.status(500).send({ message: 'Senha inválida' })
                }
            } else {
                res.status(404).send({ message: 'Usuário não cadastrado no sistema' })
            }
        } catch (e) {
            res.status(500).send({ message: "Error: " + e });
        }

    }

    async trocaSenha(req, res) {
        try {
            let login = req.body.login;

            let params = {
                login: login
            }

            //verificando se o login existe no sistema
            const usuario = await repository.getBy(params)

            delete params.login

            params.senha = req.body.novaSenha

            if (usuario) {
                try {
                    await repository.update(usuario._id, params)
                    res.status(200).send({message: "Senha alterada"})
                } catch (e) {
                    res.status(500).send({ message: "Error: " + e });
                }
            } else {
                res.status(404).send({ message: 'Usuário não cadastrado no sistema' })
            }
          
        } catch (e) {
            res.status(500).send({ message: "Error: " + e });
        }


    }
}

export default UsuarioController