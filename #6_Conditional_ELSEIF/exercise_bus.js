// The task of making public transportation. by using repetition

var amountBus = 10;
var operatingBus = 6;

for(var noBus = 1; noBus <= amountBus; noBus++){
    if (noBus <= operatingBus) {
        console.log('Bus No. ' + noBus + ' is operating well.');
    } else if(noBus == 8){
        console.log('Bus No. ' + noBus + ' is currently working overtime.');
    } else {
        console.log('Bus No. ' + noBus + ' is currently not in operation.');
    }
}