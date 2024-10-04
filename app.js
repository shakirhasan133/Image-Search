const inputValue = document.getElementById("inputValue");
const searchBtn = document.getElementById("searchBtn");
const imageGallery = document.getElementById("image-gallery");
const apiKey = "wliibZWb0ysuHI8QpxE25qa2ff2UhUcOGj1vr7wloNc";

let keyword = "";
let q = "office";
let page = 1;
const loadImage = async (keyword = "office", page) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}`
  );
  const data = await res.json();

  showImage(data.results);
};

searchBtn.addEventListener("click", loadResource);

function loadResource(counter = 1) {
  const searchInputValue = inputValue.value;
  console.log(counter);

  loadImage(searchInputValue, counter);
}

function showImage(data) {
  imageGallery.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <a href = ${element.links.download} download> <img src=${element.urls.small} /> </a>
        
    `;

    imageGallery.append(div);
  });
}

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("btn-Container");
buttonContainer.innerHTML = `
    <button class= "btn btn-primary" onclick="loadMore()"> See more </button>
  `;
document.getElementById("loadMore").append(buttonContainer);

function loadMore() {
  let p = page++;
  loadResource(p);
}
loadImage(1);
