const { authJwt } = require('../middleware');
const controller = require('../controllers/prodaneKarte.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/prodajKartu",
    [authJwt.verifyToken],
    controller.prodajKartu
  );

  app.get(
    "/api/izlistajKartu",
    [authJwt.verifyToken],
    controller.getProdaneKarte
  );

  app.delete(
    "/api/stornirajKartu",
    [authJwt.verifyToken],
    controller.deleteKartu
  );

  app.patch(
    "/api/updateKartu",
    [authJwt.verifyToken],
    controller.updateKartu
  );

}