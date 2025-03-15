const nodemailer = require("nodemailer");

const sendEmail = (emails,subject,html)=>{
    

    const recipientEmailIds = emails.join(" ,");

    // Create a transporter object
    const transporter = nodemailer.createTransport({
       service:'gmail',
        auth: {
        user: 'utkarsh.malik_1@scaler.com',
        pass: 'qzvyiwqxekfphwnc',
        }
    });

    const mailDetails = {
        from: 'utkarsh.malik_1@scaler.com',
        to: recipientEmailIds,
        subject: subject,
        html:html
      };

      // Send the email
    transporter.sendMail(mailDetails, function(error, info){
        if (error) {
        console.log('Error:', error);
        } else {
        console.log(`Email sent successfully to email: ${recipientEmailIds}`);
        }
    });
        

}

module.exports = sendEmail;