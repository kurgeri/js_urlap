const reset_gomb = document.getElementById("reset_button")
let teszt = document.getElementById("test")
teszt.style.display = "none"

let teszt_start = document.getElementById("test_start_button");
let idozito = document.getElementById("idozito");

function startStopper()
{
    
}


teszt_start.addEventListener("click", () =>
{
teszt.style.display = "block"
document.getElementById("szemelyes_adatok").style.display = "none"

});

reset_gomb.addEventListener("click", () => {
location.replace(location.href)
})


let teszt_vege =document.getElementById("submit_button")
let tabla = "<table border=1>"
tabla += "<tr>"
tabla += "<th></th>"
teszt_vege.addEventListener("click", () =>
{
for (let i = 0; i < 10; i++ )
{
   tabla += `<th>${i+1}. feladat</th>`
}
tabla += "<th>Összesen</th></tr>"

tabla += "<tr><td>Elérhető pontszámok</td><td>1</td><td>1</td><td>1</td><td>5</td><td>7</td><td>5</td><td>6</td><td>3</td><td>1</td><td>1</td></tr>"
tabla += "<tr><th>Elért pontszám</th>"

})







