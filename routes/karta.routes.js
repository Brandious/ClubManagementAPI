const { authJwt } = require('../middleware');
const controller = require('../controllers/karta.controller');
const upload = require('../utils/upload');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/karta",
    [authJwt.verifyToken],
    upload.single('file'),
    controller.createKarta
  );

  app.get(
    "/api/karta",
    [authJwt.verifyToken],
    controller.getKarte
  );

  app.delete(
    "/api/karta",
    [authJwt.verifyToken],
    controller.deleteKarta
  );

  app.patch(
    "/api/karta",
    [authJwt.verifyToken],
    upload.single('file'),
    controller.updateKarta
  );

}