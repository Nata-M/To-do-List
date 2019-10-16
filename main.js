// Add button function
function newList () {
    let n = document.createElement("li");
    let inpValue = document.getElementById("newInput").value;
    let t = document.createTextNode(inpValue);
    n.appendChild(t);
    document.getElementById("newUl").appendChild(n);
    document.getElementById("newInput").value = "";

    let span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    n.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


// Add close button 
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i=0; i < myNodelist.length; i++) {
let span = document.createElement("span");
let txt = document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

// click on close button
let close = document.getElementsByClassName("close");
let b;
for (b=0; b < close.length; b++) {
    close[b].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//background color and strike out text
let check = document.querySelector("ul");
check.addEventListener('click', function(h) {
    if (h.target.tagName === 'LI') {
        h.target.classList.toggle('checked');
    }
 }, false);

// let done = document.getElementsByTagName("li");
// let m;
// for (m=0; m < done.length; m++) {
//     done[m].onclick = function () {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }
