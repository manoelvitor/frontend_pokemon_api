
//GET ELEMENTOS
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function getElementos(){
    let data = fazGet("https://api-pokemon-fatec.herokuapp.com/elementos")
    let usuarios = JSON.parse(data)
    console.log(usuarios)
    criaLinha(usuarios)
}

// GET ELEMENTOS
function criaLinha(requisicao){
    let tabela = document.getElementById("tabela")
    for(let i = 0; i < requisicao.length; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = requisicao[i].nomeElemento
        tr.appendChild(td)
        tabela.appendChild(tr)
    }
}




//getElementos()

//FIM GET ELEMENTOS

//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------

//GET POKEMONS


function criaLinhaPok(requisicao){  
    let tabela = document.getElementById("tabelaPokemon")
    for(let i = 0; i < requisicao.length; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src",requisicao[i].imagem)
        img.setAttribute("width","150px")
        td2.appendChild(img)
        td.innerHTML = requisicao[i].nome
        td1.innerHTML = requisicao[i].elemento.nomeElemento
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tabela.appendChild(tr)
    }
}

function getPokemons(){
    let data = fazGet("https://api-pokemon-fatec.herokuapp.com/pokemons")
    let usuarios = JSON.parse(data)
    console.log(usuarios)
    criaLinhaPok(usuarios)
}
getPokemons()




//FIM GET POKEMONS
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------





