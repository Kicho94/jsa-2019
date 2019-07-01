var fs = require('fs');
var tekst = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna lorem. Mauris et posuere metus. Sed luctus posuere orci, a dictum ligula venenatis sed. Sed sed turpis a nisl porttitor gravida. Sed fermentum laoreet felis. Sed id fermentum justo. Etiam egestas est urna, ut pulvinar est hendrerit eu. Sed quis convallis purus. Donec pellentesque arcu vel nunc molestie posuere. Vestibulum a sapien ex. Vivamus pellentesque est vitae egestas imperdiet. Morbi dictum vestibulum arcu, sit amet eleifend lectus consequat commodo. Proin egestas augue nec fermentum ultrices. Donec finibus lobortis augue vitae scelerisque.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquam augue eu nisi interdum, in posuere tellus fermentum. Cras eu velit augue. Vivamus enim velit, maximus vel purus id, iaculis malesuada eros. Morbi egestas erat nec sapien convallis, quis ullamcorper eros imperdiet. Aenean venenatis est velit, ultricies sollicitudin augue imperdiet tincidunt. Proin quis eleifend sapien. Proin ut molestie massa, a rhoncus magna. Quisque feugiat quam commodo lectus consequat, eu aliquet dolor auctor.`
fs.writeFile("domasna.txt", tekst, (err) =>{
    if (err){
        console.error(err)
    }
} );


fs.readFile("domasna.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    totalCharCount(data);
    totalWordCount(data);
    totalSentCount(data);

    

});

var totalCharCount = (data) => {
    console.log("There are " + data.length + " characters,signs and empty spaces in this text.");
};

var totalWordCount = (data) => {
   console.log("There are " + data.split(" ").length + " words in this text")
   
};

var  totalSentCount = (data) => {
    console.log ('There are ' + data.split('.').length +  ' sentences in this text');
    var smallerThanSeven = []
    var evenWithSeven = []
    var biggerThanSever = []
    for(let i = 0; i < data.split(' ').length; i++){
        if(data.split(' ')[i].length === 7){
            evenWithSeven.push(data.split(' ')[i])
        }
        else if(data.split(' ')[i].length < 7){
            smallerThanSeven.push(data.split(' ')[i])

        }
        else{
            biggerThanSever.push(data.split(' ')[i])
        }
            
        }
    console.log('There are ' + evenWithSeven.length + ' words with 7 characters')
    console.log('There are ' + biggerThanSever.length + 'words with more than 7 characters ')
    console.log('There are ' + smallerThanSeven.length + ' words with less than 7 characters')

    }
    




