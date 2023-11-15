let string=location.search
let data=new URLSearchParams(string);
let ID = data.get("id")

let urlGenero=`https://api.themoviedb.org/3/genre/movie/list?api_key=325b851d442abfa1f66681afca0f296b`

fetch (urlGenero)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let gen=document.querySelector(".generospys")
        let generos= " "
        for (let i = 0; i < data.genres.length; i++) {
            generos +=  
            `<li class="tiposdegen"> <a href="./detalleGenero.html" >
            <h4>${data.genres[i].name}</h4></li> </a> `
    }


    gen.innerHTML=generos
    })
    .catch(function(error){
        console.log(error);
    })