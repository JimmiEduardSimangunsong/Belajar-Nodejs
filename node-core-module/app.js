//core module
//file system
const fs = require('fs');

// menuliskan string ke file (syncronous)

// try{

//     fs.writeFileSync('data/test.txt','helloworld secara syncronus');
// } catch (e){
//     console.log(e);
// }


//menulis string ke file (ansycronus)
fs.writeFile('data/test.txt','hello jadi nimpa',(e) =>{
    console.log(e)
});
