function createCard(data, place) {
  const elem = document.createElement("div");
  elem.classList.add("season-items");
  elem.innerHTML = `
       <div class="product">  
         <div class="product-bg">
            <img class="product-img" src="${data.img}">
         </div>
         <p class="product-title">${data.brand} ${data.model}</p>
         <p class="product-price">${data.price} руб.</p>  
       </div>`;
  place.insertAdjacentElement("beforeEnd", elem);
}

export default createCard;
