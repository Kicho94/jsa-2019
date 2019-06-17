console.log("asdasd");

function pecatenje(){
    
    var i = 0;
    var b = 0;
    while(i<100){
        i++;

        if(i%2==0){
            b++;
        }

        if(i%2==0 && b==3){
            console.log(i);
            b=0;
        }
        }
    }
pecatenje();

// function sobiranje(){
//     var a=[248,21,65,293,46] ;
//     for(i=0;i<a.length;i++){
//       var b = a[i].toString()
//         if(b.length > 1){
//             for(j=0;j<b.length;j++){
//                 var c = b[j]
//                 var c = parseInt(c)

//             }

//         }
        
//     }
    




// }

function arrSum(a){
    var c=0
    for(var i=0;i<a.length;i++){
        if(a[i].toString().length > 1){
            c++;
            a[i]=a[i].toString().split("").reduce((a,b)=>parseInt(a)+
            parseInt(b));
        }
   
    }
    if (c>0){
        return arrSum(a)
     }
     else{
         return a.reduce((a,b)=>a + b);
     }

}


module.exports = {
    arrSum,
    pecatenje
};
