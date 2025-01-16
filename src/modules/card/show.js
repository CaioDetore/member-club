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
      img.classList.add("final-gift");
      item.append(img);
    }

    badges.append(item);
  }

  card.append(header, badges);

  // Progresso
  const progress = document.createElement("div");
  progress.classList.add("progress", "shape");
  const progressInfo = document.createElement("div");
  const remaining = document.createElement("h1");

  let cutsText = "cortes restantes";
  if (cutsRemaining === 1) {
    cutsText = "corte restante";
  }

  remaining.innerHTML = `<span>${cutsRemaining}</span> ${cutsText}`;
  progressInfo.append(remaining);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  const barBg = document.createElement("div");
  barBg.classList.add("bar-bg");
  const bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.width = "70%";

  barBg.append(bar);
  progressBar.append(barBg);
  progressInfo.append(progressBar);

  progress.append(progressInfo);

  loyalityCard.append(card, progress);

  return loyalityCard;
}
