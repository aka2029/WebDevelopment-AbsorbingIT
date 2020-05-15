// REGULAR EXPRESSIONS - EVALUATION FUNCTIONS [part 1]
// reg ex is a very complicated topic so, we'll be staying at the beginner and intermediate level - they have a lot of symbols and various things so, have to keep looking up. SO, A REGEX IS used to describe a pattern of char(s) so, it's used for pattern matching and pattern searching, they are commonly used for validation and pulling things out of a body of text or body of chars.

let re;
re = /hello/i; //this itself is regex

/* 
  Flage in regex:
      i - case insensitive [test() eg]
      g - Global search [Searches the entire para not just first instance]
*/

// /*
console.log(re);
console.log(re.source); //disregard the / and give actual exp(s)

// exec() - Return results in an array or null
const result = re.exec("hello world");
console.log(result);
console.log(result[0]); //open the array given by above command in console
console.log(result.index);
console.log(result.input);

//test() - Returns true or false
const result = re.test("Hello");
console.log(result);

// match() - Return result array or null
const str = "Hello There";
const result = str.match(re); //its not re.exec like exec() "Pay Attention"
console.log(result);

// search() - Returns index of first match if not found returns -1
const str = "Akash Hello There";
const result = str.search(re);
console.log(result);

// replace() - Return new string with some or all matches of a pattern
const str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);

// */
