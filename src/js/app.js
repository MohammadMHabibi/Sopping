import { getproduct } from "./product.js";
import { renderInUi } from "./renderInUi.js";
const container = document.querySelector(".container");

async function iechizi() {
  try {
    const data = await getproduct("https://fakestoreapi.com/products");
    renderInUi(data, container);
  } catch {
    console.error("Ah");
  }
}
iechizi();
