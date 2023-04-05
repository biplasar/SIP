'use strict';

const properties = require('../package.json');

var request = require('request');
var options = {
  'method': 'GET',
  //'url': 'https://app.embold.io/api/v2/organizations/d6ad8a1a2d7c6e6acab886157b774096/repositories',
  'url': 'http://sipembold.eastus.cloudapp.azure.com:3000/api/v1/repositories',
  /*'headers': {
    'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OTg4ODQyMDM1MywiaWF0IjoxNjc5ODg4NDIwfQ.sNh3jRnwXIlmHlbZO8wN6eJ7M_EBIbN6qL9Juh9GibhQtkznqfpg5zO6fQhBe1sdIZomu76r4hOSn9CWkZTCXw'
  }*/
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY4MDYwMDQ4MDkzMCwiaWF0IjoxNjgwNjAwNDgwfQ.5-RIW5VrXEZ_bYuWDu1zL0DuNljZWVIgrHOMYcm8mlCgsnFhqDh8tBx48kUKcOthdpv8b5m0JVoQAsjcpqxT-A'
  }
};

var report = {
  'method': 'GET',
  'url': 'http://sipembold.eastus.cloudapp.azure.com:3000/api/v1/repositories/128770b54001a3481c9747ed80b89afe/pdfreport',
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY4MDYwMDQ4MDkzMCwiaWF0IjoxNjgwNjAwNDgwfQ.5-RIW5VrXEZ_bYuWDu1zL0DuNljZWVIgrHOMYcm8mlCgsnFhqDh8tBx48kUKcOthdpv8b5m0JVoQAsjcpqxT-A'
  }
};



const controllers = {
    getRepositories: (req, res) => {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            res.send(response.body);
          });
    },

    getReport: (req, res) => {
      request(report, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
          res.send(response.body);
        });
  }    
};

module.exports = controllers;