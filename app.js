<!--Ejercicio 3
const id = prompt("Ingresa un ID de Pokémon");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log("Nombre:", data.name);
    })
    .catch(err => console.error("Error:", err));


//Ejercicio 4 


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => {
        console.log("Nombre:", data.name);
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    })
    .catch(error => console.error("Error:", error));

//Ejercicio 5 
async function obtenerPikachu() {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await resp.json();

        console.log("Nombre:", data.name);
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);

    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerPikachu();

//Ejercicio 6 

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => response.json())
    .then(data => {
        console.log("Sprite front_default:", data.sprites.front_default);
    })
    .catch(error => console.error("Error:", error));

//Ejercicio 7
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            console.log(pokemon.name);
        });
    })
    .catch(error => console.error("Error:", error));

//Ejercicio 8

const idAleatorio = Math.floor(Math.random() * 898) + 1;
console.log("ID generado:", idAleatorio);

fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`)
    .then(response => response.json())
    .then(data => {
        console.log("Pokémon encontrado:");
        console.log("ID:", data.id);
        console.log("Nombre:", data.name);
    })
    .catch(error => console.error("Error:", error));

//Ejercicio 9 

document.getElementById("btnBuscar").addEventListener("click", () => {
    const id = document.getElementById("pokemonId").value.trim();
    const resultado = document.getElementById("resultado");

    if (id === "") {
        resultado.innerHTML = "<p>Ingresa un ID.</p>";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return res.json();
        })
        .then(data => {
            const habilidades = data.abilities
                .map(obj => obj.ability.name)
                .join(", ");

            resultado.innerHTML = `
                <h2>${data.name} (ID: ${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Peso:</strong> ${data.weight}</p>
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
            `;
        })
        .catch(error => {
            resultado.innerHTML = `<p>${error.message}</p>`;
        });
});
-->
//Ejercicio 10 

window.onload = () => {
    const contenedor = document.getElementById("contenedor");
    const listaPokemones = [];
 
    function mostrarTarjetas() {
        contenedor.innerHTML = "";

        listaPokemones.forEach(poke => {
            contenedor.innerHTML += `
                <div class="tarjeta">
                    <h3>${poke.name}</h3>
                    <img src="${poke.sprites.front_default}" alt="${poke.name}">
                    <p>ID: ${poke.id}</p>
                </div>
            `;
        });
    }
 
    for (let i = 1; i <= 10; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                listaPokemones.push(data);  
                if (listaPokemones.length === 10) {
                    mostrarTarjetas();  
                }
            })
            .catch(err => console.error("Error:", err));
    }
};












