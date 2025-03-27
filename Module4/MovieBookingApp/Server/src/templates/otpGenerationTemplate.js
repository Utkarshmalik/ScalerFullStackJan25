


module.exports = (otp)=>{

    const subject = "Reset Password";

    const body =  `<html>
            <head>

            </head>

            <body>
                <h3>
                  Please use this OTP to reset your password ${otp}
                </h3>
            </body>

        </html>`;


    return {subject, body};

}


