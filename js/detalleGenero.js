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
        let pp=document.querySelector(".pp")
        let detgeneros= " "
        for (let i = 0; i < data.results.length; i++) {
            detgeneros +=  
            ``
            
        }
        pp.innerHTML=detgeneros
        })
        .catch(function(error){
            console.log(error);
        })