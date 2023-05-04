//Mostras los datos del tecnico    ok
//Agregar uno de los datos
//Eliminar uno de los datos
//Filtrar informacion metodos de array    en proceso
//Buscar informacion metodos de array 


const tecnico1 = { // Objetos con
    nombres: ["Cristhian", "Eduardo"],// Array 
    apellidos: ["Zarate", "Burbano"],
    edad: "22",
    servicio: "Mecanica",
    calificacion: 5, 
    formaPago: ["tajeta", "efecivo"],
    costo: ["10 pesos", "20 pesos", "80 pesos"],

};

const tecnico2 = {
    nombres: ["Karol", "Sofia"],
    apellidos: ["Parra", "Cifuentes"],
    edad: "21",
    servicio: "Lipieza",
    calificacion: 2,
    formaPago: ["tajeta", "efecivo"],
    costo: ["30 pesos", "40 pesos ", "50 pesos"],

};

const tecnicos = []; // Array tecnicos
tecnicos.push(tecnico1,tecnico2); // Metodo Push



//Mostrar por medio de una alerta los datos de los tecnicos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
alert("La informacion de los tecnicos es la siguiente: \n" + "Tecnico 1\n" +
    "Nombres: " + tecnico1.nombres + "\nApellidos: " + tecnico1.apellidos + "\nEdad: " + tecnico1.edad + "\nServicio " + tecnico1.servicio + "\nCalificacion: " + tecnico1.calificacion + "\nForma de pago: " + tecnico1.formaPago + "\nCosto: " + tecnico1.costo);

alert("Tecnico 2\n" +
    "Nombres: " + tecnico2.nombres + "\nApellidos: " + tecnico2.apellidos + "\nEdad: " + tecnico2.edad + "\nServicio " + tecnico2.servicio + "\nCalificacion: " + tecnico2.calificacion + "\nForma de pago: " + tecnico2.formaPago + "\nCosto: " + tecnico2.costo);

console.log("La informacion de los tecnicos es la siguiente: \n" + "Tecnico 1\n" +
    "Nombres: " + tecnico1.nombres + "\nApellidos: " + tecnico1.apellidos + "\nEdad: " + tecnico1.edad + "\nServicio " + tecnico1.servicio + "\nCalificacion: " + tecnico1.calificacion + "\nForma de pago: " + tecnico1.formaPago + "\nCosto: " + tecnico1.costo);

console.log("Tecnico 2\n" +
    "Nombres: " + tecnico2.nombres + "\nApellidos: " + tecnico2.apellidos + "\nEdad: " + tecnico2.edad + "\nServicio " + tecnico2.servicio + "\nCalificacion: " + tecnico2.calificacion + "\nForma de pago: " + tecnico2.formaPago + "\nCosto: " + tecnico2.costo);


// Filtar la calificacion mas alta


const calificacionAlta = tecnicos.filter(tecnico => tecnico.calificacion >= 3);
alert("La calificacion mas alta la tiene el tecnico: ");
console.log(calificacionAlta);


// Buscar por informacion por edad 


function search(age, miArray){

    for (var i=0; i < miArray.length; i++){
        if(miArray[i].edad === age){

            return miArray[i];    
        }
    }
}

var resultObject = search("21", tecnicos);
// alert("La edad del tecnico es: "+resultObject);
console.log(resultObject);



// let ob = tecnicos.find(obj => obj.edad === '21');
// console.log(ob);
