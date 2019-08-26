//requireds- hay 3 tipos de requireds
const fs = require('fs'); //Este es del repositorio del Node
//const fs = require('express'); --> No existe en la documentancion de Node, son paquetes no nativos de node
//const fs = require('./fs'); --> Son requireds que son propios de nuestro proyecto
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {

            return reject(`El valor introducido ${base} no es un número`);

        }

        //return !Number(base) || !Number(limite) ? reject(`El valor introducido ${base} no es un número`) : reject(`El valor introducido ${limite} no es un número`);

        console.log('=================================='.yellow);
        console.log(`  Tabla De Multiplicar del ${ base }`.yellow);
        console.log('=================================='.yellow);
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${colors.white(base) } * ${colors.white(i) } = ${ colors.white(base*i) }\n`;

        }
        return resolve(colors.yellow(data));
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            return reject(`Algún parametro introducido no es un número: ${base} & ${limite}`);
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base } * ${ i } = ${ base*i }\n`;

        }

        let cuerpo = {
            titulo: "Tabla De Multiplicar del " + base,
            datos: data
        }

        fs.writeFile(`Tablas/tablaDeMultiplicar${ base }.txt`, `Tabla De Multiplicar del ${ base }\n ${data}`,
            (err) => {
                if (err)
                    reject(err)
                else
                    resolve('The file has been saved!'.blue);
            }
        );
    })
};

//Exportar la funcion
module.exports = {
    crearArchivo,
    listarTabla
}