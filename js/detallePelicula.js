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
        let det = document.querySelector(".detalles");
        let detalle = ""; 
            detalle +=  
        `<li>
         <a href= "./detallePelicula.html?id=${data.id}" class="detail">
                    <h3>${data.title} </h3>
                    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt= " " class="imgpp"></img>
                    <p class="estreno">Fecha estreno: ${data.release_date} </p>
                    </a>
            </li>`;
        
        det.innerHTML = detalle
        })
        .catch(function(error){
            console.log(error);
        })


