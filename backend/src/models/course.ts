import * as mongoose from "mongoose";
import { Course }  from "../../../types/course";

export interface ICourse extends Course, mongoose.Document {
}

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String }
});

export default mongoose.model<ICourse>("Course", CourseSchema);
