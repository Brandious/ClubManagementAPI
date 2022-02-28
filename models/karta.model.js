module.exports = (sequelize, Sequelize) => {
    const Karta = sequelize.define('karta', {
        grafika: {
            type: Sequelize.BLOB
        },
     
     
    });

    return Karta;
}