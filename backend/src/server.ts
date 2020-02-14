import * as express from "express";
import * as cors from "cors";
import router from "./routes";
import { port } from "./config";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});