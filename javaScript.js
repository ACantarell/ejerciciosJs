/*
Deberán realizar los siguientes ejercicios:

1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
*/

/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const funcion = (numero) => {
  if (numero % 2 === 0) {
    console.log(`el ${numero} es par`);
  }
  else {
     console.log(`el ${numero} es impar`);
  }
}

funcion ()
*/


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

/*
const funcion = (n1, n2) =>{
  if (n1 > n2) {
    console.log(`${n1} es mayor a ${n2}`);
  }else if (n2 < n1) {
    console.log(`${n2} es mayor a ${n1}`);
  } 
  
  if (n1 == n2) {
    console.log(`ambos numeros son iguales`);
  }
}

funcion (10,1)
*/

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

/*
const funcion = (n) => {
  if (n %5 === 0) {
    console.log(`${n} es multiplo de 5`);
  }
else{
  console.log(`${n} no es multiplo de 5`);
}

}

funcion()
*/

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
/*
const funcion = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i); ;
  };
}
funcion(30)
*/

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

/*
const funcion = (numero, palabra) => {
  for (let index = 0; index < numero; index++) {
    console.log(palabra);
  }
}

funcion (10, 'amadeo')
*/

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
/*

let amigos = ["amadeo", "tomas", "nahuel", "nicolas", "elias"];

const nombres = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
  }
}

nombres(amigos)
*/

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
//  menos el que se encuentre en la 5ta posición del mismo. 
//  Ayuda: Recuerden que el primer índice de un array es "0".
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const funcion = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
      continue;
    }
    console.log(numeros[i]);
  }
}

funcion (numeros)
*/

// 8 - Crea una función que reciba un array de números
//  y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
/*
 let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const funcion = (num) => {
   for (let i = 0; i < numeros.length; i++) {
     numeros[i] = numeros[i] * num;  
   }
 console.log(numeros);
 
 funcion (2)
 */