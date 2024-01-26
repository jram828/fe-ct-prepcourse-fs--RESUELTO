/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  newarray = [];
  for (var clave in objeto) {
    newarray.push([clave, objeto[clave]]);
  }
  return newarray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var charobj = {};
  for (i = 0; i < string.length; i++) {
    letra = string[i];

    charobj[letra] = charobj[letra] + 1 || 1;
  }

  return charobj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  const arrUpper = []; //creamos un array de mayusculas
  const arrLower = []; //creamos un array de minusculas

  //usamos for of, for of tambein itera sobre strings
  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      //si la letra es igual a su mayuscula
      arrUpper.push(letter); // agregamos la letra al array de mayusculas
    } else {
      // si no
      arrLower.push(letter); // agregamos la letra al array de minuscuas
    }
  }

  //retornamos los arrays convertidos a strings usando join, concatenados
  return arrUpper.join("") + arrLower.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var palabras = frase.split(" ");
  var fraseInv = [];

  for (var palabra of palabras) {
    var palabraInv = palabra.split("").reverse().join(""); //+" "
    //console.log(palabraInv[i]=parsep[i].reverse().join(""))
    fraseInv.push(palabraInv);
  }
  //console.log(fraseInv)
  return fraseInv.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  num = numero.toString().split("").reverse().join(""); //.toNumber();
  if (num == numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  stringsep = string.split("");
  n = string.length;
  newstring = "";
  for (i = 0; i < n; i++) {
    if (!(string[i] === "a") && !(string[i] === "b") && !(string[i] === "c"))
      newstring = newstring + string[i];
  }
  return newstring;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  i = 0;
  newarray = [];

  for (let num of array1) {
    for (let numarray2 of array2) {
      if (num === numarray2) {
        newarray.push(num);
      }
    }
  }

  return newarray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
