import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayushmutum:animenia@cluster0.0szi1vy.mongodb.net/Animeniaaa').then(() => {
        console.log("DB connected")
    })
}
// mongoose.connect("mongodb+srv://ayushmutum:animenia@cluster0.0szi1vy.mongodb.net/Animenia?retryWrites=true&w=majority&appName=Cluster0")