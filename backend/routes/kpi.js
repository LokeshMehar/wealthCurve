import express from "express";
import { getKPIs } from "../controllers/kpis.js";

let router = express.Router();



router.get('/',getKPIs);

export default router;