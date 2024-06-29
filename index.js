
import express from "express"
import connectDb from "./config/db.js";
import router from "./routes/user.js";
import {staticRouter} from "./routes/staticRoute.js"
import path from "path"
import cookieParser from "cookie-parser";

const app = express()
const PORT = 5000;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
connectDb()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(router)
app.use(staticRouter)




app.listen(PORT, () => console.log(`server started at port: ${PORT}`))