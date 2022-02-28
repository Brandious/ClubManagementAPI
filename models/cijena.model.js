module.exports = (sequelize, Sequelize) => {
    const Cijena = sequelize.define('cijena', {
        naziv: {
            type: Sequelize.STRING,
        },
        price_eur: {
            type: Sequelize.NUMERIC
        },
        price_kuna: {
            type: Sequelize.NUMERIC
        },
        kategorija: {
            type: Sequelize.STRING
        }
    });

    return Cijena;
}