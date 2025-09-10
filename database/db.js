const mongoose = require("mongoose");

async function connectDb(){
    const connection = await mongoose.connect("mongodb+srv://Mohammed-Aathil-J:<db_password>@cluster0.32ytf5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DataBase Connection Successfully");
}
module.exports = mongoose.model("User", new mongoose.Schema)
