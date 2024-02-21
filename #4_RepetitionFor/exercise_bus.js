// The task of making public transportation. by using repetition

var amountBus = 10;
var operatingBus = 6;
var noBus = 1;
while(noBus <= operatingBus){
    console.log('Bus Number ' + noBus + ' is operating well.');
    noBus++;
}
for(var noBus = operatingBus + 1; noBus <= amountBus; noBus++){
    console.log('Bus No. ' + noBus + ' is currently not in operation.');    
}