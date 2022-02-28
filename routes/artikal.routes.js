const { authJwt } = require('../middleware');
const controller = require('../controllers/artikal.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Artikal",
    [authJwt.verifyToken],
    controller.createArtikal
  );

  app.get(
    "/api/Artikal",
    [authJwt.verifyToken],
    controller.getArtikal
  );

  app.get(
    "/api/IzlistajArtikal",
    [authJwt.verifyToken],
    controller.getStanjeArtikla
  );

  app.delete(
    "/api/Artikal",
    [authJwt.verifyToken],
    controller.deleteArtikal
  );

  app.patch(
    "/api/Artikal",
    [authJwt.verifyToken],
    controller.updateArtikal
  );

}