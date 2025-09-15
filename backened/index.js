import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectdb();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/", (req,res) => {
    res.send("API working");
})


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

