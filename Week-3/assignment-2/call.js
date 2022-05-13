
//created a function with global scope

function appoint_func() {
    return `${this.name} is appointed to ${this.subject} in ${this.year} ${this.div} class.`
};


//objects to call the function
const lecturer_1 = {
    name: "Prof.Michael",
    subject: "Fluid Dynamics",
    year: "Second year",
    div: "B"
};

const lecturer_2 = {
    name: "Prof.Adam",
    subject: "Heat Transfer",
    year: "Final year",
    div: "A"
};

const lecturer_3 = {
    name: "Prof.Michelle",
    subject: "Kinematics",
    year: "Third year",
    div: "C"
};

//using call() to call function on specific objects
let schedule_1 = appoint_func.call(lecturer_1);
let schedule_2 = appoint_func.call(lecturer_2);
let schedule_3 = appoint_func.call(lecturer_3);


console.log(schedule_1);
console.log(schedule_2);
console.log(schedule_3);