module.exports = (sequelize, Sequelize) => {
    const StanjeArtikla = sequelize.define('stanje_artikla', {
        popisanaKolicina: {
            type: Sequelize.REAL,
        },
        kolicinaUKnjigovodstvu: {
            type: Sequelize.REAL
        }
    });

    return StanjeArtikla;
}