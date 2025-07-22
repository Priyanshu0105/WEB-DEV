const promiseOne = new Promise(function(resolve , reject){
    // do an async task
    // db calls, cryptography , network
    setTimeout(function() {
        console.log('async task is complete');
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "priyanshu" , email: "priyanshu41619@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "priyanshu" , email: "priyanshu41619@gmail.com"})
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    } , 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username)
})
.catch((e) =>{
    console.log(e);
})
.finally(()=>{
    console.log("the promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: " js" , password : "123"})
        }
        else{
            reject('ERROR : JS WENT WRONG')
        }

    } , 1000)
})