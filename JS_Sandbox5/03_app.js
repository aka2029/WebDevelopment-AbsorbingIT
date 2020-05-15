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

// Brackets [] - Character Sets
re = /gr[ae]y/i; //Must be an a or an e -> better than ?
re = /[GF]rey/; //Must be a G or F
re = /[^GF]rey/i; //Match anything except a G or F
re = /^[GF]rey/i; //Don't confuse, this means that begins with either g or f
re = /[A-Z]rey/; //Match any uppercase letter
re = /[a-z]rey/; //Match any lowercase letter
re = /[A-Za-z]rey/; //Match any letter of any case
re = /[0-9]rey/i; //Match any digit
re = /[0-9][0-9]rey/i; //Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //Must occur exactly {m to n} amt of times
re = /Hel{2,}o/i; // Must occur atleast {m} times

// Parenthesis () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/; //Word Character - alphanumeric or _ - looks at first
re = /\w+/; // + = one or more
re = /\W/; //Non-word character
re = /\d/; //Match any digit - looks at first
re = /\d+/; // + = one or more
re = /\D/; //Match any Non-digits
re = /\s/; //Match whitespace char
re = /\S/; //Match non-whitespace char
re = /Hell\b/i; //Word boundary - ie an indivisual word & not word inside of word

// Assertions - kind of like conditionals
re = /x(?=y)/; //Match x only if it is followed by y
re = /x(?!y)/; //Match x only if it is not followed by y

// String to match
const str = "xy"; //JUST KEEP CHANGING THIS TO SEE WORKING OF UPPER CODE

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
