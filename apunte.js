function suma(num1, num2) {
    return num1 + num2;
  }
  
  function resta(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicacion(num1, num2) {
    return num1 * num2;
  }
  
  function division(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: División por cero no es válida.";
    }
  }

let numero1 = 32;
let numero2 = 43;

let resultadoSuma = suma(numero1, numero2);
console.log("Suma:", resultadoSuma);

let resultadoResta = resta(numero1, numero2);
console.log("Resta:", resultadoResta);

let resultadoMultiplicacion = multiplicacion(numero1, numero2);
console.log("Multiplicación:", resultadoMultiplicacion);

let resultadoDivision = division(numero1, numero2);
console.log("División:", resultadoDivision);