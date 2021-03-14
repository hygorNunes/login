class AbstractController {

    constructor() {
        if (new.target === AbstractController) {
            throw new TypeError("Não é possível instanciar uma classe Abstract diretamente")
        }
    }

    get(req, res, repository) {
        repository.get(req.params.id)
            .then(async (data) => {
                res.status(200).json(data);
            }, (e) => {
                res.status(500).send({ message: 'Error Get: ' + e.message })
            });
    }

    list(req, res, repository) {
        repository.list(req.query)
            .then(async (data) => {
                res.status(200).json(data);
            }, (e) => {
                res.status(500).send({ message: 'Error List: ' + e.message });
            });
    }

    findAll(req, res, repository) {
        repository.findAll(req.query)
            .then(async (data) => {
                res.status(200).json(data);
            }, (e) => {
                res.status(500).send({ message: 'Error List: ' + e.message })
            });
    }

    create(req, res, repository) {
        repository.create(req.body).then(data => {
            res.status(201).send({ message: 'Registro cadastrado!', data: data })
                .catch(e => {
                    console.log(e.message)
                    res.status(500).send({message: 'Error Create: ' + e.message })
                })
        })
    }

    update(req, res, repository) {
        repository.update(req.params.id, req.body)
            .then((data) => {
                res.status(201).send({ message: 'Registro atualizado!' })
            })
            .catch(e => {
                res.status(500).send({ message: 'Error Update: ' + e.message })
            })
    }

    delete(req, res, repository) {
        repository.delete(req.params.id)
            .then(() => {
                res.status(201).send({ message: 'Registro excluído!' });
            })
            .catch(e => {
                res.status(500).send({ message: 'Error Delete: ' + e.message })
            })
    }
}

export default AbstractController