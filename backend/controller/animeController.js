import animeModel from "../models/animeModel.js";
import fs from 'fs';


// add anime products

const addAnime = async(req,res) => {
    let image_filename = `${req.file.filename}`

    const anime = new animeModel({
      
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await anime.save();
        res.json({success: true, message: "Anime product added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }


}



// listanime products
const listAnime = async(req,res) => {
    try {
        const animes = await animeModel.find({});
        res.json({success: true, data:animes})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Error"})
    }
}


// remove anime item
const removeAnime = async(req,res) => {
    try {
        const anime = await animeModel.findById(req.body.id)
        fs.unlink(`uploads/${anime.image}`, () => {})

        await animeModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message:"Anime Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

export {addAnime, listAnime, removeAnime}