"use strict"

let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];

let closeButton = document.getElementById("closeButton");
let submitButton = document.getElementById("submitButton");


function clickMe(){
    if (container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

submitButton.addEventListener("click", showNotes);
let notes = 2;

function showNotes(){
    let title = document.getElementById("title").value;
    let note = document.getElementById("note");

if(!title ){
    alert('fill all boxes');
    return;
}
    let container4 = document.getElementsByClassName("group")[2];
    
}
