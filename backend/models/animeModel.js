import mongoose from "mongoose";


const animeSchema = new mongoose.Schema({
          name: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
       
         
        //   new_price: {
        //     type: Number,
        //     required: true,
        //   },
        //   old_price: {
        //     type: Number,
        //     required: true,
        //   },
        //   date:{
        //     type: Date,
        //     default: Date.now,
        //   },
        //   available:{
        //     type: Boolean,
        //     default: true,
        //   },
})


const animeModel = mongoose.models.anime || mongoose.model("anime",animeSchema )

export default animeModel;