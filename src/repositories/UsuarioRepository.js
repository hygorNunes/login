import model from '../models/Usuario'
import AbstractRepository from './AbstractRepository'

class EstadoRepository extends AbstractRepository {
    constructor() {
        super(model)
    }
}

export default EstadoRepository