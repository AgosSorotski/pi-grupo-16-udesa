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
                let resultados = document.querySelector(".resultsbusqueda");
                let busqul = [];
                for (let i = 0; i < datos.results.length; i++) {
                        busqul += `
                                <li class = "imgpp">
                                    <a href="./detallePelicula.html?id=${datos.results[i].id}" class = "peliculasp"> <h2> ${datos.results[i].title}</h2> 
                                    <section class="borde"> <img src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}" alt= " " class="imgpp">
                                    </a>
                                    </section>
                                    
                                </li>`;
      

                }
                resultados.innerHTML = busqul
                let term = document.querySelector(".termino")
                term.innerHTML += Busqueda + " (" + searchcriteria + ")";
                term.style.color = "green";
        
                
            }

        })
        .catch(function (error) {
            console.log(error);
        })
    }