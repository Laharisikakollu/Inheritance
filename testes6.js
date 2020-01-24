class Student {
    constructor(firstname, lastname, rollno, age) {
        this.name = {
            firstname,
            lastname,
        };
        this.age = age;
        this.rollno = rollno;
        this.college = function () {
            console.log("College name is MGIT");

        this.nameStudent=function() {
            console.log("My name is " + this.name.firstname + this.name.lastname);
            }
        }
    }
    
}


class DeptStudents extends Student
{
    constructor(firstname,lastname,rollno,age,deptname)
    {
        super(firstname,lastname,rollno,age)
        this.deptname=deptname;
    }
}


let deptStudents=new DeptStudents("Lahari","Sikakollu","16261A05G1",21,"cse")
console.log(deptStudents.name);
console.log(deptStudents.rollno);
console.log(deptStudents.age);
console.log(deptStudents.deptname);
deptStudents.college();
deptStudents.nameStudent();