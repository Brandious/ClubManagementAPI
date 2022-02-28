module.exports = (sequlize, Sequelize) => {
    const Event = sequlize.define('events', {
        name: {
            type: Sequelize.STRING
        },
        opis: {
            type: Sequelize.STRING
        },
        datum_izvodjenja: {
            type: Sequelize.DATE,
        }
    });

    return Event;
}