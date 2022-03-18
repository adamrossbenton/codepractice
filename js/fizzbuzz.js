const fizzbuzz = num => {
    for (let i = 1; i <= num; i++) {
        const fizz = !(i % 3)
        const buzz = !(i % 5)
        if (fizz && buzz) {
            console.log("FizzBuzz")
        } else if (fizz) {
            console.log("Fizz")
        } else if (buzz) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(15)