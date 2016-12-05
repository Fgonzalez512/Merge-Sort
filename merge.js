var arrOne = [2, 4, 6, 8, 10, 14];
var arrTwo = [1, 3, 5, 9, 170];
var answer = [];

function merge(a, b) {

    while (a.length && b.length) {
        if (a[0] < b[0]) {
            answer.push(a.shift())
        } else {
            answer.push(b.shift())
        }
    }
    if (a.length) {
        answer.push(a[0]);
    }
    if (b.length) {
        answer.push(b[0]);
    }
    return answer;
};

console.log(merge(arrOne, arrTwo));
console.log(arrOne);
console.log(arrTwo);
