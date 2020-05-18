const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const port = 3001;
app.listen(port, () => {
    console.log(`Server on port: ${port}`); 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ALL ROUTES
app.get('/', (req, res) => {
    res.json({
        'All post': 'http://localhost:3001/api/post'
    });
});

app.post('/post', (req, res) => {
    console.log(req.body);
    
    res.json(req.body);
});

app.use('/api', router);