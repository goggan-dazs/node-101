//console.log(process.argv)

function sumAll(arr) {
    let sum = 0;
    for (let i = 2; i < process.argv.length; i++) {
        let number = Number(arr[i]);
        sum += number;
    }
    console.log(sum);
}
sumAll(process.argv);