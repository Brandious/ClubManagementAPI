module.exports = (sequelize, Sequelize) => {
    const Skladiste = sequelize.define('skladiste', {
        stanje_u_kunama: {
            type: Sequelize.REAL,
        }
        
    });

    return Skladiste;
}