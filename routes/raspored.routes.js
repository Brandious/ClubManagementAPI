const { authJwt } = require('../middleware');
const controller = require('../controllers/raspored.controller');
const upload = require('../utils/upload');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/createRaspored",
    [authJwt.verifyToken],
    controller.handleCreateRaspored
  );

  app.get(
    "/api/getRaspored",
    [authJwt.verifyToken],
    controller.getRaspored
  );

//   app.get(
//     "/api/upcoming",
//     [authJwt.verifyToken],
//     controller.getUpcomingEvents
//   );
  
//   app.get(
//     "/api/past",
//     [authJwt.verifyToken],
//     controller.getPastEvents
//   );
  

//   app.delete(
//     "/api/event",
//     [authJwt.verifyToken],
//     controller.deleteEvents
//   );

//   app.patch(
//     "/api/event",
//     [authJwt.verifyToken],
//     controller.updateEvent
//   );

}