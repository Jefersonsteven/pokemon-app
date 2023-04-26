function intersection(arr1, arr2) {
    const result = [];

    let i = 0;
    while (i < arr2.length) {
        if (arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
        i++;
    }

    return result;
}

console.log(intersection([20, 1, 3, 5, 7, 10], [1, 2, 7, 3, 6, 8, 10, 20]));
