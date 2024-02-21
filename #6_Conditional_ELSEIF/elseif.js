var inputNumber = prompt('Input Number : ');

if (inputNumber % 2 == 0) {
    alert(inputNumber + ' is an odd number.');
} else if(inputNumber % 2 == 1){
    alert(inputNumber + ' is an even number.');
} else {
    alert('The input you entered is not a number.');
}