import { cardFetchById } from "../services/card-fetch-by-id";
import { show } from "./show";

const cardId = document.getElementById("card-id");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {
  const id = cardId.value;

  const customer = await cardFetchById({ id });

  if (customer) {
    show({ customer });
  }
});

cardId.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const id = cardId.value;

    const customer = await cardFetchById({ id });

    if (customer) {
      show({ customer });
    }
  }
});
