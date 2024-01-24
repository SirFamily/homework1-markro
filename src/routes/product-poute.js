const express = require("express")
const producontoller = require("../controllers/product-controller")
const router = express.Router();

router.get("/linding" , producontoller.getProductsLanding)
router.get("/", producontoller.getProducts)
router.get("/:productId", producontoller.getProductsById)

module.exports = router;