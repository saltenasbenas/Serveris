let currentDog;
let currentLabrador;
let currentCollection;

const UI = {
    newDogButton: document.querySelector(".newDogButton"),
    newCollectionButton: document.querySelector(".newCollectionButton"),
    newLabradorButton: document.querySelector(".newLabradorButton"),
    dogImage: document.querySelector(".dogImage"),
    dogCollection: document.querySelector(".dogCollection"),
    dogLabrador: document.querySelector(".dogLabrador"),
};

UI.newDogButton.addEventListener("click", () => {
    fetchDog();
});
UI.newCollectionButton.addEventListener("click", () => {
    fetchCollection();
});
UI.newLabradorButton.addEventListener("click", () => {
    fetchLabrador();
});



function fetchDog () {fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    console.log("Atsakymas gautas is serverio", response);
    
    response.json().then((data) => {
    //    console.log("Suo gautas ir paverstas i JSON", data);
       currentDog = data;
       console.log(currentDog);
       renderDog();
       

    });
});
}

function fetchLabrador () {fetch("https://dog.ceo/api/breed/Labrador/images/random").then((response) => {
    console.log("Atsakymas gautas is serverio", response);
    
    response.json().then((data) => {
    //    console.log("Suo gautas ir paverstas i JSON", data);
       currentLabrador = data;
       console.log(currentLabrador);
       renderLabrador();
       

    });
});
}

function fetchCollection () {fetch("https://dog.ceo/api/breed/hound/images/random/3").then((response) => {
    console.log("Atsakymas gautas is serverio", response);
    
    response.json().then((data) => {
    //    console.log("Suo gautas ir paverstas i JSON", data);
       currentCollection = data;
       console.log(currentCollection);
       renderCollection();
       

    });
});
}

function renderDog () {
    UI.dogImage.src= currentDog.message;
};
function renderCollection () {
    UI.dogCollection.src= currentCollection.message;
};
function renderLabrador () {
    UI.dogLabrador.src= currentLabrador.message;
};