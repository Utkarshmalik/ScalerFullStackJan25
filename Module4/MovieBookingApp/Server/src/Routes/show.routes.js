const { createNewShow, getAllShows, getThetresAndShowsByMovieId, getShowDetailsByShowId } = require("../Controllers/show.controllers")
const { verifyJWT, verifyAdminOrPartner } = require("../Middlewares/auth.middleware")


module.exports = (app)=>{


    app.post("/shows",[verifyJWT, verifyAdminOrPartner],createNewShow);
    app.get("/shows",[verifyJWT],getAllShows);
    app.get("/shows/movies/:movieId",[verifyJWT], getThetresAndShowsByMovieId);
    app.get("/shows/:id",[verifyJWT],getShowDetailsByShowId);

}