const { onRegister, onLogin, getAllUsers, getCurrentUser, onForgetPassword, onResetPassword } = require("../Controllers/user.controllers");


module.exports = (app)=>{

    app.post("/register", onRegister);
    app.post("/login", onLogin);
    app.get("/users", getAllUsers);
    app.get("/users/current", getCurrentUser);
    app.post("/forget",onForgetPassword);
    app.post("/reset",onResetPassword);


}

