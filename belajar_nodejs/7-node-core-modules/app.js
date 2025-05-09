//core Module
//File Systems
const fs = require('node:fs');

// Menuliskan string ke file secara (synchronus)
// try{
//     fs.writeFileSync('data/test.txt','Hello World secara synchronus');
// } catch(e){
//     console.log(e);
// }


// Menuliskan string ke file secara (asynchronus)
// fs.writeFileSync('data/test.txt','Hello World secara Asynchronus',(e)=>{
//     console.log(e);
// });

//Membaca Isi File (synchronus)
// const data  = fs.readFileSync('data/test.txt','utf-8');
// console.log(data);

//Membaca Isi File (asynchronus)
// const data  = fs.readFile('data/test.txt','utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });


//READLINE
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { Console } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Masukan Nama Anda? ', (nama) => {
    rl.question('Masukan No HP Anda ? ', (noHP) => {
        const contact = {nama, noHP};
        const file = fs.readFileSync('data/contact.json','utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

        console.log('Terimakasih sudah memasukan data');

        rl.close();
})});