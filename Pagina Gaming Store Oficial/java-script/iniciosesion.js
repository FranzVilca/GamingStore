function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem("ListaUsuariosLs"));

    if(listaUsuarios == null){
        listaUsuarios =
        [ 
            //id ,nombre,apellido,   correo,                   contra,    fecha
            ['1','Luis','Fernandez','luis.fernandez@gmail.com','1nando9',1987-10-12,'1'],
            ['2','Jose','Fernandez','jose@gmail.com','1jose9','1993-04-17','2']
        ]
    }
    return listaUsuarios;
}
function validarCredencial(pCorreo , pContrasenna){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;


    firebase.auth().createUserWithEmailAndPassword(pCorreo, pContrasenna)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo',listaUsuarios[i][1] + ' ' + listaUsuarios[i][2] );
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios [i][6]);
        }
    }
    return bAcceso;

}