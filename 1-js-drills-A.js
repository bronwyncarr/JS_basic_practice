// JS Drills

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that I learned how to do well before I asked how they function. There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same. 

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, puts out the structure you have made to make sure that it is what you hoped it was. I’m looking for accuracy - I want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.

function adder(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) {
            throw "Input is not a number"
        }
        return num1 + num2
    }
    catch (err) {
        console.log(`An error has occured: ${err}`)
    }
}

// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats. 
console.log(adder(1, 3))
console.log(adder(1.2, 3.555))
console.log(adder(15, "hello"))
console.log(adder(0, 3))

// 3. Define two integer and two float variables, and use them as arguments to this method you have made.
const num1 = 10;
const num2 = 15;
const num3 = 7.5;
const num4 = 6.3;

console.log(adder(num1, num2))
console.log(adder(num3, num4))

// ============================================
// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.
const obj = {
    name: "string",
    age: 33,
    alive: true,
    address: {
        street: "1 Main street",
        suburb: "melbourne",
        state: "Victoria"
    }
}

// 5. Access two of the values in your object, and log them to the screen.
console.log(obj.alive);
console.log(obj.address.street);

// ============================================
// 6. Create another object with one key and value pair.
const myObj = {
    name: "me"
}

// 7. Define a function that takes that type of object as the input, and log out the value of that key.
const myFunc = (myObj) => console.log(myObj.name)

myFunc(myObj)
// ============================================
// 8. Make an object with three keys and values, and assign it to a variable.
const cat = {
    name: "Winter",
    breed: "Siamese",
    age: 4
}

// 9. Make four more objects with the same keys.
const dog = {
    name: "Lex",
    breed: "Cross",
    age: 7
}

const hamster = {
    name: "Ivy",
    age: 3,
    breed: "n/a"
}

const bird = {
    name: "Slink",
    age: 4,
    breed: "budgey"
}

const horse = {
    name: "Button",
    age: 10,
    breed: "stallion"
}
// 10. Access a value from three of these objects.
console.log(dog.name)
console.log(bird.age)
console.log(horse.breed)

// ============================================
// 11. Define a variable and assign to it an empty array.
let arr = []

// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.
const arrayBuilder = (arr, obj) => arr.push(obj)

// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.
arrayBuilder(arr, dog);
arrayBuilder(arr, cat);
arrayBuilder(arr, bird);
arrayBuilder(arr, horse);

// 14. Make sure that the array contains four hashes (maybe log to the screen).
console.log(arr)

// 15. Access two elements of the array that you have created (via an index)
console.log(arr[0])
console.log(arr[1])

// 16. For one of these, now access one of the values of the object at that is located at that index.
const dogBreed = arr[0]["breed"]

console.log(dogBreed)

// ============================================
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.
function logger(arr, obj) {
    try {
        if (typeof arr !== 'object' || typeof obj !== 'object') {
            throw "invalid type"
        }
        console.log(arr[0])
        console.log(obj.name)
    } catch(err) {
        console.log(`Sorry something went wrong: ${err}`)
    }
}

// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four. Make the first key consistent across these objects.
const javascript = {
    name: "javascript",
}

const ruby = {
    name: "ruby",
    fun: true
}

const python = {
    name: "python",
    fun: true,
    learnt: "not yet"
}

const java = {
    name: "ruby",
    fun: true,
    learnt: "no",
    level: "low"
}

// 19. Define two different arrays, with two different datatypes.

const colors = ["blue", "green", "pink"]
const numbers = [1, 3, 7, 8]

// 20. Call the function four times, once with each object, and use the arrays you made.
logger(colors, javascript)
logger(numbers, ruby)

// ============================================
// 21. Write a function that takes five arguments: three strings, and two numbers.
const fiveArgs = (arg1, arg2, arg3, num1, num2) =>  {
    try {
        if (typeof arg1 !== 'string' || typeof arg1 !== 'string' || typeof arg1 !== 'string') {
            throw "first three values must be a string"
        }
        if (isNaN(num1) || isNaN(num2)) {
            throw "last two values must be a number"
        }
        console.log("You entered the correct datatype")
    } catch (err) {
        console.log(`An error occured: ${err}`)
    }
}

// 22. Call that function three times.
fiveArgs("d", "f", "g", 1, 2)
fiveArgs(9, "f", "g", 1, 2)
fiveArgs("a", "r", "e", "hello", 9)