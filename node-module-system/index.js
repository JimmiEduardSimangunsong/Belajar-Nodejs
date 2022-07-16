// const fs = require('fs');//core modul
// const cetakNama = require('./coba');//local modul
// const moment = require('moment');//third party module /npm module /node module

const coba = require('./coba');//local modul


console.log(
    coba.cetakNama('Jimmi '), 
    coba.PI,
    coba.mahasiswa.cetakMHS(),
    new coba.Orang()
    );
