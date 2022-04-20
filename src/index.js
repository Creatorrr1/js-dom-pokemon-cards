
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// const cardListUL = document.getElementById('card-list')
const cardListUL = document.querySelector('ul')
for (let i = 0; i < data.length; i++) {
    console.log("Pokemon at i", data[i])
    const pokemon = data[i] // js object of current pokemon
    console.log(pokemon)

    const cardLI =  document.createElement('li')
  // apply a style or a css class
    cardLI.setAttribute('class','card')
    cardListUL.append(cardLI) // at the end of the list

    
  // create more elements and append to cardLI
  // create an h2, apply title style, add name of pokemon to innerHtml
  // create an h2
    const listH2 = document.createElement('h2')
  // set the text to pokemon name
    listH2.innerHTML = pokemon.name
  // add h2 to li
    cardLI.append(listH2)


  // add img
    const cardImg = document.createElement('img')
    cardLI.append(cardImg)
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('width', 256)
    cardImg.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)


  // add stats
    const cardStatsUl = document.createElement('ul')
    cardStatsUl.setAttribute('class', 'card--text')

    for (let j = 0; j < pokemon.stats.length; j++) {
        pokemonStats = pokemon.stats[j]

        const cardStatsLi = document.createElement('li')
        cardStatsUl.append(cardStatsLi)
        
        cardStatsLi.innerHTML = pokemonStats.stat.name + ": " + pokemonStats.base_stat;
        cardLI.append(cardStatsUl)
    }    
}



