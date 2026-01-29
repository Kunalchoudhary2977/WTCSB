// (function show(){
//     console.log("welcome to CsB")
// })();
// //immediately invoked function expression (IIFE)
// (()=>{
//     console.log("Welcome to csb ");
// })()
function person(){
    this.age=20;
    setTimeout(function(){console.log(this.age)},1000)
}
new person();


// function person(){
//     this.age=20;
//     setTimeout(() => {console.log(this.age)},1000)
// }
// new person();