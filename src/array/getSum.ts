export function getSum(array_of_number:number[]) {
    let sum = 0
    array_of_number.forEach((number) => {
        sum += number
    })
    return sum
}