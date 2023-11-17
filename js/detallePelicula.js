let string=location.search
let data=new URLSearchParams(string);
let ID = data.get("id")

let urlDetalle= `https://api.themoviedb.org/3/movie/${ID}?api_key=325b851d442abfa1f66681afca0f296b`
let endpoint= `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=325b851d442abfa1f66681afca0f296b`

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
                    
                        <p>
                        Calificacion: ${data.vote_average} 
    
                        Duracion : ${data.runtime} minutos
                        Sinópsis: ${data.overview}
                        Género:  <a href="./detalleGenero.html?id=${data.genres[0].id}" class="colortitulo"> ${data.genres[0].name}, ${data.genres[1].name}  </a>
                        <a href="./favoritos.html"> <button class="fav">Agregar a Favoritos</button> </a>
                        <button class="fav">Ver más</button> </a>

                        </p> 
                    `;
        
        det.innerHTML = detalle
    })
    //* PREGUNTAR DE ACA PARA ABAJO *//

       
fetch (endpoint)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let video=document.querySelector(".video")
        if (data.results.length > 0){
            let video1= data.results[0]
            let videoURL= `http://www.youtube.com/embed/${video1.key}`
            let trailer= 
            `<div> <p> Trailer:</p>
            <iframe class="videodetalle" src="${videoURL}"> </iframe> </div>`
        
        video.innerHTML= trailer

        }

        })

        .catch(function(error){
            console.log(error);
        })