function compute() {
    let v = document.getElementById("x").value; // get form's value
    let x = parseInt(v); // convert value to int
    if(x >= 1 && x <= 100) {
        let y = fibonacciRescursive(x);
        document.getElementById("numberX").innerText = x;
        document.getElementById("answerY").innerText = y;
    }
}

function fibonacciRescursive(x) {
    if(x > 2){
        return fibonacciRescursive(x-1) + fibonacciRescursive(x-2);
    }
    return 1; // todo implement recursive algorithm
}
function fibonacciIterative(x) {
    let current = 1;
    let last = 1;
    for (let i = 2; i < x; i++) {
        current = current + last;
        last = current - last;
    }
    return current;
}