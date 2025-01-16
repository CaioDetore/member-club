export function showCard({ customer }) {
  const loyalityCard = document.createElement("section");
  loyalityCard.id = "loyality-card";

  const { totalCuts, cutsNeeded, cutsRemaining } = customer.loyaltyCard;

  // Cartão
  const card = document.createElement("div");
  card.classList.add("card", "shape");

  const header = document.createElement("div");
  header.classList.add("header");

  const headerInfo = document.createElement("div");
  const title = document.createElement("h1");
  const subtitle = document.createElement("h2");

  title.textContent = "CARTÃO FIDELIDADE";
  subtitle.textContent = "Ao fazer cortes de cabelo, o décimo sai de graça!";

  const cardId = document.createElement("div");
  cardId.classList.add("card-id");
  cardId.textContent = `ID: ${customer.id}`;

  headerInfo.append(title, subtitle);
  header.append(headerInfo, cardId);

  // Renderizando as marcas de cortes realizados e em falta.
  const badges = document.createElement("div");
  badges.classList.add("badges-wrapper");

  for (let i = 1; i <= cutsNeeded; i++) {
    const item = document.createElement("div");
    item.classList.add("badge");

    if (totalCuts >= i) {
      const img = document.createElement("img");
      img.setAttribute("src", "./src/assets/PinCheck.png");
      img.setAttribute("alt", "checado");
      item.append(img);
    }

    if (i === cutsNeeded) {
      const img = document.createElement("img");
      img.setAttribute("src", "./src/assets/icons/gift.svg");
      img.setAttribute("alt", "presente final");
      img.classList.add("final-gift")
      item.append(img);
    }

    badges.append(item);
  }

  card.append(header, badges);

  // Progresso

  loyalityCard.append(card);

  return loyalityCard;
}
