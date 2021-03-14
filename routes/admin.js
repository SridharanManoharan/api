const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("product", { prods: products, pageTitle: "Product", formsCSS: true, productCSS: true, activeAddProduct: true });
});

router.post("/product", (req, res, next) => {
  products.push({ product: req.body.newProduct });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
