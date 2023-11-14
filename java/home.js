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
            peliculas+= `<a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculasp">
                <h3>${data.results[i].title}</h3>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="imgpp">
                <p> Fecha estreno: ${data.results[i].release_date}
            </a>`;
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
            mpeliculas+= `<a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculaslist">
                <h3>${data.results[i].title}</h3>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="fotopeli"/>
                <p> Fecha estreno: ${data.results[i].release_date}
            </a>`;
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
            lpeliculas+= `<a href="./detallePelicula.html?id=${data.results[i].id}" class="peliculaslist">
                <h3>${data.results[i].title}</h3>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="fotopeli"/>
                <p> Fecha estreno: ${data.results[i].release_date}
            </a>`;
        }
        lqvpelis.innerHTML=lpeliculas
    })
    .catch(function(error){
        console.log(error);
    })
    
    