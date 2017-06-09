var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(e){
    if(this.readyState === 4 ){
        if(this.status == 200){
            var response = (JSON.parse(this.response));
            var pokemones = response.results;
            crearPokemones(pokemones);
        }
    }
};

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");
xhr.send();

function crearPokemones(pokemones){
    var ul = document.getElementById("pokemones");
    pokemones.forEach(function(pokemon){
        var li = document.createElement("li");
        li.textContent = pokemon.name;
        ul.appendChild(li);
    });
};