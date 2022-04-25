// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click", addMoney);
    let wallet = JSON.parse(localStorage.getItem("amount")) || 0;
function addMoney(){
    let money = +document.querySelector("#amount").value;
    wallet = wallet + money;
    //console.log(wallet);
    localStorage.setItem("amount",JSON.stringify(wallet));
    window.location.reload();
}
document.querySelector("#wallet").innerText = wallet;