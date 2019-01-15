function add(fNum, sNum){
    document.getElementById("output").innerHTML = "";

    let a = +fNum + +sNum;
    document.getElementById("output").innerHTML = a;

} 
function subtract(fNum, sNum){
    document.getElementById("output").innerHTML = "";
    let s = fNum - sNum;

    document.getElementById("output").innerHTML = s;

}
function multiply(fNum, sNum){
    document.getElementById("output").innerHTML = "";
    let m = fNum * sNum;

    document.getElementById("output").innerHTML = m;

}
function divide(fNum, sNum){
    document.getElementById("output").innerHTML = "";
    let d = fNum / sNum;

    document.getElementById("output").innerHTML = d;

}