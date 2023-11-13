let string=location.search
let data=new URLSearchParams(string);
let ID = data.get("id")



let urlDetalle= `https://api.themoviedb.org/3/movie/${ID}?api_key=325b851d442abfa1f66681afca0f296b`

fetch (urlDetalle)  
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        }
    )
        .catch(function(error){
            console.log(error);
        })
    

    
