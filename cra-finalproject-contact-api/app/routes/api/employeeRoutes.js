const daoClass = require('../../dao/employeeDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL employee ROUTE -> /api/employee/
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// FIND BY ID ROUTE -> /api/employee/:id
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

// /api/employee/update/:id
router.post('/update/:id', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.updateById(req, res);
});

// /api/employee/create
router.post('/create', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.create(req, res);
});

// /api/employee/insert
router.post('/insert', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.insertRoute(req, res);
});

// /api/employee/delete
router.post('/delete/:id', (req, res) => {
    console.log(req.body);
    dao.deleteById(req, res, req.params.id);
});

module.exports = router;