import { showCard } from "./card/show";
import { showHistory } from "./history/show";
import { showProfile } from "./profile/show";

const content = document.getElementById('content');

export function show({ customer }) {
  content.innerHTML = ""
  
  // Renderizando perfil.
  const profile = showProfile({customer})

  // Renderizando cartão e progressão.
  const loyalityCard = showCard({customer})

  // Renderizando histórico.
  const history = showHistory({customer})

  const { totalCuts, cutsNeeded } = customer.loyaltyCard;

  if (totalCuts === cutsNeeded) {
    alert('Parabéns! Seu próximo corte é gratuito!')
  }

  content.append(profile, loyalityCard, history)
}