const express = require('express');

const DroneModel = require('../models/drones.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel.find((err, allDrones)=> {
        if (err) {
            next(err);
            return;
        }

        res.locals.listOfDrones = allDrones;
        console.log(allDrones);
        res.render('drones/index.ejs');
    });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');

});



router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel ({
        droneName:    req.body.droneName,
        propellers:   req.body.propeller,
        maxSpeed:     req.body.speed,
});

theDrone.save((err) => {
      if(err){
        next(err);
        return;

      }
      res.redirect('/drones');
    });

});

module.exports = router;
