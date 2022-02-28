const db = require('../models');
const Potrosnja = db.potrosnja;

exports.createPotrosnja = async (req, res) => {

    try
    {
         const {tableId, naziv, price_eur, price_kuna } = req.body;
    
         const potrosnja = await Potrosnja.create({
             naziv: naziv,
             price_eur: price_eur,
             price_kuna: price_kuna,
             tableId: tableId
         });

         res.status(200).send(potrosnja);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getPotrosnja = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const potrosnja = await Potrosnja.findAll({});

         res.status(200).send(potrosnja);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deletePotrosnja = async (req, res) => {

    try
    {
        
         const { potrosnjaId } =  req.body;
       
         const potrosnja = await Potrosnja.destroy({where: {id: potrosnjaId}})

         return res.status(204).send(potrosnja);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updatePotrosnja = async (req, res) => {

    try
    {
        const {potrosnjaId, tableId, naziv, price_eur, price_kuna } = req.body;
    
         const potrosnja = await Potrosnja.update({  naziv: naziv,
            price_eur: price_eur,
            price_kuna: price_kuna,
            tableId: tableId},{where: {id: potrosnjaId}})
         
            return res.status(200).send(potrosnja);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}