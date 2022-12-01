const arr = [8,3,6,5,6,8,23,94,-4,2,1,2,5,6,4,-1,7,-1, -5, 32,7,2,53,8,3,23,9,3,4,2,3,4,6,-9,1,7,1, -5, 23,-7,4,2,1,9,9,6,54,1,7,-1, 57, 37]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count', count)