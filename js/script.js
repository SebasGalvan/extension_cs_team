const in_password =  document.querySelector('#password')
const lbl_condicionales = document.querySelectorAll("#lbl_condiciones")

const  mayusculas =  document.querySelector('#mayusculas')
const  minusculas =  document.querySelector('#minusculas')
const  size =  document.querySelector('#size')
const  numero =  document.querySelector('#numero')

const  condiciones =  document.querySelector('.c_condiciones')
condiciones.attributes['hidden'] = true


const progress_bar = document.querySelector('#progress_bar')

const progres_poco_segura = document.querySelector('#poco_segura')
const progres_media_segura = document.querySelector('#media_segura')
const progres_segura = document.querySelector('#segura')
const progres_muy_segura = document.querySelector('#muy_segura')

const  enviar =  document.querySelector('#enviar')
const  txt_lvl_seguridad =  document.querySelector('#txt_lvl_seguridad')


const poco_segura = document.querySelector('#poco_segura')
const media_segura = document.querySelector('#media_segura')
const segura = document.querySelector('#segura')
const muy_segura = document.querySelector('#muy_segura')

enviar.setAttribute('disabled',true);

in_password.addEventListener('keyup', cambiar)

function cambiar(e) {
    
    reset()

    const verificacion = [] 
    const letrasMayusculas= /[A-Z]/g
    const letrasMinusculas = /[a-z]/g
    const numeros = /[0-9]/g

    const conjunto = letrasMayusculas + letrasMinusculas + numeros


    e.target.value.split("").forEach(l => {
        if(l.match(letrasMayusculas)){
            mayusculas.className = "listo"
            verificacion[0] = true
        }
        if(l.match(letrasMinusculas)){
            minusculas.className = "listo"
            verificacion[1] = true
        }
        if(l.match(numeros)){
            numero.className = "listo"
            verificacion[2] = true
        }
    });

    if(!e.target.value.match(conjunto)){

            if(!e.target.value.match(letrasMayusculas)){
                mayusculas.className = "falta"
                verificacion[0] = false
            }
            if(!e.target.value.match(letrasMinusculas)){
                minusculas.className = "falta"
                verificacion[1] = false
            }
            if(!e.target.value.match(numeros)){
                numero.className = "falta"
                verificacion[2] = false
            }
        };

        if(in_password.value.split("").length >= 8){
            size.className = "listo"
            verificacion[3] = true
        }else{
            size.className = "falta"
            verificacion[3] = false
        }

        if(verificacion.every((v)=> { return v == true})){
            enviar.removeAttribute("disabled")

        }else{
            enviar.setAttribute('disabled','disabled');
        }


        let  lvl = 0
        for (let i = lvl; i < 4; i++) {
            if (verificacion[i]) {
                lvl +=1
            }     
        }

        if (in_password.value.split("").length == 0){
            lvl = 0
        }


        cambiar_lvl_seguridad(lvl)
}



function cambiar_lvl_seguridad(lvl){
    switch (lvl) {
        case 0:
            reset()
            break;
        case 1:
            poco_segura.className = "poco_segura_acvt"
            media_segura.className = "progres_basic"
            segura.className = "progres_basic"
            muy_segura.className = "progres_basic"
            txt_lvl_seguridad.innerHTML = "Muy bajo"
            txt_lvl_seguridad.className = "poco_segura_txt"

            break;
        case 2:
            poco_segura.className = "media_segura_acvt"
            media_segura.className = "media_segura_acvt"
            segura.className = "progres_basic"
            muy_segura.className = "progres_basic"
            txt_lvl_seguridad.innerHTML = "Bajo"
            txt_lvl_seguridad.className = "media_segura_txt"
    
            break;
        case 3:
            poco_segura.className = "segura_acvt"
            media_segura.className = "segura_acvt"
            segura.className = "segura_acvt"
            muy_segura.className = "progres_basic"
            txt_lvl_seguridad.innerHTML = "Medianamete Segura"
            txt_lvl_seguridad.className = "segura_txt"
  
            break;
        case 4:
            poco_segura.className = "muy_segura_acvt"
            media_segura.className = "muy_segura_acvt"
            segura.className = "muy_segura_acvt"
            muy_segura.className = "muy_segura_acvt"
            txt_lvl_seguridad.innerHTML = "Segura"
            txt_lvl_seguridad.className = "muy_segura_tx"

            break;
    
        default:
            break;
    }
}


const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
    const type = in_password.getAttribute("type") === "password" ? "text" : "password";
    in_password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


function reset(){
    mayusculas.className = "lbl_condiciones"
    minusculas.className = "lbl_condiciones"
    numero.className = "lbl_condiciones"
    size.className = "lbl_condiciones"
    progres_poco_segura.className = "progress_bar"
    progres_media_segura.className = "progress_bar"
    progres_segura.className = "progress_bar"
    progres_muy_segura.className = "progress_bar"
    txt_lvl_seguridad.innerHTML = ""
}
