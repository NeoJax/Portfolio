const express = require('express');

const about = require('./about');

const projects = require('./projects');

const resume = require('./resume');

const contact = require('./contact');

const routes = express.Router();

routes.get('/', (req, res) => res.redirect('/about'));
routes.use('/about', about);

routes.get('/projects');
routes.use('/projects', projects);

routes.get('/resume');
routes.use('/resume', resume);

routes.get('/contact');
routes.use('/contact', contact);


module.exports = routes;
