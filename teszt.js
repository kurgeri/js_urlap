const reset_gomb = document.getElementById("reset_button")
let teszt = document.getElementById("test")
teszt.style.display = "none"

let teszt_start = document.getElementById("test_start_button");
// let idozito = document.getElementById(idozito);

// function startStopper()
// {
    
// }


teszt_start.addEventListener("click", () =>
{
teszt.style.display = "block"
document.getElementById("szemelyes_adatok").style.display = "none"

});

reset_gomb.addEventListener("click", () => {
location.replace(location.href)
})








