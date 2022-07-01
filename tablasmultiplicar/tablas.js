//hecho por paula juliana acosta alarcon 
//Fecha de ultima actualizacion 29 de junio 2022
do{
    do{
        /LET: Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor./
        let tmulti = prompt("¿Qué tabla de multiplicar quieres?,valor defecto 10:");
        
        if(tmulti === ""){
            tmulti=10
            
        }
        /VAR: Declara una variable, opcionalmente la inicia a un valor./
        var tabla = Number(tmulti);
        if(Number.isNaN(tabla) === true);{
        
        }
    }while(Number.isNaN(tabla) === true);
    let lista= ""
    for(let i = 1; i < 11; i++){
    // ALERT(): Despliega un cuadro de texto el cual no requiere información por parte del usuario
        lista = lista+tabla + " * " + i + " = " + tabla * i+ "\n";
    }
    alert(lista);
    /VAR: Declara una variable, opcionalmente la inicia a un valor./
    var valid = confirm("¿Quieres otra tabla de multiplicar?");
}while(valid === true)