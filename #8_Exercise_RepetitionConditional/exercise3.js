var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10 - i; j++) {
        s += ' ';
    }
    for (var k = 0; k <= i * 2; k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        s += ' ';
    }
    for (var k = 0; k < (10 - i) * 2 - 1; k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);