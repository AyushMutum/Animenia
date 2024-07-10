import express from "express";
import { addAnime, listAnime, removeAnime } from "../controller/animeController.js";
import multer from 'multer';



const animeRouter = express.Router();



// animeRouter.post("/add", addAnime)

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb) => {
            return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


animeRouter.post("/add",upload.single("image"),addAnime)
animeRouter.get("/list", listAnime)
animeRouter.post("/remove", removeAnime)


export default animeRouter;