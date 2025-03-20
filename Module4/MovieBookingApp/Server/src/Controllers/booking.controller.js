const BookingsModel = require("../Model/booking.model");
const showModel = require("../Model/show.model");
const bookingConfirmationTemplate = require("../templates/bookingConfirmationTemplate");
const sendEmail = require("../Utils/EmailUtility");

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);


const makePayment = async (req,res)=>{

    const {token,amount} = req.body;


    //create a new stripe customer 

    const customer = await stripe.customers.create({
        email:req.userDetails.email,
        source:token
    })


    //create the payment intent

    const paymentIntent = await stripe.paymentIntents.create({
        customer:customer.id,
        amount:amount,
        currency:'usd',
        payment_method_types:['card']
    });

    
    const transactionId = paymentIntent.id;



    console.log(`Perform Payment for amount ${amount} via stripe`);
    

    return res.status(200).send({
        success:true,
        message:"Payment Sucessful",
        data:transactionId
    })


}

const createBooking = async (req,res)=>{

    const {show,seats,transactionId} = req.body;
    const userId = req.userDetails._id;

    try{

        const newBooking = await new BookingsModel({show,seats,transactionId,user:userId});

        const newBookingResponse = await newBooking.save();

        const showDetails = await showModel.findById(show);

        const updatedBookedSeats = [...showDetails.bookedSeats, ...seats];

        await showModel.findByIdAndUpdate(show,{bookedSeats:updatedBookedSeats});

          const {subject,body} =  bookingConfirmationTemplate(showDetails,newBookingResponse);

        sendEmail([req.userDetails.email],subject,body);

        return res.status(201).send({
            success:true,
            message:`Booking successfully created with ${newBookingResponse._id}`,
            data:newBookingResponse
        })


    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }



    
}

module.exports = {
    makePayment,
    createBooking
}