var http = require('http')

var server = http.createServer(function (req,res){
    console.log(req)
    var URL= req.url.split('/');
    output = 0
    switch(URL[1]){
        case 'add':
            if(URL.length > 2){
                for(let i = 2;i < URL.length;i++){
                    output += parseInt(URL[i]);
                }
            }
            
    break;
            case 'sub':
            output = URL[2];
            if(URL.length > 2){
                    for(let i = 3;i<URL.length;i++)
                       output -= parseInt(URL[i]);
                }
    break;
            case 'mult':
                output = 1
                if(URL.length > 2){
                        for(let i = 2;i < URL.length;i++){
                            output *= parseInt(URL[i]);
                        }
                    };
    break;
            case 'div':
                output = URL[2]
                if(URL.length > 2){
                    for(let i = 3;i < URL.length;i++){
                        output /= parseInt(URL[i])
                    }
    
                };

    break;            
}
        res.write("Your result is " + output)
        res.end()
    
});
server.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully!');
});