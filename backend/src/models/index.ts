import Book from "./book";
import { connect, connection } from "mongoose";
import { mongoHostname, mongoPort, mongoDb } from "../config";

connect(`mongodb://${mongoHostname}:${mongoPort}/${mongoDb}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

export { Book };
