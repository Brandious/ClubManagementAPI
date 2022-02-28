const { authJwt } = require('../middleware');
const controller = require('../controllers/cijena.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Cijena",
    [authJwt.verifyToken],
    controller.createCijena
  );

  app.get(
    "/api/Cijena",
    [authJwt.verifyToken],
    controller.getCijena
  );

  app.delete(
    "/api/Cijena",
    [authJwt.verifyToken],
    controller.deleteCijena
  );

  app.patch(
    "/api/Cijena",
    [authJwt.verifyToken],
    controller.updateCijena
  );

}