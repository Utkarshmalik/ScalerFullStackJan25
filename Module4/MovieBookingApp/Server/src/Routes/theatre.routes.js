const { createTheatre, getAllTheatres } = require("../Controllers/theatre.controllers");
const { verifyJWT, verifyAdminOrPartner, verifyAdmin } = require("../Middlewares/auth.middleware");


module.exports = (app)=>{


    app.post("/theatres",[verifyJWT, verifyAdminOrPartner],createTheatre);
    app.get("/theatres",[verifyJWT, verifyAdmin],getAllTheatres);


}