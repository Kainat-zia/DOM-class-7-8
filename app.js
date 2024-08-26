//  image swapping  methods

// function swapImage (){
//     document.getElementById ("swap").src = "images (2).jfif"
// }
// function swapImage (swap,newPic){
//     document.getElementById ("swap").src = newPic

// }
//   .........................................................................verbose approach for image swapping...................................................................................
// function swapLink (swap,newPic){
//    var linked = document.getElementById ("link")
//    linked.href = "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2567840249499366963&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9077146&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"

// }

// appandChild . add in last element

// function myFunction(){
// let node = document.createElement("li");
// let mylist = document.createTextNode("water")
// node.appendChild(mylist);
// document.getElementById("list").appendChild(node)
// }

// removeChild: remove first item 
// function myFunction(){
//     const list = document.getElementById('list')
//     list.removeChild(list.firstElementChild)
// }

// while loop -> for remove all child nodes

// function myFunction(){
//     const list = document.getElementById('list')
//     while (list.hasChildNodes()){
//         list.removeChild(list.firstChild)
//     }
//     list.removeChild(list.firstElementChild)
// }

// objects : it is advance version of array. we have indexes in arrays


// Object properties / keys To change the value of an object's number value, use a simple assignment statement, the same way you'd assign a value to a plain variable.
// let plan1 = {
//     name : ["basic","professional"],
//     price : 3.99,
//     space :  100,
//     transfer: 1000,
//     pages : 10
// }
// plan1.price = 455
// console.log(plan1);

// let plan2 = {
//     name : "professional",
//     price : 5.99,
//     space :  500,
//     transfer: 5000,
//     pages : 50
// }
// console.log(plan2);

// delete plan1.price;
// console.log(plan1);
// // alert("The cost of the " + plan2.name + " package is $" + plan2.price + " per month.")





// const person = {

// }
// person.name = 'john';
// person.age = 50;
// // person.email = "johngmail"
// document.getElementById("demo").innerHTML = person.name + "  is  " + person.age + "  year old"

// classes in javascript: class is a template or blueprint for creating object. it has some state(variable) and some behavior(function)
class ToyotaCar {
      start(){
        console.log("start");
      }
      stop(){
        console.log("stop");
      }
}
console.log(ToyotaCar);

//  when we jump from class to object so, create an object
let fortuner = new ToyotaCar()
let lexus = new ToyotaCar()
