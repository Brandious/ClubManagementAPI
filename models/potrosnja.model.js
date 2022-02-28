module.exports = (sequelize, Sequelize) => {
    const Potrosnja = sequelize.define('potrosnja', {
        naziv: {
            type: Sequelize.STRING,
        },
        price_eur: {
            type: Sequelize.NUMERIC
        },
        price_kuna: {
            type: Sequelize.NUMERIC
        },
    });

    return Potrosnja;
}