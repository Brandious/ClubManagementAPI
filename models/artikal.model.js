module.exports = (sequelize, Sequelize) => {
    const Artikal = sequelize.define('artikal', {
        naziv: {
            type: Sequelize.STRING,
        },
        mjerna_jedinica: {
            type: Sequelize.STRING
        },
        redni_broj: {
            type: Sequelize.INTEGER
        }
    });

    return Artikal;
}