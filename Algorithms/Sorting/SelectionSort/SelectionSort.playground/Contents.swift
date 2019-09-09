func selectionSort(numbers: [Int]) -> [Int] {
    var sortedNumbers = numbers
    
    for i in 0..<sortedNumbers.count-1 {
        var minIndex = i
        for j in i..<sortedNumbers.count {
            if sortedNumbers[j] < sortedNumbers[minIndex] {
                minIndex = j
            }
        }
        
        let temp = sortedNumbers[minIndex]
        sortedNumbers[minIndex] = sortedNumbers[i]
        sortedNumbers[i] = temp
    }

    return sortedNumbers
}

let numbers = [5, 15, 14, 1, 26, 0, 99]

print(selectionSort(numbers: numbers))
