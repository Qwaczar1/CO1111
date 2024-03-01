let testPairs = [
    { x: 1, expected: 1 },
    { x: 2, expected: 1 },
    { x: 4, expected: 3 },
    { x: 8, expected: 21 },
    { x: 32, expected: 2178309 }
];

function runTests() {
    let html = "";

    for(i in testPairs) {
        let pair = testPairs[i];
        let actualRec = fibonacciRescursive(pair.x);
        let successRec = actualRec === pair.expected;
        let actualItr = fibonacciIterative(pair.x);
        let successItr = actualItr === pair.expected;
        html +=
            "<tr>\n" +
            "    <td>" + pair.x + "</td>" +
            "    <td>" + pair.expected + "</td>" +
            "    <td>" + actualRec + "</td>" +
            "    <td><img src='" + (successRec ? 'correct.png' : 'wrong.png') + "' alt='Success or failed icon'/>" +
            "    <td>" + actualItr + "</td>" +
            "    <td><img src='" + (successItr ? 'correct.png' : 'wrong.png') + "' alt='Success or failed icon'/>" +
            "</td>";
    }

    document.getElementById("test-results-table").innerHTML += html;
}

runTests();