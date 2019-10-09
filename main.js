var newItemCounter = 1;
var ourList = document.querySelector("#our_list");

var our_Button = document.getElementById("our_button");
var our_headline = document.getElementById("our_headline");
var listItems = document.querySelectorAll("#our_list li");
ourList.addEventListener("click", activateItem);

function activateItem(e) {
  if (e.target.nodeName == "LI") {
    our_headline.innerHTML = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}

our_Button.addEventListener("click", createNewItem);

function createNewItem() {
  ourList.innerHTML += "<li>Something New " + newItemCounter + "</li>";
  newItemCounter++;
}
