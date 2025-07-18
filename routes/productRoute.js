const express=require("express")

const router=express.Router();
const {createProduct, getAllProducts, getProductById, updatedProductById, deleteProductById}= require("../controller/productController")
const {auth} = require("../middleware/auth");
const upload=require("../middleware/upload");
router.post("/", auth, upload.single("image"),createProduct)
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id",auth, upload.single("image"),updatedProductById);
router.delete("/:id",deleteProductById)

module.exports=router;


