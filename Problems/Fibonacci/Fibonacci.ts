let memory: number[] = [];

function fibonacci(number: number): number {
    if (memory[number] != null) {
        return memory[number];
    }

    const result = number < 2 ? number :fibonacci(number - 1) + fibonacci(number - 2);
    memory[number] = result;

    return result;
}

console.log(fibonacci(10));

//1 1 2 3 5 8 13 21 34 55