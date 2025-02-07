import express from "express";
import { getTransactions } from "../controllers/transactions.js";

const router = express.Router();

router.get("/", getTransactions);

export default router;
