import mongoose from "mongoose"

export const connectdb = async () => {
    await mongoose.connect('mongodb+srv://@cluster0.trhvbj5.mongodb.net/the_golden_spoon_restaurant')
    .then(() => console.log("DB Connected"))
}

//mongodb+srv://_db_user:<db_password>@cluster0.trhvbj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0