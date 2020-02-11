import { Router } from "express";
import { Book } from "../models";

const router = Router();

router.route("/add").post((req, res) => {
  console.log(req.body);
  const { title, author, genre } = req.body;

  if (!title || !author) {
    res.status(422).send();
    return;
  }

  const book = new Book({
    title,
    author,
    genre
  });

  book
    .save()
    .then(() => res.json("Book added"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  Book.findById(id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  const { id } = req.params;
  Book.deleteOne({ _id: id })
    .then(() => res.json("Book deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

export default router;
