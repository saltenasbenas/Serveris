let currentDog;

const UI = {
    newDogButton: document.querySelector(".newDogButton"),
    dogImage: document.querySelector(".dogImage"),
 
};

UI.newDogButton.addEventListener("click", () => {
    fetchDog();
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


function renderDog () {
    UI.dogImage.src= currentDog;
};
