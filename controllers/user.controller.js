const db = require('../models');
const Events = db.events;
const Karta = db.karta;
const Skladiste = db.skladiste;
const Cijena = db.cijena;
const { Op } = require("sequelize");  
  
  exports.allAccess = async(req, res) => {


    const events = await Events.findAll({ where: {
      datum_izvodjenja: {
        [Op.gt]: new Date(),
      }},
   include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

   res.status(200).send({events});
    // res.status(200).send("Public Content.");
  };
  
  exports.staffBoard = (req, res) => {
    res.status(200).send("Staff Content.");
  };
  
  exports.managementBoard = (req, res) => {
    res.status(200).send("Management Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };