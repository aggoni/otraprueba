function inicio(){

if(sessionStorage.getItem("dni")===null){ //comprobamos si la variable del dni esta vacia, de ser asi mostramos el input del nombre
    document.getElementById("checkbox").style.visibility="hidden";
    document.getElementById("dni").style.visibility="hidden";
    document.getElementById("boton").style.visibility="hidden";
 
}else{ // de no ser asi quiere decir que hay datos 
    //ocultamos todos los elementos del formulario
    document.getElementById("cajanombre").style.visibility="hidden";
    document.getElementById("checkbox").style.visibility="hidden";
    document.getElementById("dni").style.visibility="hidden";
    document.getElementById("boton").style.visibility="hidden";
    //almacenamos las variables de sesion 
    var ses_nombre=sessionStorage.getItem("nombre");
    var ses_adulto=sessionStorage.getItem("adulto");
    var ses_dni=sessionStorage.getItem("dni");
    var ses_genero=sessionStorage.getItem("genero");
    //borramos las variables de sesion 
    sessionStorage.clear();

    //pintamos los datos 
    document.write(ses_nombre+" es "+ses_genero +"  "+ses_adulto+" es adulto y su dni es  "+ses_dni);
    
}

}

function validarNombre(){//funcion que valida que el nombre pertenece a los indicados
  
   var nombre=document.getElementById("nombre").value; //almacenamos el dato del input
   nombre=nombre.toUpperCase();//convertimos en mayuscula
   document.getElementById("nombre").value=nombre;//sustituimos el nombre por el mismo en mayusculas

    var nombres=["JON","ANDER","ANE","ENARA"]; //almacenamos los datos de los nombres validos en un array
 
    //comprobamos si el nombre introducido existe en el array
    if(nombres.includes(nombre)===false){// si el nombre no esta en el array
        document.getElementById("respuestaNombre").innerHTML="<p style='color:red'>Este nombre no es valido vuelve a introducir el nombre</p>";    
        ocultar();//funcion para ocultar elementos
        document.getElementById("nombre").value="";//borramos el contenido del input
        document.getElementById("nombre").focus(); //ponemos el foco de nuevo
    }else{// si el nombre esta en el array 

        if(nombre==="JON" || nombre==="ANDER"){//validamos si es nombre de chico 
            document.getElementById("respuestaNombre").innerHTML="<p style='color:blue'>Este un chico</p>";
            sessionStorage.setItem("genero","hombre");//almacenamos el valor del genero en variable de sesion
        }else{
            document.getElementById("respuestaNombre").innerHTML="<p style='color:pink'>Este una chica</p>";
            sessionStorage.setItem("genero","mujer");//almacenamos el valor del genero en variable de sesion
        }
        checkbox.style.visibility="visible"; //mostramos los siguientes checkbox
        document.getElementById("adulto").style.visibility="visible";
        document.getElementById("nino").style.visibility="visible";
        sessionStorage.setItem("nombre",nombre);//almacenamos el nombre en variable de sesion
        
    }
}

function adulto(){//funcion que valida si el usuario es adulto o no
    
    var adulto=document.getElementById("mayor16");//capturamos el valor del checkbox
    var menor=document.getElementById("menor16");//capturamos el valor del checkbox
  
    if(adulto.checked==true ){// si el checkbox esta activado
        document.getElementById("mayorEdad").innerHTML="<p>Esta persona es adulta</p>";//muestra mensaje
        document.getElementById("nino").style.visibility="hidden";//oculta el otro checkbox
        document.getElementById("dni").style.visibility="visible";//muestra el siguiente campo
        sessionStorage.setItem("adulto","SI");//almacena el valor de adulto en variable de sesion

// en caso de desactivar la opcion marcada 
    }else if(adulto.checked==false){//desactiva 
        document.getElementById("mayorEdad").innerHTML="";//borra mensaje
        document.getElementById("nino").style.visibility="visible";//muestra el otro checkbox
        document.getElementById("dni").style.visibility="hidden";//oculta el campo dni

    }
    //si el checkbox esta activado
    if(menor.checked==true){// si el checkbox esta activado
        document.getElementById("mayorEdad").innerHTML="<p>Esta persona NO es adulta</p>";//muestra mensaje
        document.getElementById("adulto").style.visibility="hidden";//oculta el otro checkbox
        document.getElementById("dni").style.visibility="visible";//muestra el siguiente campo
        sessionStorage.setItem("adulto","NO");//almacena el valor de adulto en variable de sesion
// en caso de desactivar la opcion marcada 
    }else if(menor.checked==false  ){
        document.getElementById("adulto").style.visibility="visible";//muestra el otro checkbox

    }    

}

function validarDni(){//funcion que valida el dni

    var ndni=document.getElementById("numDni").value;
    var compruebaDni = /^[0-9]{8,8}[-][A-Za-z]$/;
    if(compruebaDni.test (ndni) == true){
   
        document.getElementById("mensajeDni").innerHTML="<p style='color:green'>El DNI  es correcto</p>"; 
        document.getElementById("boton").style.visibility="visible";
        sessionStorage.setItem("dni",ndni);
  }else{
    document.getElementById("mensajeDni").innerHTML="<p style='color:red'>El DNI no es correcto introduzca un DNI xxxxxxxx-A</p>";  
    document.getElementById("boton").style.visibility="hidden";
    ndni="";
    document.getElementById("numDni").focus();
  }

}

function ocultar(){//funcion que oculta y borrar elementos en el caso que cambiemos el nombre
    document.getElementById("checkbox").style.visibility="hidden";
    document.getElementById("adulto").style.visibility="hidden";
    document.getElementById("mayor16").checked=false;
    document.getElementById("nino").style.visibility="hidden";
    document.getElementById("menor16").checked=false;
    document.getElementById("mayorEdad").innerHTML="";
    document.getElementById("dni").style.visibility="hidden";
    document.getElementById("numDni").value="";
    document.getElementById("mensajeDni").value="";
    document.getElementById("boton").style.visibility="hidden";

}

function enviarDatos(){//abre otro pestaña
    window.open("index.html");
}