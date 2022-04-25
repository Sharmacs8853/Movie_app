
let wallet = JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText = wallet;
let bookedMovie = JSON.parse(localStorage.getItem("movie"));
console.log(bookedMovie);
let div = document.createElement("div");

let img = document.createElement("img");
    img.src = bookedMovie.Poster;
let title = document.createElement("h3");
    title.innerText = bookedMovie.Title;
let year = document.createElement("p");
    year.innerText = bookedMovie.Year;
    div.append(img,title,year);
    document.getElementById("movie").append(div);

document.querySelector("#confirm").addEventListener("click",comfirmMovie);
function comfirmMovie(){
    let userName = document.getElementById("user_name").value;
    let numberOfSeat = +document.getElementById("number_of_seats").value;
    let widra = numberOfSeat*100
    if(wallet >= widra){
        alert("Booking successful! ");
        wallet = wallet-widra;
        localStorage.setItem("amount",JSON.stringify(wallet));
        window.location.reload();
    }else {
        alert("Insufficient Balance!");
    }
}