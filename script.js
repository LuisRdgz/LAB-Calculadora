function suma (numero1, numero2){
    return parseFloat(numero1) + parseFloat(numero2);
}

function resta (numero1, numero2){
    return parseFloat(numero1) - parseFloat(numero2);
}

function multiplicacion (numero1, numero2){
    return parseFloat(numero1) * parseFloat(numero2);
}

function division (numero1, numero2){
    return parseFloat(numero1) / parseFloat(numero2);
}

//Prueba
console.log("Prueba de suma");
console.log(suma(5,5));
console.log("Prueba de resta");
console.log(resta(5,5));
console.log("Prueba de multiplicación");
console.log(multiplicacion(5,5));
console.log("Prueba de división");
console.log(division(5,5));

//Simulación
let numero1 = "10";
let numero2 = "20";

console.log("Simulación con números declarados");
console.log(suma(numero1, numero2));
console.log(division(numero1, numero2));

//Petición de números
//alert("Bienvenido a la Calculadora en línea");
let respuesta = "y"
while(respuesta == "y"){

    let peticion = prompt("¿Qué operación quieres realizar? (1: suma, 2: resta, 3: multiplicación, 4: división)");
    let num1 = prompt("Ingrese el primer número: ");
    let num2 = prompt("ingrese el segundo número: ");
    let resultado = 0;
    switch(peticion){
        case "1":
            console.log(resultado = suma(num1, num2));
        break; 

        case "2":
            console.log(resultado = resta(num1, num2));
        break;

        case "3":
            console.log(resultado = multiplicacion(num1, num2));
        break;

        case "4":
            console.log(resultado = division(num1, num2));
        break;
        
        default: 
            console.log("Esa operación no se encuentra disponible");
        break;
    }
    respuesta = prompt("¿Quieres realizar una operación? (y/n)");
}

