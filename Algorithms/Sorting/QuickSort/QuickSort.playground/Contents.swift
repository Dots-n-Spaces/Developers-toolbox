func quickSortLomuto(_ numbers: inout [Int], left: Int, right: Int) -> [Int] {
    // Recursive, in-place version that uses Lomuto's scheme.
    if left < right {
        let p = lomutoPartion(&numbers, left: left, right: right)
        
        quickSortLomuto(&numbers, left: left, right: p - 1)
        quickSortLomuto(&numbers, left: p + 1, right: right)
    }
    
    return numbers
}

func lomutoPartion(_ numbers: inout [Int], left: Int, right: Int) -> Int {
    
    // We use the biggest item as the pivot.
    let pivotValue = numbers[right]
    
    // And begin from the smallest left value.
    var storeIndex = left
    
    // Partitioning array into four regions:
    //   [low..i] where values are <= than pivot
    //   [i+1..j-1] where values are > than pivot
    //   [j..high-1] values that we haven't looked at yet
    //   [high] is the pivot.
    for i in left..<right {
        if numbers[i] < pivotValue {
            (numbers[i], numbers[storeIndex]) = (numbers[storeIndex], numbers[i])
            storeIndex += 1
        }
    }
    (numbers[storeIndex], numbers[right]) = (numbers[right], numbers[storeIndex])
    return storeIndex
}

var numbers = [5, 15, 14, 1, 26, 0, 99]
print(quickSortLomuto(&numbers, left: 0, right: numbers.count-1))
