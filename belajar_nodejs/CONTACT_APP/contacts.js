const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator');

//Membuat Folder Data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//Membuat File Contact JSON
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]','utf-8');
}

//Meload isian JSON
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

//Fungsi untuk menyimpan contact
const simpanContact = (nama,email,noHP) => {
    const contact = {nama, email, noHP};
    // const file = fs.readFileSync('data/contacts.json','utf-8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact();

    //cek duplikat nama
    const duplikat = contacts.find((contact) => contact.nama === nama || contact.email === email || contact.noHP === noHP);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama, email dan noHP lain!'));
        return false;
    }

    //cek validasi email
    if (email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
        return false;
        }
    }

    //cek noHP
    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.red.inverse.bold('noHP tidak valid!'));
    return false;
    }

    contacts.push(contact);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('Terima Kasih Sudah Memasukan Data.'));
};

//Fungsi Untuk Menampilkan List Contact
const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak: '));
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`)
    })
};

//Fungsi Untuk Menampilkan Detail Contact
const detailContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() == nama.toLowerCase());

    if(!contact){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    };

    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if(contact.email){
        console.log(contact.email);
    }
};

//Fungsi Untuk Menghapus Contact
const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );

    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    };

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

    console.log(chalk.green.inverse.bold(`Data contact ${nama} berhasil dihapus!`));
};

module.exports = {simpanContact, listContact, detailContact, deleteContact};

