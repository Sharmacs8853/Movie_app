// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// //https://www.omdbapi.com/?s=radhe&apikey=f3e93054
let moviesDiv = document.getElementById("movies");
let id;
async function serchMovies() {
    try {
        const query = document.getElementById("search").value;
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=f3e93054`)
        let data = await res.json();
        let movies = data.Search;
        //console.log('data:', movies);
        //appendMovies(movies)
        return movies;
    } catch(err){
        console.log('err:',err);
    }
}
 function appendMovies(movies_data){
    moviesDiv.innerHTML = null;
    movies_data.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let img_div = document.createElement("div");
        img.src = element.Poster;
        img_div.append(img);
        let title = document.createElement("h3");
        title.innerText = element.Title;
        let year = document.createElement("p");
        year.innerText = element.Year;
        let bookBtn = document.createElement("button");
        bookBtn.innerText = "Book Now";
        bookBtn.addEventListener("click",() => {
            BookedMovieFunction(element);
        })
        bookBtn.setAttribute("class","book_now");
        div.append(img_div,title,year,bookBtn);
        moviesDiv.append(div);
    });
}
async function main(){
    let movies_data = await serchMovies();
    if (movies_data === undefined){
        return false;
    }
    appendMovies(movies_data);
}
// debouncing here
function debounce(func,time){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, time)
}

function BookedMovieFunction(bookedEle){
    //console.log(bookedEle);
    localStorage.setItem("movie",JSON.stringify(bookedEle));
    window.location.href = "checkout.html";
}