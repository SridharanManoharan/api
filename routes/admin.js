const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></input></form>'
    )
});

router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;