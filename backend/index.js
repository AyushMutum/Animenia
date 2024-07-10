// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// // Database connection with mongodb


// mongoose.connect("mongodb+srv://ayushmutum:animenia@cluster0.0szi1vy.mongodb.net/Animenia?retryWrites=true&w=majority&appName=Cluster0")

// //Api creation

// app.get("/", (req, res) => {
//   res.send("Expres App is running");
// });

// // Image storage engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req,file,cb) => {
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// // creating upload endpoint for the images
// app.use('/images', express.static('upload/images'))

// app.post("/upload", upload.single('product'), (req,res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// // create schema for products

// const Product = mongoose.model("Product",{
//   id:{
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
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

// })


// app.post('/addproduct', async(req,res) => {


//   let products = await Product.find({});
//   let id;

//   if(products.length > 0){
//     let last_product_array = products.slice(-1);
//     let last_product = last_product_array[0];
//     id = last_product.id+1;
//   }
//   else{
//     id=1;
//   }

//   const product = new Product({
//     id: id,
//     name: req.body.name,
//     image: req.body.image,
//     category: req.body.category,
//     new_price: req.body.new_price,
//     old_price: req.body.old_price,

//   });

//   console.log(product)
//   await product.save()
//   console.log('save');
//   res.json({
//     success: true,
//     name: req.body.name,
//   })
// })


// // api for deleting product
// app.post('/removeproduct', async(req, res) => {
//     await Product.findOneAndDelete({id: req.body.id });
//     console.log('Remove');

//     res.json({
//       success: true,
//       name: req.body.name,
//     })
// })


// // Api for getting all products to display

// app.get('/allproducts', async(req, res) => {
//     let products = await Product.find({});
//     console.log("All products fetch");

//     res.send(products);
// } )


// // Creating for user model Schema

// const Users = mongoose.model('Users',{
//   name:{
//     type: String,
//   },
//   email:{
//     type: String,
//     unique: true,
//   },
//   password: {
//     type:String,
//   },
//   cartData: {
//     type: Object,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   }
// })

// // Creating endpoint for registering the user

// app.post('/signup', async(req,res) => {

//   let check = await Users.findOne({email:req.body.email})

//   if(check){
//     return res.status(400).json({success: false, errors: 'existing user found with same email address'})
//   }
//   let cart = {};

//   for(let i=0; i< 300; i++){
//     cart[i] = 0;

//   }

//   const user = new Users({
//     name:req.body.username,
//     email:req.body.email,
//     password: req.body.password,
//     cartData: cart,
//   })
//     await user.save();

//     const data = {
//       user:{
//         id: user.id
//       }
//     }

//     const token = jwt.sign(data, 'secret_ecom')
//       res.json({success: true, token})
// })

// // For user login endpoint

// app.post('/login', async (req,res) => {
//   let user = await Users.findOne({email:req.body.email})

//   if(user){
//     const passCompare = req.body.password === user.password;
//     if(passCompare){
//       const data = {
//         user:{
//           id:user.id
//         }
//       }
//       const token = jwt.sign(data, 'secret_ecom');
//       res.json({success:true,token})
//     }
//     else{
//       res.json({success:false, errors:"Wrong Password"})
//     }
//   }
//   else{
//     res.json({success:false,errors:"Wrong Email id"})
//   }

// })

// // endpoint for new collection data
// app.get('/newcollections', async(req,res) => {
//   let products = await Product.find({});
//   let newcollection = products.slice(1).slice(-8);
//   // console.log("New collection fetch");
//   res.send(newcollection)
// })

// // Popular for oktaku endpoint
// app.get('/popularinoktaku', async(req,res) => {
//   let products = await Product.find({category:"anime-shirts"})
//   let popular_in_oktaku = products.slice(0,4);
//   console.log("Oktaku Popular");
//   res.send(popular_in_oktaku);
// })



// // Popular for oktaku endpoint

// // Endpoint for general related products (all products or other logic)
// app.get('/relatedproducts', async (req, res) => {
//   try {
//     // Fetch all products or apply other related logic
//     let products = await Product.find({});
//     let relatedProducts = products.slice(0, 4); // Example: Limiting to first 4 products
//     console.log("Related products fetched");
//     res.send(relatedProducts);
//   } catch (error) {
//     console.error('Error fetching related products:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // app.get('/relatedproducts', async(req,res) => {
// //   let products = await Product.find({})
// //   let relatedproduct = products.slice(0,4);
// //   console.log("Related");
// //   res.send(relatedproduct);
// // })

// // creating middleware to fetch user

// const fetchUser = async (req,res,next) => {
//     const token = req.header('auth-token');
//     if(!token){
//       res.status(401).send({
//         errors: "Please authenticate using a valid token"
//       })
//     }
//     else{
//       try {
//         const data = jwt.verify(token,'secret_ecom')
//         req.user = data.user;
//         next();
//       } catch (error) {
//         res.status(401).send({
//           errors: "Please authenticate using a valid token"
//         })
//       }
//     }
// }

// // adding product in cart endpoint
// app.post('/addtocart', fetchUser, async (req,res) => {
//   console.log("added",req.body.itemId);
//   let userData = await Users.findOne({_id:req.user.id  })
//   userData.cartData[req.body.itemId] += 1;

//   await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
//   // res.send("Added");
//   res.json({ message: "Added", cartData: userData.cartData });
// })

// // creating endpoint to remove product from cart data
// app.post('/removefromcart', fetchUser, async (req,res) => {
//   console.log("remove",req.body.itemId);
//   let userData = await Users.findOne({_id:req.user.id  })
//   if(userData.cartData[req.body.itemId] > 0 )
//   userData.cartData[req.body.itemId] -= 1;

//   await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
//   // res.send("Added");
//   res.json({ message: "Remove", cartData: userData.cartData });
// })


// // creating to get cart endpoint 
// app.post('/getcart', fetchUser, async(req,res) => {
//   console.log("get-cart");
//   let userData = await Users.findOne({_id:req.user.id});
//   res.json(userData.cartData);

// })

// app.listen(port, (error) => {
//   if (!error) {
//     console.log("Server running on port " + port);
//   } else {
//     console.log("Error: " + error);
//   }
// });
