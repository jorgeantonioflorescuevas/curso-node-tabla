const fs = require("fs");

const tablaMultiplicar = async (numero, lista, hasta) => {
  let result = "";
  for (i = 0; i <= hasta; i++) {
    result += `${numero} X ${i} = ${numero * i}\n`;
  }

  fs.writeFileSync(`./salida/tabla-${numero}.txt`, result);

  if (lista) {
    console.log(result);
  } else;

  return `tabla-${numero}.txt`;

  //console.log("Tabla creada");
};

module.exports = {
  tablaMultiplicar,
};
