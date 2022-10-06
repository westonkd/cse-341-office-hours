const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'A very cool Contacts API'
  },
  host: 'localhost:3030',
  schemes: ['http']
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
