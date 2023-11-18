let string=location.search;
let data=new URLSearchParams(string);
let ID = data.get("id");

let urlDetalle= `https://api.themoviedb.org/3/movie/${ID}?api_key=325b851d442abfa1f66681afca0f296b`
let endpoint= `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=325b851d442abfa1f66681afca0f296b`


       
let estreno = document.querySelector(".estreno");
let duracion = document.querySelector(".duracion");
let calificacion = document.querySelector(".calificacion");
let sinopsis = document.querySelector(".sinopsis");
let generos = document.querySelector(".generos_");
let imagen = document.querySelector(".imgpp");
let titulo = document.querySelector(".titulodetalle");
let link = document.querySelector(".link");

fetch (urlDetalle)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        imagen.src= `https://image.tmdb.org/t/p/w500/${data.poster_path} `;
        titulo.innerText= " " + data.title ;
        calificacion.innerText = "Calificacion: " + data.vote_average;
        duracion.innerText = "Duracion: " + data.runtime + " minutos"
        estreno.innerText = "Fecha de estreno: " + data.release_date;
        sinopsis.innerText = "Sinopsis: " + data.overview;    
        let generoBoton = document.createElement("boton");
        generoBoton.textContent = data.genres[0].name;
        generoBoton.classList.add("botonClass"); 
        generoBoton.addEventListener("click", function () {
            let genreID = data.genres[0].id;
            window.location.href = `./detalleGenero.html?id=${genreID}`;
        });
        generos.innerHTML = "Género: ";
        generos.appendChild(generoBoton);      ;

       
        })
        

    .catch(function(error){
        console.log(error);
    }) 

    .catch(function(error){
        console.log(error);
    })
       
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
            `<div class="detalle"> 
            <iframe class="videodetalle" src="${videoURL}"> </iframe> </div>`
        
        video.innerHTML= trailer

        }

    })

        .catch(function(error){
            console.log(error);
        })