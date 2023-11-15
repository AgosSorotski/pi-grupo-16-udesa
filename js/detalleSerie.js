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
                        Calificacion: ${datavote_average} minutos
                        <br>
                        <br>
                        Duracion : ${data.runtime}
                        <br>
                        <br>
                        Sinópsis: ${data.overview}
                        <br>
                        <br>
                        <a href="./genero.html" class="colortitulo"> Género: </a> <a href="./detalleGenero.html" class="colortitulo">${data.genres[0].name}, ${data.genres[1].name} </a>
                        <br>
                        <br>
                        <a href="./favoritos.html"> <button class="fav">Agregar a Favoritos</button> </a>
                        <br>
                        <br>
                        <button class="fav">Ver recomendaciones</button> 

                        </p> 
                    `;
        
        det.innerHTML = detalle
        })
        .catch(function(error){
            console.log(error);
        })