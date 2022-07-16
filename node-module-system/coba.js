// ini fumgsi
function cetakNama(nama){
    return `Hallo, nama saya ${nama}`;
}

// ini variabel
const PI = 3.14;

// ini objek
const mahasiswa = {
    nama: 'jimmi',
    umur: 20,
    cetakMHS(){
        return `hallo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

// ini kelas
class Orang{
    constructor() {
        console.log ('objek telah dibuat');
    }
}


// di eksport masing masing untuk digunakan secara gelobal
// module.exports.cetakNama = cetakNama ;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
    cetakNama: cetakNama,
    Pi : PI,
    mahasiswa: mahasiswa,
    Orang: Orang, 
};