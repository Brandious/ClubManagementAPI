const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.get("/api/all", controller.allAccess);

  app.get(
    "/api/staff",
    [authJwt.verifyToken],
    controller.staffBoard
  );

  app.get(
    "/api/management",
    [authJwt.verifyToken, authJwt.isManagement],
    controller.managementBoard
  );

  app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
}