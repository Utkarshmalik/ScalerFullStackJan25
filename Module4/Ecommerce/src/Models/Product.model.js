
const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewelery"]
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
})


ProductSchema.pre('save', async function(next) {
    console.log("Pre hooks: Just before saving the entry")
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;

    next();
  });

  ProductSchema.post('save', async function(doc,next) {
    console.log("Post hooks: Just after saving the entry")
    console.log(`Product:  ${doc.name} has been saved.`);
    next();
  });


const ProductModel = mongoose.model("Products_ScalerJan25",ProductSchema);

module.exports  = ProductModel;










// Pre-save hook for password hashing
// userSchema.pre('save', async function (next) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });
  
