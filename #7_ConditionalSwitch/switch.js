var item = prompt('masukkan nama makanan / minuman : \n MENU MAKANAN : Steak, nasi goreng, pecel telor \n MENU MINUMAN : Softdring, JOSHUA, SUSU,');

switch (item){
    case 'steak' :
        alert('Makanan / Minuman SEHAT!');
        break;
    case 'pecel' :
        alert('Makanan / Minuman SEHAT!');
        break;
    case 'susu' :
        alert('Makanan / Minuman SEHAT!');
        break;
    // You can use the option of not using a break within the same case/problem.
    case 'nasi' :
    case 'softdrink' :
    case 'joshua' :
        alert('Makanan / Minuman TIDAK SEHAT!');
        break;
    default :
        alert('Makanan yang anda masukkan tidak ada!');
        break;
}