let gridContainerEl = document.getElementById("gridContainer");

function createCard(product) {
    let { brand, camera, image, price, storage } = product;
    let cardItem = document.createElement("li");
    cardItem.classList.add("card-details", "bg-white", "d-flex", "flex-column");
    let heartImg = document.createElement("i");
    heartImg.classList.add("fa-regular", "fa-heart", "heart-icon", "align-self-end", "pe-2", "pt-2");

    let mobileImage = document.createElement("img");
    mobileImage.setAttribute("src", image);

    let heading = document.createElement("h3");
    heading.classList.add("mobile-name");
    heading.textContent = brand;

    let priceData = document.createElement("p");
    priceData.classList.add("mobile-details", "para")
    priceData.textContent = `Price: ${price}`;
    let cameraData = document.createElement("p");
    cameraData.classList.add("mobile-details", "para")
    cameraData.textContent = `Camera: ${camera}`;

    let storageData = document.createElement("p");
    storageData.classList.add("mobile-details", "para")
    storageData.textContent = `Storage: ${storage}`;

    let viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View Details";
    viewDetailsButton.classList.add("details-button", "w-100");

    cardItem.append(heartImg, mobileImage, heading, priceData, cameraData, storageData, viewDetailsButton);
    gridContainerEl.appendChild(cardItem);

}

function displayResults(products) {
    for (let product of products) {
        createCard(product);
    }

}

let url = "http://localhost:3000/products";
fetch(url)
    .then(res => res.json())
    .then(data => displayResults(data))
    .catch(err => console.log(err));


let searchEl = document.getElementById("searchInput");

function filterProduct(){
    let searchValue = searchEl.value.toUpperCase();
    console.log(searchValue);
    let item = gridContainerEl.querySelectorAll(".card-details");
    for(let i=0; i< item.length; i++){
        let span = item[i].querySelector(".mobile-name");

        if(span.innerHTML.toUpperCase().indexOf(searchValue)> -1){
            item[i].classList.remove("d-none");
    
        }else{
            item[i].classList.add("d-none");
        }

    }
    
    

}

searchEl.addEventListener("keyup", filterProduct)

