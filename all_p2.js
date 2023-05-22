const imggeting = document.querySelector(".cards");
const aurl = "https://dummyjson.com/products";
const genhtml = (images) => {
  for (let item of images) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<a href="details_p3.html?id=${item.id}" class="details_con">
    <div class="card_img">
        <img src="${item.images[0]}" alt="adasadasdas">
    </div>
        <div class="description">
            <div class="first_line">
                <p class="p_name">${item.title}</p>
                <p class="price">${item.price}$</p>
            </div>
            <p class="sec_line">${item.description}</p>
        </div>
        </a>`;

    imggeting.appendChild(card);
  }
};
const getimages = (apiurl) => {
  fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
      genhtml(data.products);
    })
    .catch((error) => {
      console.error("Error fetching phone products:", error);
    });
};

getimages(aurl);


