// console.log('Hello rifqi');
// const nama = 'Rifqi';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node module

const coba = require('./coba');

console.log(coba.cetakNama('Rifqi'), coba.PI, coba.mhs.cetakMhs(), new coba.Orang());