var firstname = 'sravani';
console.log(firstname);
var a;
a = 10;
a = 'sandhya';
console.log(a);
console.log(firstname + ' ' + a);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 2000);
    
};
for ( i = 0; i < 5; i++) {
    _loop_1(i);
}
