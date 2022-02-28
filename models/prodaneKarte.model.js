module.exports = (sequelize, Sequelize) => {
    const ProdaneKarte = sequelize.define('prodane_karte', {
        email: {
            type: Sequelize.STRING
        },
        serial: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
        }
    });

    return ProdaneKarte; 
}