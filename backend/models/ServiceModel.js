import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import CompanyProfiles from "./CompanyProfileModel.js";

const { DataTypes } = Sequelize;

const Services = db.define('service', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

CompanyProfiles.hasMany(Services, { foreignKey: 'companyId' });
Services.belongsTo(CompanyProfiles, { foreignKey: 'companyId' });

export default Services;
