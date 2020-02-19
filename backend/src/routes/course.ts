import { Router } from "express";
import { Course } from "../models";

const router = Router();

router.route("/add").post((req, res) => {
  console.log(req.body);
  const { title, description, image } = req.body;

  if (!title || !description) {
    res.status(422).send();
    return;
  }

  const course = new Course({
    title,
    description,
    image
  });

  course
    .save()
    .then(() => res.json("Course added"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  Course.findById(id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:title/:description").get(async (req, res) => {
  const { title, description } = req.params;
  try {
    const course = await Course.findOne({ nom: title }, { description: description });
    res.json(course);
  }
  catch (error) {
    res.status(400).json("Error: " + error);
    throw error;
  }
});

router.route("/delete/:id").delete((req, res) => {
  const { id } = req.params;
  Course.deleteOne({ _id: id })
    .then(() => res.json("Course deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

export default router;
