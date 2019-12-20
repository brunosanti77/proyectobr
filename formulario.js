//console.log("funcionando");
$("#formulario").submit(function(event){
    event.preventDefault(); //alamcena los datos sin refrescar el sitio web
    enviar();
});

function enviar(){
    //console.log("ejecutado");
var datos = $("#formulario").serialize();// toma los datos "name" y los lleva a un arreglo.
//console.log(datos);
$.ajax({
    type:"post",
    url:"formulario.php",
    data: "datos",
    success: function(texto){
        if(texto=="exito"){
            correcto();
        }else{
            phperror();
        }
    }
})
}

function correcto(){
$("#mensajeExito").removeClass("d-none");
}

function phperror(){
$("#mensajeError").removeClass("d-none");
}