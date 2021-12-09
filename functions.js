/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  // ADD YOUR CODE HERE
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else{
      return 'No max number'
  }
};



/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
const maxOfThree = (a, b, c) => {
  // ADD YOUR CODE HERE
  if(a > b & a > c) {
      return a;
  }
  else if(b > a & b > c) {
      return b;
  }
  else if(c > a & c > b) {
      return c;
  }
  else{
      return 'There is no max number'
  }
};


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (letter) => {
  // ADD YOUR CODE HERE
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < vowels.length; i++){
      if(vowels[i] != letter){
          continue;
      }
      return true;
    }
    return false;
};

console.log(isCharacterAVowel('E'));

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

let array=[1, 2, 3, 4];
sumArray = array.reduce((a, b) => {
  // ADD YOUR CODE HERE
 return a+b;
});

multiplyArray = array.reduce((a, b) => {
  return a*b;
});

console.log(sumArray)
console.log(multiplyArray)
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

function test(a, e, s, h){
  console.log(arguments.length);
}
test("4","5",8, 5);

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  // ADD YOUR CODE HERE
  let word = "";
  for(let i = str.length -1; i>=0; i--) {
    word += str[i];
  }
  return word;
};

console.log(reverseString('evan is great'));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

let arr = ['dfgdg', 'dg', 'jhgjeddg', 'jdgh'];
findLongestWord = (arr) => {
  // ADD YOUR CODE HERE
  let longest = arr[0];
  for(let i = 0; i<arr.length; i++){
    if (longest.length < arr[i].length){
      longest = arr[i];     
    }   
  }
  return longest;
}

console.log(findLongestWord(arr));

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

let words = ['Hi', 'Hola', 'Hello', 'Hey', 'Yoooo']
let longWords = []
let x = 4
filterLongWords = (words) => {
  // ADD YOUR CODE HERE
  for (let i = 0; i<words.length; i++){
    if(words[i] > x){
      longWords.push(words[i]);
    }
    
  }  
  console.log(longWords)
};


console.log(filterLongWords(words));