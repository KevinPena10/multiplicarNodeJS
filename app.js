const argv = require('./Config/yargs').argv;
const colors = require('colors');

//Para importar el metodo que tiene el archivo multiplicar se utiliza el Module
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resolve => console.log(resolve))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando No reconocido')
}

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];