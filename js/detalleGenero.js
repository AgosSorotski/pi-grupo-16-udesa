let string=location.search
let data=new URLSearchParams(string);
let ID = data.get("id")

let urlGenero=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${ID}&api_key=325b851d442abfa1f66681afca0f296b`

fetch (urlGenero)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let pp =document.querySelector(".pp")
        let detgeneros= []
        for (let i = 0; i < data.results.length; i++) {
            detgeneros +=                                
            `
            <article class="borde">
            <li><a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculasp" >
            <section> <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="imgpp">
            <h3 class="nombreye" >${data.results[i].title}</h3>
            <p class="nombreye"> Fecha estreno: ${data.results[i].release_date}</p>
            </section> 
            </article>`;
        
        }
        pp.innerHTML=detgeneros
        })
        .catch(function(error){
            console.log(error);
        })