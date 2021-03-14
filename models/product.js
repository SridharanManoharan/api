const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        let products = [];
        if(!err){
            products = JSON.parse(fileContent);
        }
        cb(products);
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.error("Error while writing on file ", err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}