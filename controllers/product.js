const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render("product", { 
      prods: products, 
      pageTitle: "Product", 
      formsCSS: true, 
      productCSS: true, 
      activeAddProduct: true 
    })
};

exports.postAddProduct = (req, res, next) => {
    products.push({ product: req.body.newProduct });
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    res.render('shop', { 
      prods: products, 
      pageTitle: 'Shop', 
      path: '/', 
      hasProducts: products.length > 0, 
      formsCSS: false, 
      productCSS: true, 
      activeShop: true 
    });
}