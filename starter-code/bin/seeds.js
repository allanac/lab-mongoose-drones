// Iteration #1
const mongoose = require('mongoose');

const DroneModel = require('../models/drones.js');

mongoose.connect('mongodb://localhost/drones-dev');


const droneArray = [
  {
    droneName:    "Mega Dront",
    propellers:   7,
    maxSpeed:     100
  },
  {
    droneName:    "Fat Drone",
    propellers:   20,
    maxSpeed:     30
  },
  {
    droneName:    "DJ MaxTronic",
    propellers:   6,
    maxSpeed:     55
  }
];

DroneModel.create(
  droneArray,

  (err,dronesAfterSave) => {
    if(err){
      console.log('Create Eerr');
      console.log(err);
      return;
    }
    dronesAfterSave.forEach((oneDrone) => {
        console.log('New Drone ----> ' + oneDrone.droneName);
    });
  }
);
