// REGULAR EXPRESSIONS - METACHARACTER SYMBOLS [part 2]

let re;
// Literal Charecters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with h, & can be case insensitive
re = /d$/i; //Must end with h
re = /^hello$/i; //Must begin & end with
re = /h.llo/i; //Matches any ONE character-wild card for 1 char
re = /h*llo/i; //Matches any char 0 or more times
re = /gre?a?y/i; //Optional char(s) either this or this or none
re = /gre?a?y\?/i; //Escape character - no longer optional - now ? is taken as literal

// String to match
const str = "grey";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
