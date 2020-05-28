export function validLogin(state){
    let registro = state.registros
    let login = state.login
    let correct="";
    for(let i=0;i<registro.length;i++){
        if(registro[i].correo==login.correo && registro[i].contraseña==login.contraseña){
            correct = true
        }
    }
    return correct;
}