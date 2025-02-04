var modelFood = require('../models/food.js');
var First = (req, res) => {
    var data = {
        ime: 'Pero', 
        prezime: 'Perovski',
        studenti: [
            {ime: 'Pero', prezime: 'Perovski'},
            {ime: 'Janko', prezime: 'Jankovski'},
            {ime: 'Stanko', prezime: 'Stankovski'}
        ]
    };
    res.render('first', data);
}

var Food  = (req, res) => {
       modelFood.getAll()
    .then(data =>{
        return res.render('food', {f: data})
    })
    .catch(err =>{
        return res.send("ERROR")
    })
};

module.exports = {
    First,
    Food
}