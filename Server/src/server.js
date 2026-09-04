import app from "./app.js";
import { connectDatabase } from "./config/db.js";
import { env } from "./config/env.js";

let port = env.port;

await connectDatabase();

app.listen(port, () => {
  console.log("server running on port", port);
});
