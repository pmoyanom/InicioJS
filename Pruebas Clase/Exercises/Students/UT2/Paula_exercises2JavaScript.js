//@pgonzalezs26@educarex.es

const readline=require('readline-sync');//To allow readline

//Principiantes

//1
let nombre = readline.question("What is your name? ");
const edad = parseInt(readline.question("How old are you? "));
var gustoProgramar = readline.keyInYN("Do you like programming? ");

console.log('Name: '+ nombre+' Age: '+edad+' Do you like programming? '+gustoProgramar);
//2

let a=parseInt(readline.question("Introduce a number: "));
let b=parseInt(readline.question("Another one: "));
let suma=a+b;

console.log(a+' + '+b+' = '+suma);
//3
let miNombre=readline.question("What is your name? ");
let miApellido=readline.question("What is your surname? ");
console.log(`Name: ${miNombre}, Surname: ${miApellido}`);
//4
let num=readline.question("Tell me a number: ");
let number=number(num);
console.log(typeof(number));
//5
let x=readline.question("Tell me a number: ");
let y=readline.question("Another one: ");
let sum=parseInt(x+y);
let resta=parseInt(x-y);
let mult=parseInt(x*y);
let div= parseInt(x/y);
console.log('Addition: ', sum, 'Subtraction: ', resta, 'Multiplication: ', mult, 'Division: ', div);
//6
let ask=parseInt(readline.question('Introduce a number: '));

if(ask>10){
    console.log('The number is greater than 10');
}else{
    console.log('the number is less than 10');  
}
//Intermedios

//1
let numb=parseInt(readline.question('Tell me a number: '));
if(numb%2==0){//If the remainder when divided by two is not equal to 0, it is odd.
    console.log('The number is even');
}else{
    console.log('The number is odd');
};
//2
let n=1;
for(n=1;n<=10;n+=1){
    console.log(n+' ');
};
//3

let numero = parseInt(readline.question("Enter a number to calculate its factorial:"));
let factorial = 1;
let i = numero;
while (i > 0) {//As long as it is less than the number entered by the user, it will not exit the loop
    factorial *= i;
    i--;
}
console.log(`El factorial de ${numero} es: ${factorial}`);

//4
let usernumber=parseInt(readline.question('Introduce a number: '));
for(let i=1;i=10;i+=1){
    let res=(usernumber*i);
    console.log(usernumber+' * '+i+' = '+res);
};
//5

let phrase=readline.question('Introduce a phrase: ');
function vocalsCounter(phrase) {
    const vocals='aeiouAEIOU';
    let counter=0;

    for(let j=0;j<chain.legth;j++){//
        if (vocals.includes(phrase[j])) {//includes makes sure how many vocals there are
            counter++;//it will increase with every vocal
        }
    }
    return counter;//return the number of vocals
}
let vocalsnum=vocalsCounter(phrase);
console.log(`The phrase has ${vocalsnum} vocals`);
//6
let names = [];
for (let i=0;i<3;i++) {//Use the for loop to repeat until we´ve got the names
    let name=readline.question(`Introduce a name ${i+1}: `);
    names.push(name); // push into the array
}
console.log('\nThe names you introduced are:');//Again we use the for loop to print the names
for (let i=0;i<names.length;i++) {
    console.log(names[i]);
}
//Avanzados

//1
let n1=parseInt(readline.question('Introduce a number: '));//User introduce two numbers
let n2=parseInt(readline.question('Introduce another number: '));

let operador=['+','-','*','/'];//Operators array
let usero=readline.question("Enter the sign of the operation you want to do:");//User choose wich operator needs

if(usero==operador[0]){//I use if cause usero is define as string, but we can also use switch loop if it is an int variable.
    suma=n1+n2;
    console.log(n1+' + '+n2+' = '+suma);
};
if(usero==operador[1]){
    resta=n1-n2;
    console.log(n1+' - '+n2+' = '+resta);
};
if(usero==operador[2]){
    mult=n1*n2;
    console.log(n1+' * '+n2+' = '+mult);
};
if(usero==operador[3]){
    div=n1/n2;
    console.log(n1+' / '+n2+' = '+div);
};
//2
let frase=readline.question('Introduce a phrase: ');//Userenter a phrase
let frases = frase.split(' ');//split divide string so frases is now an array
console.log(`Words number: ${frases.length}`);//length count how long is frases
//3
function invertirFrase(cadena) {
    return cadena.split('').reverse().join('');//split=divide string so frases is now an array
}                                              //reverse=reverse array and return it
                                               //join=join elements with separator

