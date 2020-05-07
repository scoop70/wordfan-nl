function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}
function foo() {
setTimeout(foo, 18000000);//5uur
document.getElementById("aantalFans").innerHTML = randomNumber(50, 150);
}
foo();
