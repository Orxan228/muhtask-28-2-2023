const prompt=require("prompt-sync")({sigint:true}); 
let person = [];
let number = [];
let name = [];
let phoneNum = [];
let email = [];

for (let i = 0; i < 2 ;i++) 
{
    number[i] = prompt("Enter person's number: ")
    name[i] = prompt("Enter person's name: ")
    phoneNum[i] = prompt("Enter person's phone number: ")
    email[i] = prompt("Enter person's email: ")
    console.log("---------------------------");
}
//console.log("Info about employees: ");
let z = prompt("Enter persons ID: ");
for (i = 0; i < 2; i++) 
{
    console.log("-----------------");
    console.log(i+"person's ID: "+number[i]);
    console.log(i+"person's name: "+name[i]);
    console.log(i+"person's phone: "+phoneNum[i]);
    console.log(i+"person's email: "+email[i]);
}














// for (let i = 0; i < 10; i++) 
// {   
//     number[i] = prompt("Enter person's number: ")
//     for ( i = 0; i < 10; i++) 
//     {
//         name[i] = prompt("Enter person's name: ")
//         for ( i = 0; i < 10; i++) 
//         {
//             phoneNum[i] = prompt("Enter person's phone number: ")
//             for ( i = 0; i < 10; i++) 
//             {
//                 email[i] = prompt("Enter person's email: ")
//                 console.log("-------------------------------");
//             }
//         }
//     }
// }
