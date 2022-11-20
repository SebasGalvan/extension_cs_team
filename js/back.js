document.querySelector("#enviar").addEventListener("click", getPasswords)

const inputPassword = document.querySelector("#password")


function getPasswords(){
    const data = { password: inputPassword.value };

  fetch('https://team-pro-utn.onrender.com/api/v1/password', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
  .then(response => response.json()) 
  .then(json => insertarHash(json))
  .catch(err => console.log(err));
}


function insertarHash(res){

    const contenedor_alg = document.querySelector(".container_algo")

    for (let hash in res) {
        const elem = document.createElement("div")
        elem.className = "algo_labels"

        const algoritmo = document.createElement("span")
        algoritmo.innerHTML = hash+ ": "
        const algoritmo_hash = document.createElement("span")
        algoritmo_hash.innerHTML = res[hash]

        elem.appendChild(algoritmo)
        elem.appendChild(algoritmo_hash)

        contenedor_alg.appendChild(elem);
      }
}
