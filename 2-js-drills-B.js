// The next set of drills are a bit more difficult. I know that sometimes it might be hard to work out what is meant by the question, but I ask that you stay with it and do your best to piece it apart - sometimes it is hard to express these questions without some confusion. I am happy to give answers to some of the questions if that will help with the understanding so that you can move forward. Where a question asks for a log to screen, the simplest thing will be to log the name of the function. Most times in these questions it is not what the function does that will be important, but rather how that function sits within the object, or even within the other function.

// 1. Define an object that has two keys. One will have the value of a string, and the other a function (and this function can simply log its own name to screen).
const obj = {
  string: "hello",
  func: function innerfunc() {
    return "inner func";
  },
};

// 2. Log the string to screen.
console.log(obj.string);

// 3. Log the entire function to screen.
console.log(obj.func);

// 4. Invoke the function within the object.
console.log(obj.func());

// ============================================
// 5. Define an object that has three keys, and each key has the value of an anonymous function. In each function log something to screen (different in each function).
const myObj = {
  func: function () {
    console.log("Hello");
  },
  func: function () {
    console.log("Bye");
  },
  func3: function () {
    console.log("Hello again");
  },
};

// 6. Call each function (through the object).
obj.func();
obj.func();
obj.func();

// ============================================
// 7. Make a function that returns an object that has two keys, one key with a string value, and the other that has an anonymous function as its value.
const newFunction = () => {
  return (newobj = {
    string: "salut",
    funct: () => console.log("bonjour"),
  });
};

// 8. Log to screen the result of invoking this function.
newFunction();

// 9. Work out how to log to screen the value of the returned object’s string.
console.log(newFunction().string);

// 10. Invoke the returned object’s function (via the first function - you will need to return the object, and then call the function within the returned object).
newFunction().funct();

// ============================================
// 11. Write a function that takes a number and a function as an argument. Inside this function perform three simple calculations with the given number (the first argument), and then pass the final result to the function that is passed as the second argument.
const twelve = (num, callback) => {
  result = num + 3 - 1 + 4;
  callback(result);
};

// 12. Call this function three times with different numbers, and a different anonymous callback function each time (perhaps each time the callback doing a different simple calculation).
twelve(3, () => console.log(` result is ${result}`));
twelve(12, () => console.log(`Calculator says: ${result}`));
twelve(7, () => console.log(` result is ${result}`));

// 13. Now write two functions that take a number as an argument, and do some very simple calculation.
const thirteenA = (num) => {
  return num / 2;
};

const thirteenB = (num) => {
  return num * 2;
};

// 14. Invoke the function from 11 twice, each time with a different number argument, and using each of the two functions that you just defined in 13 (one in each invocation).
twelve(8, thirteenA);
twelve(4, thirteenB);

// ============================================
// 15. Define three very basic functions that take no arguments and that simply console out the name of the function.
function namedOne() {
  console.log(namedOne.name);
}

function namedTwo() {
  console.log(namedTwo.name);
}

function namedThree() {
  console.log(namedThree.name);
}

// 16. Place each of these functions into an array (do not call the functions).
const funcArray = [namedOne, namedTwo, namedThree];

// 17. Loop through this array and invoke each of the functions in turn.
funcArray.forEach((func) => func());
// ============================================
// 18. Define a function (funcReturnsFunc) that returns an anonymous function. If you like you can have funcReturnsFunc log out something before it returns the function. The returned function can just log out a simple message to inform you it ran.
let funcReturnsFunc = () => {
  console.log("you're here");
  return () => {
    console.log("I ran");
  };
};
// 19. Invoke funcReturnsFunc, and store the result in a const.
const value = funcReturnsFunc();

// 20. Using that const, run the returned function.
value();

// 21. Now do the same thing in one line: run funcReturnsFunc, and then run the anonymous function that results immediately.
funcReturnsFunc()();
