const { Console } = require('console');
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
        
    }
    else if(req.url == '/rooms'){
        res.statusCode = 200;
        const data = fs.readFileSync('rooms.html')
        res.end(data.toString());
       
    }
    else{
        res.statusCode = 404;
        res.end('<center><h1>ERROR</h1><h3>Page Not Found!</h3></center> ');

    }   
})
server.listen(port,()=>{
    console.log('Server is listneing on port ${port}');
});