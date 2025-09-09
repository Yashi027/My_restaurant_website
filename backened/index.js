import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectdb();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req,res) => {
    res.send("API working");
})


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://_db_user:<db_password>@cluster0.trhvbj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0