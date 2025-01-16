export function showProfile({ customer }) {
  const profile = document.createElement('section')
  profile.id = 'profile'
  profile.classList.add('shape')

  // Foto de perfil.
  const profileImage = document.createElement('div')
  profileImage.classList.add('profile-image-wrapper')
  const img = document.createElement('img')
  img.setAttribute('src', './src/assets/profile-example.png');
  img.setAttribute('alt', 'foto de perfil');

  profileImage.append(img)

  // Nome.
  const clienteInfo = document.createElement('div');
  const name = document.createElement('h1');
  const clientSince = document.createElement('h2');

  name.textContent = customer.name
  clientSince.textContent = `Cliente desde ${customer.clientSince}`

  clienteInfo.append(name, clientSince)

  profile.append(profileImage, clienteInfo)

  return profile;
}