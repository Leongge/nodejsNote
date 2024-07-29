//Arrow Functions

// const square = (x) =>{
//     x = x+1
//     return x * x;
// };

// const shorthandSquare = (x) => x * x;

// const a = function(x){
//     return x * x;
// };

// console.log(square(2), shorthandSquare(2));

const event = {
    name: 'My Class Name',
    studentList: ['Andrew', 'Peter', 'Pan'],

    listStudent(){
        console.log('my class name is ', this.name);

        this.studentList.forEach((student) => {
            console.log('student in the class ' + student+ ' in '+ this.name);
        });

        this.studentList.forEach(functionS);
    },
};

const functionS = function(student){
    console.log(student, this.name)
}

event.listStudent();