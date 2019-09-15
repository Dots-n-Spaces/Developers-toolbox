var memory: [Int: Int] = [:]

func fibonacci(number: Int) -> Int {

    if let result = memory[number] {
        return result
    }

    let result = number < 2 ? number : fibonacci(number:number - 1) + fibonacci(val:number - 2)
    memory[number] = result

    return result
}

print(fibonacci(number: 10))

//1 1 2 3 5 8 13 21 34 55
