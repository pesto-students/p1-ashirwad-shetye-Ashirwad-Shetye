

//array of cities
/*
let cityNames = ["Mumbai CSMT", "Madgaon", ""]
*/


//create function to apply 
const trainRoute = {
    route: function(city_1, city_2) {
        return ` ${this.name} (${this.number}) will travel from ${city_1} to ${city_2}`;
    }
}


const train_1 = {
    name: 'Mandovi Express',
    number: 10103
}

const train_2 = {
    name: 'Deccan Express',
    number: 11007
}


let train_1_Route = trainRoute.route.apply(train_1, ["Mumbai CSMT", "Madgaon"]);
let train_2_Route = trainRoute.route.apply(train_2, ["Mumbai CSMT", "Pune Junction"]);

console.log(train_1_Route);
console.log(train_2_Route);