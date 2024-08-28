
const d= document;
const texArea = d.querySelector (".form__input")
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"], 
 
];

//Encriptador
function encriptador (mensaje){
    let mensajencriptado ="";
    for (let i= 0; i < mensaje.length; i++) {
        let letra = mensaje [i];
        let encriptada = letra;

        for (let j=0; j < llaves.length; j++){
            if ( letra === llaves [j][0]){
                encriptada = llaves [j][i]; //substitucion de letras encriptadas
            break;     
            }
        }
        mensajencriptado += encriptada;    
    }
    
    return mensajencriptado;

}
//Desencriptador
function desencriptador (mensaje){
    let mensajedesencriptado = mensaje;
    for(let i=0; i< llaves.length; i++){
        let regex = new RegExp (llaves[i][1], 'g')
        mensajedesencriptado = mensajedesencriptado.replace (regex, llaves [i][0]);

    }
    return mensajedesencriptado; 

}

textArea.addEvenListener ("input",(e)=> {
    console.log (e.target.value);
} )

botonEncriptar.addEvenListener ("click", (e)=> {
    e.preventDefault ();
    let mensaje = texArea.value.toLowerCase();
    let mensajencriptado = encriptador (mensaje);
    reultadoText.texContent = mensajencriptado;
    botonCopiar.classList.remove ("hidden");
})