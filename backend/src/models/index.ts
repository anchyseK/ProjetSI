import Book from "./book";
import Course from "./course";
import { connect, connection } from "mongoose";
import { mongoHostname, mongoPort, mongoDb } from "../config";

connect(`mongodb://${mongoHostname}:${mongoPort}/${mongoDb}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

export { Book, Course };
