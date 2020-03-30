const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.error(err);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.error(err);
            });
        break;

    default:
        console.log('Comando no reconocido.');
}

//console.log(argv);