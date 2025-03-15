


module.exports = (showDetails, bookingDetails)=>{

    const subject = "Booking Confirmed";

    const body =  `<html>
            <head>

            </head>

            <body>
                <h3>
                Booking Confirmed for showId: ${showDetails._id} and bookingId ${bookingDetails._id}
                </h3>
            </body>

        </html>`;


    return {subject, body};

}


