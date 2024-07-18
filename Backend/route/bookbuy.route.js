import express from "express";
import { bookbuy } from "../controller/bookPurchase.controller.js";
const router = express.Router();

router.post("/bookbuy", bookbuy);

export default router;