let fras=readline.question('Introduce a phrase: ');
let fraseInvertida=invertirFrase(fras);

console.log("Inverted phrase: "+fraseInvertida);
//4
let nu1=parseInt(readline.question('Enter the first number: '));
let nu2=parseInt(readline.question('Enter the second number: '));//user introduce the numbers
let nu3=parseInt(readline.question('Enter the third number: '));
let mayor;//variable mayor will have the higher value

if(nu1>nu2 && nu1>nu3){
    mayor=nu1;//mayor=higher value, it is nu1 in this case

}else if(nu2>nu1 && nu2>nu3){
        mayor=nu2;
}else{
    mayor=nu3;
}
console.log(`${mayor} is the largest number`);
//5
let numberUser=parseInt(readline.question("Introduce a number: "));
function esPrimo(number) {
    if (number<=1) {
        return false; //if number is smallest than 1 it means it is an odd number
    }
    
    for (let i=2; i<=Math.sqrt(number);i++) {//If the number is divisible by i, it's not a prime number
        if (number % i===0) {
            return false; 
        }
    }
    return true; //If no divisor is found, the number is prime
}
if (esPrimo(numberUser)) {
    console.log(numberUser +" is a prime number");
} else {
    console.log(numberUser+" is not a prime number");
}
//6
class Circle{
    constructor(radio) {
        this.radio=radio;
    }
    cArea(){//calculates the area of the circle
        return Math.PI*Math.pow(this.radio, 2);//Math.PI=PI value .pow=(base,exp)returnbaseexp
    }
}

let radioUser=parseFloat(readline.question('Introduce the radio of your circle: '));
let circleUser=new Circle(radioUser);//calls the constructor of the Circle class and sets the radius (this.radio) to the value entered by the user
console.log('Circle area is: '+circleUser.cArea().toFixed(2));//calls the cArea() method on the circleUser object to calculate the area of the circle
                                                             //.toFixed(2) rounds the area to two decimal places for better readability
//7
let calification=parseFloat(readline.question('Introduce your calification: '));//parseFloat=>convert string to float

if(calification>=60){//if the calification is higher than 60 it will print that he is approved, but if it is smallest it will print that he is nos approved
    console.log('You have approved!!!!');
}else{
    console.log('You have reproved ¬¬');
}
//8
class Task {//reate a class
    constructor(name) {//constructor 
        this.name = name;
        this.complete = false;
    }
    markComplete() {//method that mark the task as complete
        this.isComplete = true;
    }
    show() {//method that show all tasks
        return `${this.name} - ${this.complete ? 'Complete' : 'Pending'}`;//ternary operator, it will return 'complete' or 'pending', not true or false
    }
}
class TaskManagement {//Class to manage tasks
    constructor() {
        this.tasks = [];//Array to store tasks
    }

    addTask(taskName) {//Method to add new tasks

        const task = new Task(taskName);
        this.tasks.push(task);//add element and return lenght
        console.log('New task added!!');
    }

    completeTask(index) {//Method to mark the task as completed
        if (this.tasks[index]) {
            this.tasks[index].markComplete();
            console.log('Task completed!!');
        } else {
            console.log('That task does not exist.');
        }
    }

    showPending() {//Method to show all the pending task(not completed)
        console.log('Pending Tasks: \n');
        let yesPending = false;
        this.tasks.forEach((task, index) => {//forEach=execute for each task
            if (!task.isComplete) {//if task is not complete it is pending so it will print it
                console.log(`${index + 1}.${task.show()}`);//.show=print task
                yesPending = true;
            }
        });
        if (!yesPending) {
            console.log('All the tasks are completed.')
        }
    }
    showCompleted() {//mETHOD TO SHOW ALL COMPLETED TASKS
        console.log('Completed Tasks: \n');
        let yesCompleted = false;
        this.tasks.forEach((task, index) => {
            if (task.isComplete) {
                console.log(`${index + 1}.${task.show()}`);
                yesCompleted = true;
            }

        });
        if (!yesCompleted) {
            console.log('All the tasks are PENDING.');
        }
    }
}

