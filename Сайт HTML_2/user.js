"use script"

let UserButtonBack = document.querySelector("#buttonBack")
UserButtonBack.addEventListener('click',Back);

function Back(){
document.location.href = "index.html";
}