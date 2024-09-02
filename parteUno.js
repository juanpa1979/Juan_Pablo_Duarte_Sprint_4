function sayGoodbye(nombre) {
    console.log(`Adios ${nombre}, Que tengas un buen día`);
  };
  
//  sayGoodbye('Juan Pa');

function temperatureInC( valorTemperatura, unidad) {
    let temperaturaMostrada = 0;
    if(unidad.toUpperCase().trim()=='F') {
      temperaturaMostrada =  Math.round((valorTemperatura - 32) * 0.5556);
    } else {
      temperaturaMostrada = valorTemperatura;
    }
    console.log(`La Temperatura es de ${temperaturaMostrada} °C`);
}

  // temperatureInC(88, 'F');

function makePersonObject(id, nombre, email) {
    let objeto = {
        id: id,
        nombre: nombre,
        email: email
    };
    console.log(objeto);
}

// makePersonObject(5, 'Juan Pablo', 'juen.pablo.duarte@gmail.com');

function getName(objeto) {
    if (objeto.hasOwnProperty("name")){
        console.log(`Hola mi nombre es ${objeto.name}.`);
    } else {
        console.log(`El objeto pasado no tiene una propiedad name`);
    }
}
  
 // getName({id: 5, name: 'Juan Pablo', email: 'juen.pablo.duarte@gmail.com'});

function appleIndex(matriz) {
    let posicion = 0;
    posicion = matriz.indexOf('manzana');
    if (posicion===-1){
        console.log(`Manzana no se encuentra incluido en el array`);
    } else {
        console.log(`Manzana se encuentra en la posición ${posicion}.`);
    }
  }

// appleIndex(['banana', 'pera', 'naranja', 'manzana', 'frutilla']);4

function isItAnApple(array) {
  let array2 = [];
  console.log(array);
  for(let i=0; i<array.length; i++){
    console.log('Entro aqui');
    //debugger;
    if(array[i].toLowerCase()==='manzana') {
      array2[i]='true';
    } else {
      array2[i]='false';
    }
  }
  console.log(array2);
}

//isItAnApple(['banana', 'pera', 'naranja', 'manzana', 'frutilla', 'MANZANA']);