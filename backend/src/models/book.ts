import * as mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  title: string;
  author: string;
  genre: string;
}

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  genre: { type: String }
});

export default mongoose.model<IBook>("Book", BookSchema);
