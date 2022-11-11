// let numero = 1;
// let mensaje;

// switch (numero){
//     case 1:
//         mensaje="Usted ingreso el numero 1"
//         break;
//     case 2:
//         mensaje="Usted ingreso el numero 2"
//         break;
//     case 3:
//         mensaje="Usted ingreso el numero 3"
//         break;
// }

// for (let i = 1; i<=3; i++){
//     switch (i){
//         case 1:
//             mensaje="Usted ingreso el numero 1"
//             break;
//         case 2:
//             mensaje="Usted ingreso el numero 2"
//             break;
//         case 3:
//             mensaje="Usted ingreso el numero 3"
//             break;
//     }
//     console.log (mensaje);
// }

//Bucle While
// let numero = 1;
// while (numero<=10){
//     console.log("Repeticion numero: "+numero);
//     numero++;
// }

//Arrays
// let numero = 1;
// let numero2 = 2;
// let numero3 = 3;


let nombreClientes = [
    'Juan',
    'Lucas',
    'Alberto',
    'Miguel'
]

// for (let i = 0 ; i < nombreClientes.length ; i++){
//     console.log(nombreClientes[i])
//     // if (nombreClientes[i]==='Lucas')
//     //     console.log ("Es cliente nuestro")
// }
nombreClientes.push("Daniel");
nombreClientes.push(27);

// let auxiliar = nombreClientes.pop();

// console.log (auxiliar);
// console.log(nombreClientes);
// auxiliar = nombreClientes.pop();
// console.log (auxiliar);
// console.log(nombreClientes);

// let auxiliar = nombreClientes.shift();

// console.log (auxiliar);
// console.log(nombreClientes);


// nombreClientes.unshift('Carlos','Ludmila')
// console.log(nombreClientes);

//Funciones
let esMayor = validarEdad(10);
validarEdad2 (edad);
//console.log (esMayor);

//validarEdad2(19)
if(esMayor){
    console.log("Es mayor de edad puede tomar alcohol")
}else{
    console.log("No mayor de edad no puede tomar alcohol")
}


function validarEdad (edad) {
    if(edad>=18){
        return true;
    }else{
        return false;
    }
}


function validarEdad2 (edad) {
    if(edad>=18){
        console.log( "Es mayor de edad");
    }else{
        console.log ("Es menor de edad");
    }
}
