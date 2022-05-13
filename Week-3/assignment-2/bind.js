//created candidate_1 object with local function
const candidate_1 = {
    name: 'Ashirwad',
    age: 23,
    position: 'Software Engineer',

    finalStatement: function () {
        return `${this.name} is ${this.age} years old and works as a ${this.position}`;
    }
};

//multiple object created to utilise the local function
const candidate_2 = {
    name: 'Sachin',
    age: 25,
    position: 'Project Manager',
}

const candidate_3 = {
    name: 'Saurabh',
    age: 24,
    position: 'Software Engineer',
}

const candidate_4 = {
    name: 'Amit',
    age: 26,
    position: 'Junior Software Engineer',
}

//bounded local function of initial object to other objects
let output_1 = candidate_1.finalStatement.bind(candidate_1);
let output_2 = candidate_1.finalStatement.bind(candidate_2);
let output_3 = candidate_1.finalStatement.bind(candidate_3);
let output_4 = candidate_1.finalStatement.bind(candidate_4);

console.log(output_1());
console.log(output_2());
console.log(output_3());
console.log(output_4());
