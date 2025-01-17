const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController.js');

router.route('/get')
    .get(employeesController.getAllEmployees);

router.route('/')
    .post(employeesController.createNewEmployee);

router.route('/:id')
    .put(employeesController.updateEmployee);

router.route('/')
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;