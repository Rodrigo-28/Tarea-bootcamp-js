function mayorMenosMenor(arr=undefined) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
if(arr===undefined) return console.warn("no ingresaste un arreglo de numeros");
if(!(arr instanceof Array)) return console.error("el valor q ingresaste no es un arreglo");
if(arr.length ===0) return console.error("el arreglo esta vacio");
 for(let num of arr){
    if(typeof num!== "number") return console.error(`el valor ${num} ingresado, no es un numero` );

 };
 let mayor=arr[0];
 let menor =arr[0];
 for(let i=0;i< arr.length;i++){
    if(arr[i]>mayor){
        mayor=arr[i];
    }
 };
 for (let i = 0; i< arr.length; i++) {
            if(arr[i]<menor){
                menor=arr[i]
            }
     };
   
     console.log("el mayor de mi array es "+mayor);
     console.log("el menor de mi array es "+menor);
  
     let resultado= (mayor)-(menor);
 console.log("la resta de los dos numeros encontrados en el arreglo es "+ resultado);
};
mayorMenosMenor([-1,-55,-44,-4]);

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
   const result=[];
   const index = menu[comida].findIndex((res)=>res ===ingrediente);
   if(index !==-1){
    if(!(menu[comida][index-1] === undefined)){
        result.push(menu[comida][index-1]);
    }
    
    result.push(menu[comida][index]);
    if(!(menu[comida][index+1] ===undefined)){
        result.push(menu[comida][index+1]);

    }
   }
   return result.length > 0 ? result : "el menu esta perfecto";

 

    
};
let menuDelDia = {
     raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
     bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
     tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
 } 
//console.log(ingredienteEnMalEstado(menuDelDia, "bagnaCauda", "Aceite")) ;


function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    if(!persona.hasOwnProperty("invitado")){
        console.log("disculpe señor, no esta invitado a la fiesta")
    };
    if(persona.hasOwnProperty("invitado") && persona.hasOwnProperty("nombre") && persona.hasOwnProperty("apellido")){
            console.log(`${persona.apellido}, un gusto tenerlo nuevamente! bienvenido `);
   };
    if(persona.hasOwnProperty("invitado") && persona.hasOwnProperty("apellido") && !persona.hasOwnProperty("nombre")){
        console.log(`bienvenido sr`+persona.apellido);
    };
    if(persona.hasOwnProperty("invitado") && !persona.hasOwnProperty("apellido") && persona.hasOwnProperty("nombre")){
        console.log(`hola ${persona.nombre} tu mesa esta lista`)
    };
    
    

};

 const persona={
     nombre: 'Lionel',
      apellido: 'Messi',
     invitado: true
}

//bienvenidoSr(persona);

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:

    let resultado =[];

    estudiantes.forEach(el => {
        if(el.check1 >= nota1 && el.check2 >= nota2 ){
            resultado.push(`${el.nombre} ${el.apellido}`);
        }
    });

    return resultado;
};
const estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
] 

//console.log(obtenerSoloLosMejores(estudiantes, 20, 15));

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    let newArray= [];
    newArray= arreglo.filter(el=> el !==num);
    console.log(newArray);
};
//buscaDestruye([1,2,3,4,1,1,1,-1,],-1);

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // .
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:
  

 

    let obj1Keys= Object.keys(obj1); 
    let obj2Keys= Object.keys(obj2);
    let arrayNuevo=obj1Keys; 

    for(let i=0;i<obj2Keys.length;i++){
        const index=arrayNuevo.findIndex(x=>x === obj2Keys[i])
        if(index != -1){
            arrayNuevo.splice(index,1)
        }else {
            arrayNuevo.push(obj2Keys[i])
        }
    };
    console.log(arrayNuevo);


    // console.log(obj1Keys);
    // console.log(obj2Keys);
    


  
};
let obj1 = {nombre: "Luciano", apellido: "Nicolau"};
let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"};
//clavesUnicas(obj1, obj2)



function invertirLetras(frase="") {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:
    if(!frase) return console.warn("no ingresaste ninguna cadena");
    if(typeof frase !== "string") return console.log("el valor ingresado no es una cadena de texto");

    
    let fraseAux=[];
    for(let i=0;i<frase.length;i++){
        if(frase[i] === frase[i].toUpperCase()){
            //let aux = frase[i].toLowerCase;
            fraseAux.push(frase[i].toLowerCase());
        }else{
           // frase[i].toUpperCase();
            fraseAux.push(frase[i].toUpperCase());
        }
    }
    console.log(fraseAux.join());
};
//invertirLetras("DGagDG");