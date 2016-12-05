var sorted = [3, 5, 7, 9, 12, 46, 79, 100];
var sorted2 = [1, 3, 10];


function bSearch(array, item) {

    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;


    while (low <= high) {

        mid = Math.floor((low + high) / 2);
        element = array[mid];

        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return true;
        }

    }

    return false;
};

console.log(bSearch(sorted, 5));
console.log(bSearch(sorted, 6));
console.log(bSearch(sorted2, 3));
