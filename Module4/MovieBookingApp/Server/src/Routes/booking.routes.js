const { makePayment, createBooking } = require("../Controllers/booking.controller");
const { verifyJWT } = require("../Middlewares/auth.middleware");
const validateCreateBookingRequest = require("../Middlewares/booking.middleware");


module.exports = (app)=>{

    app.post("/payments",[verifyJWT],makePayment);

    app.post("/bookings",[verifyJWT, validateCreateBookingRequest],createBooking);

}