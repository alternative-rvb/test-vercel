const url = "https://api.pokemontcg.io/v2/cards?pageSize=10";
fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
        "X-Api-Key": "29a52eaa-8d77-4cf5-8e1c-d2421f8c08c0",
    },
})
    .then((resp) => resp.json())
    .then(function (pokemon) {
        console.log("pokemon => ", pokemon);

        const art = document.querySelector("article");
        pokemon.data.map(pokemon => (
             art.innerHTML +=`
             <h2>${pokemon.name}</h2>
            <img src="${pokemon.images.small}" alt="Lorem">`
             ))
    })
    .catch(function (error) {
        console.log(error);
    });
