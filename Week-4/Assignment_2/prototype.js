
//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//creating object 
const teacher = new Person('Deepak', 36);

//adding property to constructor function
Person.prototype.teach = function (subject) {
    return (this.name + ' is now teaching ' + subject);
}

//prototype value of Person
console.log(Person.prototype); //pointing to internal property of constructor function

//inheriting the property from prototype
console.log(teacher.teach("JavaScript"));
