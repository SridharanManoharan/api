const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render("product", {
      pageTitle: "Product",
      path: "/admin/add-product", 
      formsCSS: true, 
      productCSS: true, 
      activeAddProduct: true 
    })
};

exports.postAddProduct = (req, res, next) => {
    const products = new Product(req.body.bookTitle);
    products.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => res.render('shop', { 
      prods: products, 
      pageTitle: 'Shop', 
      path: '/', 
      hasProducts: products.length > 0, 
      formsCSS: false, 
      productCSS: true, 
      activeShop: true 
    }));
}