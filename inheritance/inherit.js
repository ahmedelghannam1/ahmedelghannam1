/**
 * Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
 * 
 */
Str=" I don't like Maharishi, University is not giving me chance to enjoy life."
bannedstr=["don't", "not"];
goodfunction=str.filter((acc,curr)=>{if (!bannedstr.includes(curr)) return curr;});
console.log(goodfunction);