import mongoose from 'mongoose';

class MongoDB {
    constructor(config) {
        this.config = config;
    }

    connect() {
        let stringConnection  = this.config.dialect + '://' + this.config.host +  '/' + this.config.database
        mongoose.connect(stringConnection, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;

        db.on('connected', () => {
            console.log('Conexão padrão do Mongoose está aberta');
        });

        db.on('error', (err) => {
            console.log(`Durante a conexão padrão do Mongoose ocorreu o seguinte erro \n${err}`);
        });

        db.on('disconnected', () => {
            console.log('Conexão padrão do Mongoose foi desconectada');
        });

        process.on('SIGINT', () =>{
            db.close(() => {
                console.log(
                    'Conexão padrão do Mongoose foi desconectado porque a aplicação foi finalizada'
                );
                process.exit(0);
            });
        });
    }
}

export default MongoDB