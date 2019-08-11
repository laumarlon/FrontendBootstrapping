let userImage = document.querySelector("#userImage");
let name = document.querySelector("#name");
let modal = document.querySelector("#modal")
let cerrar = document.querySelector("#cerrar")

function userInfo(){
    fetch("https://randomuser.me/api/")
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        return respuesta.results[0];
    })
    .then((respuesta) => {
        userImage.src = respuesta.picture.large;
        let nameInfo = respuesta.name;
        name.innerHTML = `${nameInfo.title} ${nameInfo.first} ${nameInfo.last}`
        //console.log(respuesta); 
    })
}
userInfo();
userImage.addEventListener('click' , userInfo);
cerrar.addEventListener('click' , () => {
    modal.classList.add('cerrado');
})