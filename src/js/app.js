const container = document.querySelector(".container")
async function getproducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return-data;
  renderInUi(data, container);
}
getproducts();
function renderInUi(list, container) {
  container.innerHTML = " ";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
        <img
        src="${product.image}"
        alt=""
        class="w-2.4"
        />
        <h3>${product.title}</h3>
        <a
        href=""
        class=""
        ></a>
        <span>${product.price}$</span>`;
    container.appendChild(div);
  });
}
