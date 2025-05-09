// console.log("Hello World");

const cetakNama = (nama) => `Halo, nama saya ${nama}`; // Function

const PI = 3.14; // Variable

const mhs = {
    nama: "wawan",
    umur: 20,
    cetakMhs(){
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    }
} // Object

class Orang{
    constructor(){
        console.log('objek orang telah dibuat');
    }
} // Class

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mhs = mhs;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     PI: PI,
//     mhs:mhs,
//     Orang: Orang
// }

module.exports = {cetakNama, PI, mhs, Orang};