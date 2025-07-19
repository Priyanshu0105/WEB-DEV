


const mySym =  Symbol("key1")
const JsUser = {
    name: "priyanshu" ,
    age: 21,
    location: "delhi" ,
    email: "priyanshu41619@gmail.com" ,
    [mySym]:"mykey1"

}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// JsUser.age = 22

// Object.freeze(JsUser);


// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello user ${this.name}`);
}
console.log(JsUser.greeting());


const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "a",
    5: "b",
    6: "c"
}

// const obj3 = Object.assign({},obj1 , obj2);
//                       // destination, sources

const obj3 = {...obj1,...obj2};

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));


const course = {
    coursename: "js",
    price: 9009,
    instructor: "priyanshu"
}

const {instructor: inst} = course;
console.log(inst);