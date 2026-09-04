import app from "./app.js";
import { connectDatabase } from "./config/db.js";

let port = process.env.PORT

await connectDatabase()

app.listen(port,() => {
    console.log("server running on port",port)
})