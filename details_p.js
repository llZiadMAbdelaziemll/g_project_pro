const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");
fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((data) => {
    const imggeting = document.getElementById("containerID");
    imggeting.innerHTML = `<img class="p_img" src="${data.images[0]}" alt="">
      <div class="p_det">
          
          <p class="new">New!</p>
          <h1 class="h1_1">${data.title}</h1>
          <h1 class="h1_2">${data.price}$</h1>
          <p class="p1">Brand: H & M</p>
          <br>
          <p class="p2">${data.description}</p>
          <br>
          <p class="p3">Stock & Availability: ${data.stock}</p>
          <br>
          <br>
          <div class="size_s">
              <p class="size">Size</p>
              <ul>
                  <li><a href="#">XS</a></li>
                  <li><a href="#">X</a></li>
                  <li><a href="#">M</a></li>
                  <li><a href="#">L</a></li>
              </ul>
  
      </div>
  
          <br>
          <br>
          <button>add to card</button>
         
          
      </div>`;
  })
  .catch((error) => {
    console.error("Error fetching phone products:", error);
  });
