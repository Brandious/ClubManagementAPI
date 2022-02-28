module.exports = (sequelize, Sequelize) => {
    const Sto = sequelize.define('sto', {
        naziv: {
            type: Sequelize.STRING,
        },
        kategorija: {
            type: Sequelize.STRING
        },
        x: {
            type: Sequelize.NUMERIC
        },
        y: {
            type: Sequelize.NUMERIC
        }
    });

    return Sto;
}