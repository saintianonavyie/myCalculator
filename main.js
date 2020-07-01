function myclick(a) {
    myForm.display.value += a;
}

function del() {
    var prevalue = myForm.display.value;
    myForm.display.value = prevalue.substr(0, prevalue.length -1);
}

function ac() {
    myForm.display.value = '';
}
function equalTo() {
    myForm.display.value = eval(myForm.display.value);
}

function fnsin() {
    myForm.display.value = Math.sin(myForm.display.value);
}
function fncos() {
    myForm.display.value = Math.cos(myForm.display.value);
}
function fntan() {
    myForm.display.value = Math.tan(myForm.display.value);
}
function square() {
    myForm.display.value = Math.pow(myForm.display.value, 2);
}
function squarert() {
    myForm.display.value = Math.pow(myForm.display.value, 1/2);
}
