module.exports = (sequelize, Sequelize) => {
    const Rezervacija = sequelize.define('rezervacija', {
        napomena: {
            type: Sequelize.STRING
        },
    });

    return Rezervacija; 
}