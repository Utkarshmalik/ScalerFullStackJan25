

 function generateOTP(){

    return  Math.floor(Math.random()*100000) + 90000;

}

module.exports = {
    generateOTP
}
