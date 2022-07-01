//Paula Juliana Acosta Alarcon 
//fecha ultimas correciones 28/06/22
let user = ""
let swicht = true;
let validartexto=""
//Capura usuario del vendedor
function capturausuarioUsuario() {
  do {
    //almacenamos el usuario del vendedor en la variable usuario
    let user = prompt('¿Cuál es tu nombre?');
    //validamos que en el usuario del vendedor solamente se puedan digitar letras
    if (user !== "" && !(!/^[a-zA-Z ]*$/g.test(user)))
      return user;
  } while (swicht);
}

// tambien le puedo dar el precio al producto que quiero vender 
let productos = {
    c: 10000,
    p: 5000,
    m: 5000
};

//con la funcion alert muestro al cliente un cuadro de informacion de la tienda 
alert(capturausuarioUsuario() + " Para realizar la compra ten encuenta: ");
alert("");
alert("| CÓDIGO |  PRODUCTO  |   PRECIO    |");
alert(`|  145   | camiseta   |   ${productos.c}     |`);
alert(`|  225   |  guantes   |   ${productos.p}     |`);
alert(`|   330  |   Medias   |    ${productos.m}     |`);
alert("");
//funcion validar numero

function validarnumero(texto) {
  do{
    let nombre=prompt(texto)
    if(nombre !== "" &&!(!/^[0-9]*$/g.test(nombre)))
       return nombre;
    
  } while (true) 
  
}

//con function hago que valide el nombre del usuario 

//aca coloco un do while para que el cliente pueda digitar que quiere comprar y que se valide con los codigos de la tienda si no es asi lanza un mensaje que dice al clienmte que el prodcuto no exite 
do{
    do{
      //valido los datos que voy a usar como el nombre 
        
        let id = validarnumero( user+" Escriba el código del producto a comprar: ")
        id = id.toUpperCase();
        switch(id){
            case '145':
             var cant = validarnumero(" Cantidades a llevar");
             var total = productos.c * cant;
            alert(" El precio a pagar es: " + "$" + total);
            break;
            case '225':
             var cant = validarnumero(" Cantidad a llevar");
             var total = productos.p * cant;
            alert(" El precio a pagar es: " + "$" + total );
            break;
            case '330':
             var cant = validarnumero(" Cantidad a llevar");
             var total = productos.m * cant;
            alert(" El precio a pagar es: " + "$" + total );
            break;
            default:

                alert("Ese producto no existe");
                cant = false
        }//aca hago de nuevo la pregunta para que se repita en caso de ser necesario 
    }while(cant === false);
    valid = confirm("¿Quieres otro producto?");
}while(valid === true);