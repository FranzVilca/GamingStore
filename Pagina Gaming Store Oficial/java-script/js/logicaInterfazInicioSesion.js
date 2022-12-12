document.querySelector('#btnIngresar').addEventListener('click', 
iniciarSesion);

function iniciarSesion() {
    var sCorreo='';
    var sContrasenna ='';
    var bAcceso = false; 

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasenna = document.querySelector('#txtContrasenna').value;

    bAcceso = validarCredencial(sCorreo,sContrasenna);
    
    if(bAcceso == true){
        ingresar();
    }
    if (bAcceso == false){
        alert("CONTRASEÑA INCORRECTA")
    }

}

function ingresar(){
    var rol =sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href="inicio.sesion.html";
        break;
        case '2':
            window.location.href="clientes.html";
        break;

    }
}