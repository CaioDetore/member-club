export function showProgress({ customer }) {
  const { totalCuts, cutsNeeded, cutsRemaining } = customer.loyaltyCard;
  
  const progress = document.createElement("div");
  progress.classList.add("progress", "shape");

  const progressInfo = document.createElement("div");
  const remaining = document.createElement("h1");

  let cutsText = "cortes restantes";
  if (cutsRemaining === 1) {
    cutsText = "corte restante";
  }

  remaining.innerHTML = `<span>${cutsRemaining}</span> ${cutsText}`;

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");

  const barBg = document.createElement("div");
  barBg.classList.add("bar-bg");

  const bar = document.createElement("div");
  bar.classList.add("bar");

  barBg.append(bar);

  const label = document.createElement("span");
  label.textContent = `${totalCuts} de ${cutsNeeded}`;

  progressBar.append(barBg, label);

  const porcent = (totalCuts * 100) / cutsNeeded;
  bar.style.width = porcent + "%";

  progressInfo.append(remaining, progressBar);
  // fim progress info

  // img
  const img = document.createElement("div");
  img.classList.add("img-wrapper")
  img.innerHTML = `
    <div class="img-wrapper">
      <img src="src/assets/PinGift.png" alt="meta presente" />
    </div>
  `;

  progress.append(progressInfo, img);

  return progress
}