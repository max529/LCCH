const Sequelize = require('sequelize');
const sequelize = new Sequelize('lcc', 'lcc', 'manipulationDeMasse', {
    host: 'debianServer',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nomPrenom: Sequelize.STRING,
    sexe: { type: Sequelize.INTEGER, allowNull: true },
    point: Sequelize.INTEGER,
    username: { type: Sequelize.STRING, allowNull: true },
    password: { type: Sequelize.TEXT, allowNull: true },
    token: Sequelize.TEXT
});

const Vote = sequelize.define('vote', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    par: Sequelize.INTEGER,
    pour: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
    date: Sequelize.DATE
});


User.hasMany(Vote, { foreignKey: 'par', as: 'par' })
User.hasMany(Vote, { foreignKey: 'pour', as: 'pour' })


module.exports = {
    User,
    Vote,
    sequelize
}


