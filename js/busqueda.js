let string = location.search
let data = new URLSearchParams(string);
let Busqueda = data.get("q")
let endpointBusqueda= `https://api.themoviedb.org/3/search/movie?api_key=325b851d442abfa1f66681afca0f296b&query=${Busqueda}`
console.log(endpointBusqueda);

if (Busqueda === "") {
    alert("Oops!, parece que no escribiste nada.")
} else if (Busqueda.length < 2) {
    alert("Tu busqueda debe contener al menos 2 caracteres")
} else {
    fetch(endpointBusqueda)
        .then(function (response) {
            return response.json();
        
        })
        .then(function (datos) {
            console.log(datos);
            if (datos.results.length == 0) {
                let noresult = document.querySelector(".termino")
                noresult.innerHTML = "No se encontraron coincidencias con el término buscado"
                noresult.style.color = "red"
            
            } else {
                let resultados = document.querySelector(".pp");
                let busqul = [];
                for (let i = 0; i < datos.results.length; i++) {
                        busqul += `
                                <li class = "borde">
                                    <a href="./detallePelicula.html?id=${datos.results[i].id}" class = "peliculasp"> 
                                    <img src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}" alt= " " class="imgpp">
                                    <h2 class="nombreye"> ${datos.results[i].title}</h2> 
                                    <p class="estreno2" >Fecha estreno: ${datos.results[i].release_date} </p>
                                    <p class="estreno2">Calificacion: ${datos.results[i].vote_average}</p>
                                    <p class="estreno2">Sinópsis: ${datos.results[i].overview}</p>
                                    <a href="./favoritos.html"> <button class="fav">Agregar a Favoritos</button> </a>
                                    <button class="fav">Ver recomendaciones</button> </a>
                                    </p> 
                                    </a>
                                    
                                </li>`;
                                
      

                }
                resultados.innerHTML = busqul
                let term = document.querySelector(".blanco")
                term.innerHTML += Busqueda + " " + busqul + " ";
                term.style.color = "white";

                
            }

        })
        .catch(function (error) {
            console.log(error);
        })
    }