const { onRegister, onLogin, getAllUsers, getCurrentUser } = require("../Controllers/user.controllers");


module.exports = (app)=>{

    app.post("/register", onRegister);
    app.post("/login", onLogin);
    app.get("/users", getAllUsers);
    app.get("/users/current", getCurrentUser);


}

