import express from "express";

import { getProduct,createProduct,updateProduct ,deleteProduct} from "../controllers/product.controller.js";
const router=express.Router();



//get all products 
router.get("/",getProduct )

//whenever we want to create somthing we use -> post method
router.post("/", createProduct)

//update Product
router.put("/:id", updateProduct);

//delete Product
router.delete("/:id", deleteProduct)

export default router;