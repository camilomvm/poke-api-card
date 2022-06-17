let button = document.getElementById("button")



button.addEventListener('click', () => {
    let img = document.getElementById('poke-img')
    let p = document.getElementById('paragraph')
    let box = document.getElementById('box').value
    let id = document.getElementById('id')
    let xhttp = new XMLHttpRequest()

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/3${box}`)
    xhttp.send()


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datoPokemon = JSON.parse(this.responseText)
            console.log(datoPokemon)
            img.setAttribute("src", datoPokemon.sprites.front_default)
            p.textContent = datoPokemon.name
            id.textContent = datoPokemon.id
        }
    }
})