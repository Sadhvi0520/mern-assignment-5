// Q.1 Write a function that returns a closure which adds a specific number to its argument.
function createAdder(numberToAdd) {              //creating a function
    return function (inputNumber) {              //function return another function 'inputNumber' as parameter
        return inputNumber + numberToAdd;        //the inner function will the sum
    };
}
const addFive = createAdder(5);     //call createAdder with 5
console.log(addFive(10));           //call addFive with 10


// Q.2 Create a function using closure to keep track of how many times it has been called.
let counter = 0;          //initializing the counter with zero
function myFunction() {   //writing the function name with myFunction
    counter++;            //incrementing the counter
}
myFunction();     //calling the function
myFunction();     //calling the function
myFunction();     //calling the function
console.log("Function called:", counter, "times");   //printing the output


// Q.3 Implement a prototype method to calculate the area of a rectangle object.
function Rectangle(width, height) {     //defining the function that takes width and height as parameter
    this.width = width;                 //assign the 'width' parameter to the 'width' property of the instance
    this.height = height;               //assign the 'height' parameter to the 'height' property of the instance
}

Rectangle.prototype.area = function() {        //this will calculate the area of rectangle
    return this.width * this.height;           //return the product
};

const rect = new Rectangle(9, 5);           //create a new instance of 'Rectangle'
console.log("Area of the rectangle:", rect.area());   //display the area of rectangle


// Q.4 Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
function Circle(r) {           //defining a function Circle that takes r as parameter
    this.r = r;                //assign the 'r' parameter to the 'r' property of the instance
}
Circle.prototype.perimeter = function() {      //add a method 'perimeter' to the prototype of 'Circle'
    return `the perimeter of circle is ${2*3.14*this.r*this.r}`;    //return a string with the calculated perimeter
};
Circle.prototype.area = function() {           //add a method 'perimeter' to the prototype of 'Circle'
    return  `the area of circle is ${3.14*this.r*this.r}`;   //return the string with calculated area
};
const a= new Circle(4);       //creating a new instance of Circle 
console.log(a.perimeter());   //displaying the perimeter
const b = new Circle(2);      //creating a new instance of Circle 
console.log(b.area());        //displaying the area


// Q.5 Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.
function CreateCounter() {      //writing a function
    let count = 10;             //initializing the cout to 10
    return {                    //returning...
        increment: function() { //incrementing the function
            count++;            //incrementing
            return count;       //returning the count
        },
        decrement: function() {   //decrementing the function
            count--;              //decrementing
            return count;         //returning the count
        },
        reset:function(){         //reset the function
            count=0;              //reseting the count to 0
            return count;         //returning the count
        },
        getCount: function(){     //getCount function
            return count;         //returning the count
        },
}};
const counter1=CreateCounter();    //declaring a variable
console.log(counter1.increment()); //calling and displaying the output
console.log(counter1.decrement()); //calling and displaying the output
console.log(counter1.reset());     //calling and displaying the output
console.log(counter1.getCount());  //calling and displaying the output