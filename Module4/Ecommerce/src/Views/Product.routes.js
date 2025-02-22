const { createProduct, getAllProducts, getProductById, deleteProductById, updateProductById } = require("../Controllers/Product.Controller");


module.exports = (app)=>{

        app.post("/products", createProduct);
    
        app.get("/products", getAllProducts);
        
        app.get("/products/:id",getProductById);

        app.delete("/products/:id",deleteProductById);
        
        app.patch("/products/:id", updateProductById);

}