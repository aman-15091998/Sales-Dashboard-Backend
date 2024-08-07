import { Router } from "express";
import { filterTransactions, initializeDb } from "../controller/transaction.controller.js";

export const transactionRouter=Router();

transactionRouter.get("/initialize", initializeDb);
transactionRouter.get("/filter", filterTransactions);
