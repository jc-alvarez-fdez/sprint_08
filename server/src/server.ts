import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import routerPatients from './routes/paciente.route';
import routerMapaPacientes from './routes/mapa_pacientes.route'
import db from './db/connection';


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }



/*     routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
            this.app.use('/api/pacientes', routerPatients);
            this.app.use('/api/mapa_pacientes', routerMapaPacientes);

        })
    } */

    routes() {
        this.app.use('/api/pacientes', routerPatients);
        this.app.use('/api/mapa_pacientes', routerMapaPacientes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }

    midlewares() {
        //Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada');

        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }      
    }



}


export default Server;