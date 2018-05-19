import apiKey from './key'

const realm = 'Sargeras'
const characterName = 'TAMPWNZ'
const locale = 'en_US'

export const fetchPets = () => {
  fetch('https://us.api.battle.net/wow/character/' + realm + '/' + characterName + '?fields=pets&locale=' + locale + '&apikey=' + apiKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

