function basicGetMaxMin(array, sliceQuantity) {
    let min = array[0];
    let max = array[0];

    for (let iteration = 1; iteration < sliceQuantity; iteration++) {
        if (array[iteration] > max) {
            max = array[iteration];
        }
        else if (array[iteration] < min) {
            min = array[iteration];
        }
    }

    return [max, min]
}

function composedGetMaxMin(array, sliceQuantity) {
    let outsideLast;
    let iteration = 0;

    let max = array[0];
    let min = array[0];

    if (sliceQuantity % 2 != 0) {
        outsideLast = array[sliceQuantity - 1];
    }

    while(iteration < sliceQuantity) {
        let current = array[iteration - 1];
        let next = array[iteration];

        let maxValue = current > next ? current : next;
        let minValue = maxValue === current ? next : current;

        if (maxValue > max) {
            max = maxValue;
        }

        if (minValue < min) {
            min = minValue;
        }

        iteration += 2;
    }

    if (outsideLast > max) {
        max = outsideLast;
    }

    if (outsideLast < min) {
        min = outsideLast;
    }

    return [max, min]
}

const array = [1, 2, 3, 4, 5, 6, 77, 12, 12, 42, 24, 345, 12, 12, 1, 23, 45, 8, 86]

console.time("basic max min - one per one")
console.log(basicGetMaxMin(array, array.length))
console.timeEnd("basic max min - one per one")

console.time("composed max min - two per two")
console.log(composedGetMaxMin(array, array.length))
console.timeEnd("composed max min - two per two")