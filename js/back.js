const inputPassword = document.querySelector(".password")
const btnSubmit = document.querySelector(".enviar")
const contenedor_alg = document.querySelectorAll(".algoritmos_col")

btnSubmit.addEventListener("submit", getPasswords);

async function getPasswords(e){
    e.preventDeffault()
    let password = inputPassword.value;
    try{
        const req =  await axios({
            method: 'post',
            url: 'https://team-pro-utn.onrender.com/api/v1/password',
            data: {
              password: password,
            }
          });

          await req.forEach(element => {
            let elem = document.createElement("div")
            elem.innerHTML = element
            contenedor_alg.appendChild(elem);
          });

          
    }catch(error){
        console.log("PASO ALGO");
    }
}
