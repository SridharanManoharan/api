const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use('/user', (req, res, next) => {
    console.log('User middleware');
    console.log(req.body);
    next();
});

app.use((req, res, next) => {
    console.log('Final User middleware');

    if(req.path === '/user'){
        res.send('User')
    } else if(req.path === '/') {
        res.send('Hello')
    }
    
});

app.listen(3000);