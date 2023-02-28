const prompt=require("prompt-sync")({sigint:true}); 
let n = parseInt(prompt("Enter a number: "));
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = prompt("Enter a name: ");
}
console.log(n);