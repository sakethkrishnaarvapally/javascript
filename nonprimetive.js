//create an object
let person = {
    name: "Krishna",
    age: 19,
    mobile: 1234567890
};

//accessing object properties

//dot notation
console.log(person.name);
console.log(person.age);
//bracket notation    
console.log(person["mobile"]);

let student = {
    id:2500030456,
    name: "Saketh",
    course: "Frontend Development Framework",
    year: 2,
    display(){
        console.log("Student ID : "+this.id);
        console.log("Student Name : "+this.name);
        console.log("Student Course : "+this.course);
        console.log("Student Year : "+this.year);
    }
};
student.display();

function Student(id,name,course,grade){
    this.id = id;
    this.name = name;           
    this.course = course;
    this.grade = grade;
} 
let student1 = new Student(123,"Amer","c",8.9);
let student2= new Student(456,"Srikar","WTN",8.5);
console.log("Student-1 Info:",student1);
console.log("Student-2 Info:",student2);

//adding property to an object dynamically

let employee={
    id:6789,
    name:"Ravi",
    dept:"CSE"
}
console.log("Adding property Dynamically");
console.log(employee.id);//6789
console.log(employee.name);//Ravi
console.log(employee.dept);//CSE
employee.designation="Assistant Professor"
console.log(employee.designation);//Assistant Professor
employee.id=10258
console.log(employee.id);//10258

//delete property from an object

delete employee.dept
console.log(employee)

//Destructing the object

let{id,name}=employee //Destructing
console.log(id," ",name)


