const { onRegister, onLogin } = require("../Controllers/user.controllers");


module.exports = (app)=>{

    app.post("/register", onRegister);
    app.post("/login", onLogin);

}
