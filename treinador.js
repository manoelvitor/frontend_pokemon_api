

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

var pokemons1 = document.getElementById("selectPokemon1")
var pokemons2 = document.getElementById("selectPokemon2")
var pokemons3 = document.getElementById("selectPokemon3")
var poke1 = document.getElementById("poke1")
var pokemons;


function optPokemons(requisicao) {  

    for (let i = 0; i < requisicao.length; i++) {
        var opt = document.createElement("option")
        var opt2 = document.createElement("option")
        var opt3 = document.createElement("option")

        opt.setAttribute("value", requisicao[i].id)
        opt2.setAttribute("value", requisicao[i].id)
        opt3.setAttribute("value", requisicao[i].id)

        opt.innerHTML = requisicao[i].nome
        opt2.innerHTML = requisicao[i].nome
        opt3.innerHTML = requisicao[i].nome
        pokemons1.appendChild(opt)
        pokemons2.appendChild(opt2)
        pokemons3.appendChild(opt3)  
    }   
}


pokemons1.addEventListener("change", function(){
    let indice = parseInt(pokemons1.value)
    document.getElementById("img1").setAttribute("src",pokemons[indice-1].imagem)
})

pokemons2.addEventListener("change",function(){
    let indice2 = parseInt(pokemons2.value)
    document.getElementById("img2").setAttribute("src",pokemons[indice2-1].imagem)
})

pokemons3.addEventListener("change",function(){
    let indice3 = parseInt(pokemons3.value)
    document.getElementById("img3").setAttribute("src",pokemons[indice3-1].imagem)
})


function getPokemons() {  
    let data = fazGet("https://api-pokemon-fatec.herokuapp.com/pokemons")
    pokemons = JSON.parse(data)
    console.log(pokemons)
    optPokemons(pokemons)
}
getPokemons()




async function postPokemon() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let pokemon1 = document.getElementById("selectPokemon1").value
    let pokemon2 = document.getElementById("selectPokemon2").value
    let pokemon3 = document.getElementById("selectPokemon3").value

    let data = {
        "nome": nome,
        "idade": idade,
        "pokemons":
        [
            { "id": pokemon1},
            { "id": pokemon2},
            { "id": pokemon3},

        ]
    };
    await fetch('https://api-pokemon-fatec.herokuapp.com/treinadores', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((res) => { return res.json(); })
      .then((data) => { console.log(data) })
      .catch((err) => { console.log(err) })
     
  }


  document.getElementById("enviar").addEventListener("click",postPokemon)

