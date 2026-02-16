export function renderInUi(list, container) {
  container.innerHTML = " ";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("box","w-35","bg-background-color","rounded-lg","flex","flex-col","p-2","text-[13px]","justify-center","items-center");
    div.innerHTML = `
    <img
    src="${product.image}"
    alt=""
    class="w-20"
    />
    <hr>
    <h3>${product.title}</h3>
    <hr>
    <span>${product.price}</span>
    `;
    container.appendChild(div);
  });
}
