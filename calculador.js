//Estructura de html del proyecto 
//Variables js
//Funciones del proceso 
//Objetos de js
//Array 
//Metodos de busqueda y filtrado array

var oficio, otroOficio, costoOficio, suma = 0, cuponCosto1 = -10, total , elUserTieneCupon, codigo = 1234;;

alert('Bienvenido, te queremos brindamos un servicio de limpieza');
alert('Escriba el oficio que requiere, ejemplos: \n Lavar la ropa \n Barrer \n Traperar');

do{
    oficio = (prompt("Ingrese el oficio"));

    alert('Escriba el costo');
    costoOficio = parseInt(prompt("Ingrese el costo"));

    if (costoOficio > "0" ){
        alert('El oficio de ' + oficio + ' tiene un costo de: '+costoOficio); 
        console.log("El oficio de " + oficio + " tiene un costo de: "+costoOficio);  
        
        suma = suma + costoOficio; 
    }else{
        alert('Error de ingreso') /*Error*/  

    }

    alert('Quiere ingresar mas oficios escriba si');
    otroOficio = (prompt());
    
   

}while(otroOficio == "si");

alert('El costo total de todo es: '+suma); 
console.log("El costo total de todo es: "+suma)


//Funcion de resta con cupon

alert('¿Tiene un cupon escribe si o no?'); 
prompt('')/*si*/

alert('Escriba es codigo')
elUserTieneCupon = (prompt("Cupon: "));/*1234*/


if(elUserTieneCupon == 1234 ){   

    alert('El cupon tiene un valor de: '+cuponCosto1); 
    suma = suma + (cuponCosto1);

}else{
    alert('Error de cupon')
    alert('Muchas gracias')
}

alert('El costo total con el cupo es: '+suma);
console.log("El costo total con el cupo es: "+suma)

 
//Mostrar todos los oficios de distintis servicio












