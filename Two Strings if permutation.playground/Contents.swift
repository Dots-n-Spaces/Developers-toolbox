import Foundation

let a = "abbc"
let b = "ebabadcbbabbebabaabecbabc"

func howMany(a: String, b: String) -> Int {
    var i = 0
    let aLength = a.count

    for character in b {
        if a.contains(character) {
            let start = b.index(b.startIndex, offsetBy: i)
            let substring = b[start..b.endIndex]
            print(substring)
        }

        i += 1
    }

    return 0
}

howMany(a: a, b: b)