function showMenu(){//Function to show the menu to the user
    console.log('\n Task Management Menu');
    console.log('1. Add a new task');
    console.log('2. Complete a task');
    console.log('3. Show all the pending task');
    console.log('4. Show all the completed task');
    console.log('5. Exit');
}
const tasksManagement=new TaskManagement();//create an instance for TaskManagement
let key=0;
while (key!==5) {
    showMenu();
    key=parseInt(readline.question('Select an option: '));
    switch (key) {
        case 1:
            const taskName=readline.question('Introduce new task name: ');
            tasksManagement.addTask(taskName);
            break;
         case 2:
            tasksManagement.showPending();
            const index=parseInt(readline.question('Introduce the index number of the task that you want to mark as completed: '))-1;
            tasksManagement.completeTask(index);
            break;
        case 3:
            tasksManagement.showPending();
            break;
        case 4:
            tasksManagement.showCompleted();
            break;
        case 5:
            console.log('Bye...');
            break;
    
        default:
            console.log('Select an option between 1 and 5.')
            break;
    }
}
//Desafío

//1

function generarPassword(long) {//This function generates the new password
    const caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password='';
    for (let i=0;i<long;i++) {//it will be as long as the user wants to.
        password+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));//charAt=char at position
                                                                                //Math.floor=inferior round
                                                                                //Math.random=Generates a random caracter
    }
    return password;//return the new password
}

const long = parseInt(readline.question('Enter the password length: '));
console.log(`Your password is: ${generarPassword(long)}`);//call the method and implements the long


//2
function ageCalculator(birthDate) {
    const today = new Date();
    const born = new Date(birthDate);
    let age = today.getFullYear() - born.getFullYear();
    const month = today.getMonth() - born.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
        age--;
    }
    return age;
}

const birthDate = readline.question('Enter your birth date (YYYY-MM-DD): ');
console.log(`Your age is: ${ageCalculator(birthDate)} years`);
//3
//4
//5
//6
//7
function totalShopping() {
    let total = 0;
    let price;
    while (true) {
        price=parseFloat(readline.question('Enter the product price (0 to finnish): '));
        if (price===0) break;// exit
        total+=price;//addition
    }
    if (total>100) {//if total is greater than 100, the discount will be aplicate.
        total *= 0.9; // 10% 
    }
    return total;
}
//8
function calculateAverage(grades){// Function to calculate the average of grades
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}


function main(){// Main function
    const numberOfGrades=readline.questionInt('How many grades do you want to enter? ');
    let grades=[];

    
    for (let i=0;i<numberOfGrades;i++) {// Ask the user for each grade
        let grade;
        do {
            grade=readline.questionFloat(`Enter grade ${i + 1} (0-10): `);
            if (grade<0 || grade>10) {
                console.log('Please enter a valid grade between 0 and 10.');
            }
        } while (grade<0 || grade>10); // Ensure the grade is valid
        grades.push(grade);
    }

   
    const average = calculateAverage(grades); // Calculate and display the average
    console.log(`The average of the grades is: ${average.toFixed(2)}`);

   
    if (average >= 6) { // Determine if passed or failed
        console.log('You passed!');
    } else {
        console.log('You failed.');
    }
}

main();// Run the main function
//9
function numberGenerator(quantity,min,max) {
    let numbers=new Set(); // We use a Set to avoid repetitions

    while (numbers.size<quantity) {
        let aNumber=Math.floor(Math.random()*(max-min+1))+min;
        numbers.add(aNumber); // Set only saves unique values
    }

    return [...numbers]; // Convert Set to an array
                        // The spread operator... takes an iterable object 
                        //(such as a Set, array, or string) and "expands" it into its individual elements.
}

const numbersQuantity=5; 
const numbersGenerated=numberGenerator(numbersQuantity,1,20);

console.log('Random numbers between 1 and 20: ', numbersGenerated);
//10
