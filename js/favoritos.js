let favoritos= "https://api.themoviedb.org/3/account/20677433/favorite&api_key=325b851d442abfa1f66681afca0f296b"
fetch(favoritos)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let fav = document.querySelector(".pp");
        let favoritas = '';
        for (let i = 0; i < data.results.length; i++) {
            favoritas += `
                <a href="./home.html?id=${data.results[i].id}" class="pelisfavs">
                    <h3>${data.results[i].title}</h3>
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" class="fotofavs">
                </a>`;
        }

        fav.innerHTML = favoritas;
    })
    .catch(function(error){
        console.log(error);
    });

        