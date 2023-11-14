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
        let detalle1 = ""; {
            detalle1 +=  
        `<li>
         <a href= "https://api.themoviedb.org/3/movie/${575264}?api_key=${325b851d442abfa1f66681afca0f296b}" class="detail">
                    <h3>${data.title} </h3>
                    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt= " " class="imgpp"></img>
                    <p>Fecha estreno: ${data.release_date}</p>
                    </a>
            </li>`;
        }
        det.innerHTML = detalle1
        })
        .catch(function(error){
            console.log(error);
        })


        
        