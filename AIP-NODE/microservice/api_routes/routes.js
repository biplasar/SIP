'use strict';

const controller = require('../controllers/appController.js');

module.exports = (app) => {
  app.route('/repositories').get(controller.getRepositories);
  app.route('/repositories/:repositoryUID/pdfreport').get(controller.getReport);
  app.route('/repositories/:repositoryUID/scan').post(controller.performScan);
  //app.route('/report').get(controller.getReport);
}