// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 500 pokemon img (1-500)

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 500; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const pokeImg = document.createElement('img');
    pokeImg.src = `${baseURL}${i}.png`;

    const label = document.createElement('span');
    label.textContent = `#${i}`;

    pokemon.append(pokeImg, label);
    container.appendChild(pokemon);
}

