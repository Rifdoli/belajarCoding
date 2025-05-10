const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: ' Menambahkan contact baru',
    builder: {
        nama:{
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP:{
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.simpanContact(argv.nama,argv.email,argv.noHP);
    },
}).demandCommand();

//Menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler(){
        contacts.listContact();
    },

});

//Menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama:{
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    },
});

//Menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus contact berdasarkan nama',
    builder: {
        nama:{
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    },
});

<<<<<<< HEAD
yargs.parse();
=======
yargs.parse();
>>>>>>> 50c1da001092c97bb64bac8e3af928cbcc1d31f2
