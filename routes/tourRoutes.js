const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.patchTourById)
  .delete(tourController.deleteTourById);

module.exports = router;