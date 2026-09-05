// promise

let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

promise
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
})

function getStudentName(name){
    return new Promise((resolve,reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            if (name) {
                resolve(name);
            } else {
                reject("Invalid student name");
            }
        }, 1000);
    });
}

getStudentName("John Doe")
.then((name) => {
    console.log("Student name:", name);
})
.catch((error) => {
    console.log("Invalid student name");
}  )

getStudentName("")
.then((name) => {
    console.log("Student name:", name);
})
.catch((error) => {
    console.log("Invalid student name");
}  )

