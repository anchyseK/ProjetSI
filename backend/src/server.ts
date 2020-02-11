import * as express from "express";
import * as cors from "cors";
import bodyParser = require("body-parser");
import router from "./routes";
import { port } from "./config";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});