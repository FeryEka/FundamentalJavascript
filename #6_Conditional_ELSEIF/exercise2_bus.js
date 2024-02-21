// The task of making public transportation. by using repetition

var amountBus = 10;
var operatingBus = 6;

for(var noBus = 1; noBus <= amountBus; noBus++){
    if (noBus <= operatingBus && noBus !== 5) {
        console.log('Bus No. ' + noBus + ' is operating well.');
    } else if(noBus === 8 || noBus === 10){
        console.log('Bus No. ' + noBus + ' is currently working overtime.');
    } else {
        console.log('Bus No. ' + noBus + ' is currently not in operation.');
    }
}