export function showHistory({ customer }) {
  const history = document.createElement("section");
  history.id = "history";
  history.classList.add("shape");

  const header = document.createElement("div");
  header.classList.add("header");

  header.innerHTML = `
    <h1>HISTÓRICO</h1>
    <h2>${customer.loyaltyCard.totalCuts} cortes</h2>
  `;

  // Criando lista
  const ul = document.createElement("ul");

  customer.appointmentHistory.forEach(({ date, time }) => {
    const item = document.createElement("li");
    const dateInfo = document.createElement("div");
    dateInfo.classList.add("date-info");

    dateInfo.innerHTML = `
      <h1>${date}</h1>
      <h2>${time}</h2>
    `;

    const check = document.createElement("div");
    check.classList.add("check-wrapper");
    check.innerHTML = `
      <img src="src/assets/icons/check.svg" alt="concluído">
    `;

    item.append(dateInfo, check)
    ul.append(item)
  });

  history.append(header, ul);

  return history;
}
