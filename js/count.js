function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}
function foo() {
setTimeout(foo, 10000);
document.getElementById("aantalFans").innerHTML = randomNumber(50, 150);
}
foo();
