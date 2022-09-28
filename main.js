let elList = document.querySelector('.list')

pokemons.forEach(function(poke){

    newItem = document.createElement('li');
    // newItem.textContent = poke.name 
    elList.appendChild(newItem)

    pokeId = document.createElement('span')
    pokeId.textContent = poke.num
    newItem.appendChild(pokeId)

    pokeTitle = document.createElement('h2')
    pokeTitle.textContent = poke.name
    newItem.appendChild(pokeTitle)

    pokeImg = document.createElement('img')
    pokeImg.src = poke.img
    newItem.appendChild(pokeImg)

    pokeName = document.createElement('p')
    pokeName.textContent = poke.candy
    newItem.appendChild(pokeName)

    pokeTime = document.createElement('strong')
    pokeTime.textContent = poke.spawn_time
    newItem.appendChild(pokeTime)
})




