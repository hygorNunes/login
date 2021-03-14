class AbstractRepository {
    constructor(model) {
        if (new.target === AbstractRepository) {
            throw new TypeError("Cannot construct Abstract instances directly")
        }
        this.model = model
    }

    async list(params) {

        let order = params.order != null ? params.order : 'id'
        let sort = params.sort != null ? params.sort : '1'

        delete params.order
        delete params.sort
        const paginate = this.getPagination(params)
        const list = await this.model.find(params)
            .limit(paginate.perPage)
            .skip(paginate.offset)
            .sort({
                [order]: sort
            });

        const count = await this.model.countDocuments(params)

        return {
            count: count,
            perPage: paginate.perPage,
            page: paginate.page,
            rows: list
        }
    }

    async findAll(params) {

        let order = params.order != null ? params.order : 'id'
        let sort = params.sort != null ? params.sort : '1'

        delete params.order
        delete params.sort
        const paginate = this.getPagination(params)
        const list = await this.model.find(params)
            .sort({
                [order]: sort
            });

        const count = await this.model.countDocuments(params)

        return {
            count: count,
            perPage: paginate.perPage,
            page: paginate.page,
            rows: list
        }
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getBy(params) {
        return await this.model.findOne(params);
    }

    async create(data) {
        const model = this.model(data);
        return await model.save().then((objeto) => objeto)
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate({_id: id}, {$set: data}).then((objeto) => objeto);
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log(err)
                return false
            } else {
                console.log("Successful deletion");
                return true
            }
        });
    }

    getPagination(params) {
        if (params) {
            let page = params.page != null ? parseInt(params.page) : 1
            let perPage = params.perPage != null ? params.perPage > 25 ? 25 : parseInt(params.perPage) : 25
            let offset = (page - 1) * perPage

            delete params.page
            delete params.perPage

            return {
                page: page,
                perPage: perPage,
                offset: offset
            }
        } else {
            return {
                page: 1,
                perPage: 25,
                offset: 0
            }
        }
    }

}

export default AbstractRepository