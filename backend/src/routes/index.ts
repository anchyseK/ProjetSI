import { Router } from "express";
import CourseRouter from "./course";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.use("/course", CourseRouter);

export default router;
