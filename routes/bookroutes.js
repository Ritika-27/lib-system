import { addNewBook, getAllbooks, updateBook } from "../controllers/book.js";
import express from "express";
const router = express.Router();


// get all books
router.get("/books",getAllbooks);

// add new book
router.post("/books",addNewBook);

// update book detailes
router.put("/books/:id",updateBook);

export default router;
