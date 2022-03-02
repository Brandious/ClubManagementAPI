const config = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: config.pool
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Many to many relationship
db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);

db.ROLES = ["Staff", "Management", "Admin"];

db.role.belongsToMany(db.user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

// One to many relationship
db.events = require('../models/event.model.js')(sequelize, Sequelize);

db.user.hasMany(db.events, {as: 'user'});
// db.events.belongsTo(db.user, {as: 'user'});



// One to Many relationship
db.karta = require('../models/karta.model.js')(sequelize, Sequelize);

db.events.hasMany(db.karta, {as: "karte"});
// db.karta.belongsTo(db.events, {as: 'karte'});

// Test this relationship
db.cijena = require('../models/cijena.model.js')(sequelize, Sequelize);
// db.karta.hasMany(db.cijena, {as: "cijena"});
// db.karta.belongsTo(db.cijena, {as: 'cijena'});

db.events.hasMany(db.cijena, {as: "event_id"}); //Ispraviiti ovo!!!!
db.cijena.belongsTo(db.events, {as: "event_id"});

db.rezervacija = require('../models/rezervacija.model.js')(sequelize, Sequelize);


db.events.hasMany(db.rezervacija);
// db.rezervacija.belongsTo(db.events,  {as: 'rezervacije'});

db.sto = require('../models/sto.model.js')(sequelize, Sequelize);
db.potrosnja = require('../models/potrosnja.model.js')(sequelize, Sequelize);

db.sto.hasOne(db.rezervacija);
db.user.hasMany(db.rezervacija);
// db.sto.belongsTo(db.rezervacija, {as: 'rezervacijaStola'});

db.potrosnja.hasOne(db.sto, {as: 'potrosnja'});
db.sto.belongsTo(db.potrosnja, {as: 'potrosnja'});
db.events.hasMany(db.sto, {as: 'eventId'});
// db.sto.belongsTo(db.potrosnja, {as: 'sto'});




db.prodaneKarte = require('../models/prodaneKarte.model.js')(sequelize, Sequelize);


db.karta.hasMany(db.prodaneKarte, {as: 'prodaneKarte'});
db.prodaneKarte.belongsTo(db.karta, {as: 'prodaneKarte'});

db.user.hasOne(db.prodaneKarte, {as: 'trgovac'});
db.prodaneKarte.belongsTo(db.user, {as: 'trgovac'});

db.cijena.hasOne(db.prodaneKarte, {as:'cijenaKarte'});
db.prodaneKarte.belongsTo(db.cijena, {as: 'cijenaKarte'});

db.rezervacija.hasOne(db.prodaneKarte, {as: 'rezervacijaStola'});
db.prodaneKarte.belongsTo(db.rezervacija, {as: 'rezervacijaStola'});






db.skladiste = require('../models/skladiste.model.js')(sequelize, Sequelize);
db.artikal = require('../models/artikal.model.js')(sequelize, Sequelize);

db.skladiste.hasMany(db.artikal, {as: 'skladiste'});
db.artikal.belongsTo(db.skladiste, {as: 'skladiste'});

db.stanjeArtikla = require('../models/stanjeArtikla.model.js')(sequelize, Sequelize);
db.artikal.hasOne(db.stanjeArtikla, {as: 'artikal'});
db.stanjeArtikla.belongsTo(db.artikal, {as: 'artikal'});
db.events.hasOne(db.stanjeArtikla, {as: 'dogadjaj'});
db.stanjeArtikla.belongsTo(db.events, {as: 'dogadjaj'});



  






  
module.exports = db;

