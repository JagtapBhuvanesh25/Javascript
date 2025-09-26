// singleton => single instance
//Object.create()

// object literals

const mysym = Symbol("#");
// console.log(typeof mysym);
const jsuser = {
    name : "kanha",
    age : 18,
    mysym : "!", // print to see datatype
    email : "kanha18@gmail.com",
    "loc" : "delhi"
}
// console.log(jsuser.mysym);
// console.log(jsuser);
// console.log(typeof jsuser.mysym);
// console.log(jsuser.mysym);
// console.log(jsuser[mysym]);
// console.log(jsuser."email"); // no way of printing

const jsuser1 = {
    name : "kanha",
    age : 18,
    [mysym] : "!",
    email : "kanha18@gmail.com",
    "loc" : "delhi"
}
// console.log(jsuser1);
// console.log(typeof jsuser1.mysym);
// console.log(typeof jsuser1[mysym]);
// console.log(jsuser1.mysym);
// console.log(jsuser1[mysym]);
// console.log(jsuser1."email"); // no way of printing

// Object.freeze(jsuser);
// jsuser.name = "bhuvanesh";
// console.log(jsuser.name);

jsuser1.greet = function(){
    console.log("hello");
}
jsuser1.greet2 = function(){
    console.log(`hello ${this.name}`);
}

// console.log(jsuser1.greet);
// console.log(jsuser1.greet());
// console.log(jsuser1.greet2);
// console.log(jsuser1.greet2());

// const tinderUser = new Object () // singleton => no internal diff , only creates a single object
// const tinderUser = {} 
// tinderUser. id = "123abc"
// tinderUser. name = "Sammy"
// tinderUser. isLoggedIn = false
// console. log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bhuvi",
            lastname : "jaggu"
        }
    }
}

// console. log(regularUser.fullname.userfullname.firstname);
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
// const obj3 = { obj1, obj2 }
// console. log(obj3);
// const obj3 = Object.assign(obj1, obj2);
// console. log(obj3);
// const obj4 = Object.assign({} , obj1, obj2); // at least empty obj returned
// console. log(obj4);
const obj3 = { ...obj1, ...obj2 }
console. log(obj3);

const tinderUser = {} 
tinderUser. id = "123abc"
tinderUser. name = "Sammy"
tinderUser. isLoggedIn = false

console. log (Object.keys(tinderUser));
console. log (Object.values (tinderUser)) ;
console. log(Object.entries (tinderUser)) ;
console. log(tinderUser.hasOwnProperty ('isLoggedIn' ));
console. log(tinderUser.hasOwnProperty ('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }