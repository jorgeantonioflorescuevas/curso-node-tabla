const argv = require("yargs")
  .option("n", {
    alias: "numero",
    type: "number",
    demandOption: true,
    describe: "n respresenta el numero de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.n)) {
      throw new Error("--n o --numero tienes que venir");
    }
    return true;
  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    default: false,
    describe: "l muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "-h representa el limite a multiplicar ",
  })
  .check((argv, options) => {
    if (!argv.h) {
      throw new Error("Es necesario el --h o --hasta");
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
