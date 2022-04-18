import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

//criando a Instance do Cliente com as devidas tipagens.
export interface ClientInstance extends Model {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    aboutYou: string;
}

//criando a Instance do Cliente com as devidas tipagens.
export const Client = sequelize.define<ClientInstance>("Client", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    aboutYou: {
        type: DataTypes.TEXT
    }
},{
    tableName: 'clientes',
    timestamps: false
});