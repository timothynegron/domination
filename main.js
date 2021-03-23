// ┌───────┐
// │   1   │	
// └───────┘
lineThroughFirstLi();
setImages("#image-1" , "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80")
setImages("#image-2", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")
setImages("#image-3", "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=881&q=80")
removeLastUlLi();
removeLastUlLi();
changeTextSize("#heading", "40pt")

function lineThroughFirstLi() {
    document.querySelector("li").style.textDecoration = "line-through";
}

function setImages(elementId, url) {
    document.querySelector(elementId).src = url;
    document.querySelector(elementId).style.width = "250px";
}

function removeLastUlLi() {
    document.querySelector("ul").lastElementChild.remove();
}

function changeTextSize(elementId, fontSize) {
    document.querySelector(elementId).style.fontSize = fontSize;
}

// ┌───────┐
// │   2   │	
// └───────┘
const newImageElement = document.createElement("img");
newImageElement.src = "https://images.unsplash.com/photo-1616440537338-1d04df3987f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80";
//newImageElement.style.width = "250px"
appendElement(newImageElement);
makeImageHeight30Pixels(newImageElement);
//console.log(document.querySelectorAll("img")[document.querySelectorAll("img").length - 1]);
makeInvisible(document.querySelector("h1"));

function appendElement(domElement) {
    document.querySelector("ul").appendChild(domElement);
}

function makeImageHeight30Pixels(image) {
    image.style.height = "30px";
}

function makeInvisible(element) {
    element.style.visibility = "hidden";
}

// ┌───────┐
// │   3   │	
// └───────┘
appendElement(makeNewLi("Hello World"));
appendElement(makeNewHeader('3', "I have 1 dog."));

function makeNewLi(text){
    const newLi = document.createElement("li");
    newLi.innerText = text;
    return newLi;
}

function makeNewHeader(headerSize, text){
    const newHeader =  document.createElement("h" + headerSize);
    newHeader.innerText = text;
    return newHeader;
}