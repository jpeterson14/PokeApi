/* You get this for free: */
function parseResponse(response) {
  return response.json()
}

/* Instructions:

1. Make a fetch request to this URL: https://pokeapi.co/api/v2/pokemon/bulbasaur (note that you can change the character at the end)
2. Remember to add `.then(parseResponse)` after the fetch
3. Add a `.then(showPokemon)` after that
4. Write a function called `showPokemon` that accepts `pokemonData` as an input
5. Look up the image element (hint: You can access it with "#pokemon-image" selector) and store it in a variable
6. Set the image element's `.src` property to the `pokemonData` object's `.sprites.front_default` attribute
7. Look up the name element (hint: You can access it with the "#pokemon-name" selector) and store it in a variable
8. Set the image element's `.textContent` property to the `pokemonData` object's `.name` attribute
9. If you do it correctly, you should see a pokemon's name and image on the screen!
*/