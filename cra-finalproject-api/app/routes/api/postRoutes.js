const daoClass = require('../../dao/postDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL post ROUTE -> /api/post/
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// FIND BY ID ROUTE -> /api/post/:id
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

// /api/post/update/:id
router.post('/update/:id', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.updateById(req, res);
});

// /api/post/create
router.post('/create', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.create(req, res);
});

// /api/post/insert
router.post('/insert', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.insertRoute(req, res);
});

// /api/post/delete
router.post('/delete/:id', (req, res) => {
    console.log(req.body);
    dao.deleteById(req, res, req.params.id);
});

module.exports = router;