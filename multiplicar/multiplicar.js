const fs = require('fs');
var colors = require('colors');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ${limite} no es un numero`);
            return;
        }

        console.log('===================='.green);
        console.log(`==Tabla de ${base}==`.green);
        console.log('===================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${i * base}\n`);
        }
        console.log(data);

    });

}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${i * base}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)

        });

    });
}

module.exports = { crearArchivo, listarTabla }