let string=location.search
let data=new URLSearchParams(string);
let ID = data.get("id")

let urlDetalle= `https://api.themoviedb.org/3/movie/${ID}?api_key=325b851d442abfa1f66681afca0f296b`

fetch (urlDetalle)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let det = document.querySelector(".detalle");
        let detalle = ""; 
            detalle +=  
        `<a href= "./detallePelicula.html?id=${data.id}" >
                    <h3 class="titulodetalle">${data.title} </h3>
                    <section class="borde"> <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt= " " class="imgpp">
                    </section> </a>`;
        
        det.innerHTML = detalle
        })
        .catch(function(error){
            console.log(error);
        })


fetch (urlDetalle)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let det = document.querySelector(".informacion");
        let detalle = ""; 

            detalle +=  
        ` <p class="estreno" >Fecha estreno: ${data.release_date} </p>
                        <br>
                        <br>
                        <p>
                        Calificacion: ${data.vote_average} 
                        <br>
                        <br>
                        Duracion : ${data.runtime} minutos
                        <br>
                        <br>
                        Sinópsis: ${data.overview}
                        <br>
                        <br>
                        Género:  <a href="./detalleGenero.html?id=${data.genres[0].id}" class="colortitulo"> ${data.genres[0].name}, ${data.genres[1].name}  </a>
                        <br>
                        <br>
                        <a href="./favoritos.html"> <button class="fav">Agregar a Favoritos</button> </a>
                        <button class="fav">Ver recomendaciones</button> </a>
                        </p> 
                    `;
        
        det.innerHTML = detalle
        })
        .catch(function(error){
            console.log(error);
        })