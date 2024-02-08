// POPUP BOX
// Have 3 sintaks it is alert, prompt, confirm
// this how to use all sintaks popup box

alert ('Selamat Datang..');
var perulangan = true;
while (perulangan === true) {
    var nama = prompt('Masukkan Nama : ');
    alert('Halo ' + nama);    

    perulangan = confirm('Coba Lagi?');
}

alert('Selamat Tinggal');