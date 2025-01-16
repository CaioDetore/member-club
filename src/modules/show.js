import { showCard } from "./card/show";
import { showProfile } from "./profile/show";

const content = document.getElementById('content');

export function show({ customer }) {
  content.innerHTML = ""
  
  // Renderizando perfil.
  const profile = showProfile({customer})

  // Renderizando cartão e progressão.
  const loyalityCard = showCard({customer})

  content.append(profile, loyalityCard)
}