const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const port = 3002;
app.listen(port, () => {
    console.log(`Server on port: ${port}`); 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ALL ROUTES
app.get('/', (req, res) => {
    res.json({
        'All employee': 'http://localhost:3002/api/employee'
    });
});

app.post('/employee', (req, res) => {
    console.log(req.body);
    
    res.json(req.body);
});

app.use('/api', router);