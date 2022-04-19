
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// 1
// const cardElement = document.createElement('li')
// cardElement.setAttribute('class', 'card')
// document.body.append(cardElement)

// 2
// const ul = document.getElementById('cards');
// const ul = document.getElementsByClassName('cards');
// document.body.append(ul)
// const listItems = ul.getElementsByTagName('li');
// document.body.append(li)    
// // Loop through the NodeList object.
// for (let i = 0; i <= listItems.length - 1; i++) {
//     console.log (listItems[i]);
// }
// lisItems.setAttribute('class','card')

// 3

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
    cardLI.append(cardStatsUl)
    cardStatsUl.setAttribute('class', 'card--text')
    for (let j = 0; j < pokemon.stats.length; j++) {
        pokemonStats = pokemon.stats[j]
        const cardStatsLi = document.createElement('li')
        // cardStatsLi.setAttribute('class',pokemon.stats)
        // cardStatsLi.innerHTML = pokemonStats[2].name + ": " + pokemonStats.base_stat;
        cardStatsUl.append(cardStatsLi)
    }

    // listH2.innerText = 'Bulbasaur'
    // listH2.setAttribute('class','card--title')
    // cardLI.append(listH2)
    // const listImg = document.createElement('img')
    // cardLI.append(listImg)
    // listImg.setAttribute('width', 256)
        // listImg.setAttribute('src', 256)

    
}



