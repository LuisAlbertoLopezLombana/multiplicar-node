//requireds

const fs = require('fs'); // Propio de node
// const fs = require('express'); es necesirio la instalación de un package
// const fs = require('./fs'); llamo a archivos propios
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    console.log('===================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log("====================".green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor (${ base }) del parámetro base no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor (${ limite }) del parámetro limite no es un número`);
            return;
        }

        let dataNums = ''

        for (let i = 1; i <= limite; i++) {
            dataNums += `${i} * ${base} = ${base*i} \n`;
        }

        console.log(dataNums)
    });

}

let crearArchivo = (base, limite = 10) => {

        console.log('===================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log("====================".green);

        return new Promise((resolve, reject) => {
                    console.log(limite);
                    if (!Number(base)) {
                        reject(`El valor introducido ${ base } no es un número`);
                        return;
                    }

                    let dataNums = ''

                    for (let i = 1; i <= limite; i++) {
                        dataNums += `${i} * ${base} = ${base*i} \n`;
                    }


                    const data = new Uint8Array(Buffer.from(dataNums));
                    fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
                                if (err) reject(err)
                                else resolve(`Archivo creado: ${colors.green(`tabla-${base}-al-${ limite }.txt`)}`)

        });

    });
}

module.exports = {
    listarTabla,
    crearArchivo
}