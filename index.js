// Parte 1
/**
 * ### Challenge `sayGoodbye`
 *
 *
 * Esta función debe tomar un nombre como argumento,
 * y devolver una cadena que diga `Adiós, {nombre}. Que tengas un buen día'.
 *
 * Por ejemplo, si invocamos `sayGoodbye`
 * pasando 'Andy' como argumento,
 * el valor devuelto debería parecerse a: 'Adiós, Andy. Que tengas un buen día'.
 *
 */


/**
 * ### Challenge `temperatureInC`
 *
 * 
 * Esta función debe tomar una temperatura y una unidad (ya sea 'F' o 'C') como argumentos,
 * y devolver la temperatura en grados Celcius, redondeada al número entero más cercano.
 *
 * Por ejemplo, si invocamos temperatureInC
 * pasando 88, 'F' como argumentos,
 * el valor devuelto debe ser: '24C'
 *
 * Si invocamos `temperatureInC`
 * pasando 24, 'C' como argumentos,
 * el valor devuelto debe ser: '24F'
 *
 * Sugerencia: Puedes crear otra función para convertir F a C.
 */


/**
 * ### Challenge `makePersonObject`
 *
 * @instrucciones
 * Esta función debe tomar un id, un nombre y un email como argumentos,
 * y devolver un objeto con las propiedades `id`, `name` y `email`.
 *
 * Por ejemplo, si invocamos `makePersonObject`
 * pasando 1, 'Alguien' y 'alguien@alguien.com' como argumentos,
 * el valor devuelto deberia parecerse a:
 * {
 * id: 1,
 * name: Alguien,
 * email: alguien@alguien.com»,
 * }
 */

function makePersonObject(/* código aquí */) {
  /* código aquí */
}

/**
 * ### Challenge `getName`
 *
 * @instrucciones
 * Esta función toma como único argumento
 * un objeto que contiene una propiedad `name`,
 * y devuelve una cadena que dice `Hola, mi nombre es {name}`,
 * donde `{nombre}` es el nombre almacenado en el objeto.
 *
 * Por ejemplo, si invocamos a `getName
 * pasando { id: 1, name: 'Alguien', email: 'alguien@alguien.com` } como argumento,
 * el valor devuelto debería parecerse a `Hola, mi nombre es Alguien`.
 */

function getName(/* código aquí */) {
  /* código aquí */
}

/**
 * ### Challenge `appleIndex`
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas,
 * y devuelve el índice en el array de la cadena `manzana`.
 *
 * Puedes asumir que la cadena 'manzana' aparecerá exactamente
 * una vez en la matriz.
 *
 * Por ejemplo, si invocamos a appleIndex
 * pasando [ 'naranja', 'uva', 'manzana', 'plátano', 'mango' ] como argumento,
 * el valor devuelto debería ser: 2.
 */

function appleIndex(/* código aquí */) {
  /* código aquí */
}

/**
 * ### Challenge `isItAnApple`
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas
 * y devuelve un array de igual longitud que contiene `true`
 * si la entrada correspondiente en el array original es `manzana`
 * y `false` si es cualquier otra cosa.
 *
 *
 * Por ejemplo, si invocamos a `isItAnApple`
 * pasando [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] como argumento,
 * el valor devuelto debería ser: [ false, true, false, false, true, false ].
 */
function isItAnApple(/* código aquí */) {
  /* código aquí */
}

// Parte 2
//  Array de objetos de ejemplo
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

/**
 * ### Challenge `getCharacterNameByIndex`
 *
 * @instrucciones
 * getCharacterNameByIndex toma dos argumentos:
 * (1) un array de personajes como el de la vista previa de arriba
 * (2) un número que es el índice deseado en el array.
 * getCharacterNameByIndex devuelve una cadena con el formato `El personaje es: {name}`
 *
 * Por ejemplo, si getCharacterNameByIndex se invoca con el inventario y el número 0. * devolverá
 * devolverá «El personaje es Luke Skywalker».
 */

/**
 * Filter
 * 1 Obtener caracteres con masa superior a 100
 * 2 Obtener personajes con altura inferior a 200
 * 3 Obtener una matriz con todos los nombres
 * 4 Obtener un array de objetos con sólo las propiedades nombre y altura
 * 5 Encontrar el primer personaje con ojos marrones.
 * 6 Obtener todos los personajes masculinos
 * 7 Obtener todos los personajes femeninos
 * 9 Obtener una matriz con todas las alturas
 * 10 Imprimir en la consola los nombres de todos los personajes.
 * 11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
 * 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
 * En este ejercicio no es necesario escribir función, pueden resolverse los ejercicios
 * en forma simultánea con un comentario previo indicando el número. Ejemplo abajo:
 */

// 1 Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter((c) => c.mass > 100);
