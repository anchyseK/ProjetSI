import { Router } from "express";
import BookRouter from "./book";
import CourseRouter from "./course";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.use("/book", BookRouter);
router.use("/course", CourseRouter);

export default router;
