'use strict';

const controller = require('../controllers/appController.js');

module.exports = (app) => {
  app.route('/repositories').get(controller.getRepositories);
  app.route('/report').get(controller.getReport);
}