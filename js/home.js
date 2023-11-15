let urlPeliculas= "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=325b851d442abfa1f66681afca0f296b"

fetch (urlPeliculas)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let pelisp=document.querySelector(".pp")
        let peliculas=[];
        for (let i=0;i<6; i++){
            peliculas+= `<section class="borde"> <a  href="./detallePelicula.html?id=${data.results[i].id}" class="peliculasp" >
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="imgpp">
                <h3 class="nombreye" >${data.results[i].title}</h3>
                <p class="nombreye"> Fecha estreno: ${data.results[i].release_date}</p>
            </a> </section>`;
        }
        pelisp.innerHTML=peliculas
    })
    .catch(function(error){
        console.log(error);
    })

let urlMejPeliculas= "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=325b851d442abfa1f66681afca0f296b"

fetch (urlMejPeliculas)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){
        console.log(data)
        let mpelis=document.querySelector(".mp")
        let mpeliculas=[];
        for (let i=0;i<6; i++){
            mpeliculas+= `<section class="borde"> <a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculasp" >
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="imgpp">
                <h3 class="nombreye">${data.results[i].title}</h3>
                <p class="nombreye"> Fecha estreno: ${data.results[i].release_date}</p>
                </a> </section>`;
            }
        mpelis.innerHTML=mpeliculas
    })
    .catch(function(error){
        console.log(error);
    })

let urlloqv= "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=325b851d442abfa1f66681afca0f296b"

fetch (urlloqv)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let lqvpelis=document.querySelector(".lqv")
        let lpeliculas=[];
        for (let i=0;i<6; i++){
            lpeliculas+= `<section class="borde"> <a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculasp">
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="imgpp"/>
                <h3 class="nombreye">${data.results[i].title}</h3>
                <p class="nombreye"> Fecha estreno: ${data.results[i].release_date}</p>
            </a> </section>`;
        }
        lqvpelis.innerHTML=lpeliculas
    })
    .catch(function(error){
        console.log(error);
    })
    
    