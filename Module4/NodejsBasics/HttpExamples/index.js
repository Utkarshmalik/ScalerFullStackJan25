
const http = require("http");


// const server = http.createServer((req,res)=>{

//     //Set Response Headers 
//     res.setHeader('Content-Type','text/plain');

//       // Write response content
//     res.write("Hello World");

//       // End the response
//     res.end();


// })



// const server = http.createServer((req,res)=>{

//     //Set Response Headers 
//     res.setHeader('Content-Type','text/html');

//       // Write response content
//       res.write('<html><head><title>Node.js HTTP Server</title></head><body>');
//       res.write('<h1>Hello, World!</h1>');
//       res.write('</body></html>');      
  

//       // End the response
//     res.end();


// })


// const server = http.createServer((req,res)=>{

//     //Set Response Headers 
//     res.setHeader('Content-Type','application/json');


//     const responseData = {message:"Hello World I am good",status:200};

//     res.end(JSON.stringify(responseData));

// })


const server = http.createServer((req,res)=>{


    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to Home page");
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><head><title>About Page</title></head><body>');
        res.write('<h1>Hello, World! About Page</h1>');
        res.write('</body></html>');        
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({name:"Utkarsh",email:"utmalik@gmail.com"}))   
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("404 Not Found");
    }

})


const port = 3000;

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})