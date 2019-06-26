var http= require('http');

http.createServer(function(req,res){
    console.log(req)
    res.write(`Method: ${req.method}, URL:${req.url}`)
    res.end()
}).listen(8080,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
    
});

