const pool = require('../config/dbconfig');

class EmployeeDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * FROM employee';
        this.pool.query(sql, (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });        
    }

    findById(req, res, id) {
        let sql = 'SELECT * FROM employee WHERE id = ?';
        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });
    }

    deleteById(req, res, id) {
        let sql = 'UPDATE employee set deleted_at = NOW() WHERE id = ?';
        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });
    };

    run(req, res, sql, params) {
        this.pool.query(sql, params, function (error, rows) {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });
    };

}

module.exports = EmployeeDao;