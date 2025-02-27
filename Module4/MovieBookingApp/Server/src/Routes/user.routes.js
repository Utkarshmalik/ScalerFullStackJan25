const { onRegister, onLogin, getAllUsers } = require("../Controllers/user.controllers");


module.exports = (app)=>{

    app.post("/register", onRegister);
    app.post("/login", onLogin);
    app.get("/users", getAllUsers);


}

