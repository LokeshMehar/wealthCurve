import express from "express";
import { getProducts } from "../controllers/products.js";

let router = express.Router();



router.get('/',getProducts);

export default router;