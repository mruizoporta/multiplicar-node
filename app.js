const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

//let base = '8';
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));

        break;

    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

/* let argv2 = process.argv;
console.log('Limite ', argv.limite); */

/* let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base); */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e)); */