// Asynchronous programming can be refered to as a form of programming in which a fix pattern is not followed 

// console.log("Phantom Here🥷");

function sayHello() {
    // console.log(`Hello from the Developer's end !!!`);
} 

setTimeout(() => {
   sayHello() 
}, 6000);
 
for (let index = 0; index < 10; index++) {
    // console.log(index);       // this is a form of synchronous programming which means that all the object in the programming follows a pattern .
    
}
// here upon execution we can see a very different kind of sequence which is that the code is not following the sequence in whic it is written rather than it is printing the log first then it is printing the loop and after that it is printing the timeout function .
// this type of behaviour can be infered from the asynchronous nature of the language.

// Question:-

// 001 Asynchronous JavaScript with Event Loop
// Instructions
// Task 1: Simulating Asynchronous Behavior

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

// Use setTimeout to simulate this behaviour.




function  simulateAsyncTask () {
    console.log(`Task Started`);
    setTimeout(() => {
        console.log(`Task Finished`);
    }, 1000);
}


function MultipleTasks() {
    console.log(`Task-2 started`);
    setTimeout(() => {
       console.log(`Task-2 Finished`); 
    }, 2000);


    console.log(`Task-3 started`);
    setTimeout(() => {
       console.log(`Task-3 Finished`); 
    }, 3000);



    console.log(`Task-4 started`);
    setTimeout(() => {
       console.log(`Task-4 Finished`); 
    }, 4000);
}

function datafetch() {
    setTimeout(() => {
        console.log(`Data has been fetched!!!`);
    }, 5000);
}


simulateAsyncTask ()
MultipleTasks()
datafetch()

