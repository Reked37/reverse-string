function reverseString(str) {
  let result=''
  for (let char=str.length-1; char>=0; char--){
    result += str[char]
    console.log(result)
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// first must set up a loop that looks at the last character of the str
// Function must work its way backward and adding each cahracter to a new variable
// return the variable
// And a written explanation of your solution
