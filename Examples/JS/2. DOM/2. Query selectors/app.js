document.getElementById("heading1").style.backgroundColor = "lightblue";
document.getElementById("heading1").innerHTML = "<h2>Welcome to the DOM Tree example!</h2>";

const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
    item.style.backgroundColor = "yellow";
});

const specialListItems = document.querySelectorAll("li.special");
specialListItems.forEach(item => {
    item.style.fontSize = "46px";
});


const getElementByClassName = document.getElementsByClassName("class-selector");
for(const element of getElementByClassName) {
    element.style.color = "red";
}