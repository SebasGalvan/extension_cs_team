document.querySelector("#enviar").addEventListener("click", getPasswords)
document.querySelector('#password').addEventListener("keyup", limpiarInterface);

const contenedor_alg = document.querySelector(".container_algo")
const contenedor_bts = document.createElement("div");
const text_area =  document.createElement("textarea"); 
text_area.id = "area"

const inputPassword = document.querySelector("#password")

function getPasswords(){
    const data = { password: inputPassword.value };

  fetch('https://team-pro-utn.onrender.com/api/v1/password', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
  .then(response => response.json()) 
  .then(datos => {insertarHash(datos)})
  .catch(err => console.log(err));
}


let hashcode = {}

function insertarHash(json){

 

    for(hash in json){

      hashcode= json;
      const btn  = document.createElement("div");
      btn.innerHTML = hash;
      btn.addEventListener("click", mostrarHash);
      btn.className = "btn_hash";
      contenedor_bts.appendChild(btn);
    
    }

    contenedor_bts.className = "contenedor_bts";
    contenedor_alg.appendChild(contenedor_bts);
    contenedor_alg.appendChild(text_area);

}

function mostrarHash(e){
  text_area.innerHTML = "<" + hashcode[e.currentTarget.textContent] + ">"
}

function limpiarInterface(){

  const btn = document.querySelectorAll(".btn_hash");

  if (contenedor_bts.parentNode) {
    contenedor_bts.parentNode.removeChild(contenedor_bts);
  }
  if (text_area.parentNode) {
    text_area.parentNode.removeChild(text_area);
  }

  btn.forEach(e => {
    if(e.parentNode){
      e.parentNode.removeChild(e)
    }
  });


}