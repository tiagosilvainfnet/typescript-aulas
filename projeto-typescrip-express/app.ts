import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import sequelize from './db';
import * as AdminJSSequelize from '@adminjs/sequelize';
 
import { Category } from './model/category.entity';
import { Product } from './model/product.entity';

require('dotenv').config()

const PORT = process.env.PORT_HOST;

AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
})

const generateResource = (model: object) => {
    return {
        resource: model,
        options: {
            properties: {
                createdAt: {
                    isVisible: {
                        list: true, edit: false, create: false, show: true
                    }
                },
                updatedAt: {
                    isVisible: {
                        list: true, edit: false, create: false, show: true
                    }
                }
            }
        }
    }
}

const start = async () => {
    const adminOptions = {
        resources: [
            generateResource(Product),
            generateResource(Category),
        ],
        rootPath: '/admin',
        dashboard: {
            handle: async () => {},
            component: AdminJS.bundle('./components/dashboard')
        },
        branding: {
            favicon: 'https://pbs.twimg.com/profile_images/2531927187/wf3wv9rjmk6xytz422pw_400x400.jpeg',
            logo: 'https://ead.infnet.edu.br/wp-content/uploads/sites/34/2020/09/infnet-graduacoes-live.png',
            companyName: 'Projeto turma back-end'
        }
    };

    const app = express();
    sequelize.sync()
             .then((result) => console.log(result))
             .catch((err) => console.log(err))

    const admin = new AdminJS(adminOptions);

    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter)

    app.listen(PORT, () => {
        console.log("Projeto rodando");
    })
}

start();