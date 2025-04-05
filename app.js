//const { argv, options } = require("yargs");

const { argv } = require("./config/yargs");
const { tablaMultiplicar } = require("./helpers/tablaMultiplicar");

//Creamos una constante y allmacena el require de los yargs.argv

//LO MOVEMOS A LA CARPETA CONFIG ARCHIVO YARGS.JS

// const argv = require("yargs")
//   .option("n", {
//     alias: "numero",
//     type: "number",
//     demandOption: true,
//   })
//   .check((argv, options) => {
//     if (isNaN(argv.n)) {
//       throw new Error("-n debe ser un Numero");
//     }
//     return true;
//   })
//   .option("l", {
//     alias: "lista",
//     type: "boolean",
//     demandOption: false,
//   }).argv;

//
console.clear();
console.log(argv);

//Apuntamos la informacion que vamos a querer : donde la va a almacenar y con una , de donde la vamos a sacar
console.log("numero: yargs", argv.numero);

tablaMultiplicar(argv.n, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

/**
    * si funciona entonces nombreArchivo sera igual
//    * a el return de nuestra funcion tablaMultiplicar
//    */
