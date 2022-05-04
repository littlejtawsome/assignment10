//STEP 1Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
// let words = 'webmaster';
// function alphabeticalOrdder(words) {
// 	var arrayS = words.split('').sort().join('');
// 	console.log(arrayS);
// 	// console.log(string.toLowerCase().split("").sort().join(""));
	
// }
// alphabeticalOrdder(words);
	
//         console.log(word.sort());
//STEP 2  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.Sample Data and OutputExample string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'


//// The split() method is used to split a String object into an array of strings by separating the string into substrings.
//// var lCase ='the quick brown fox' ;




// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function fUpperCase(lCase) {
// var uCase = lCase.split(' ');
// var nArray = [];
// for (var i = 0; i < uCase.length; i++){
//  nArray.push(capitalizeFirstLetter(uCase[i]));
// }  
// return nArray.join(' ');
// }
// console.log(fUpperCase("the quick brown fox"));

//STEP 3Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Sample Data and Output
// function vowelCount(sTring) {
// var vowel = 'aeiouAEIOU';
// var vcount = 0;
// for (var i = 0; i < vowel.length; i++) {
// 	if (vowel.indexOf(sTring) !== -1)
// 	{ vcount += 1;
// 	}
// }
// return vcount;
// }
// console.log(vowelCount('The quick brown fox' ));



//Case 2


// var newArray = [];
// vowel.forEach(element) => console.log(element);


// Example string: 'The quick brown fox' 
// Expected Output: 5

//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random characters.Sample Data and OutputExpected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

// function generateStringId(l) {
//     var text = "";
//     var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for(var i = 0; i < l; i++)
//     {
//         text += char_list.charAt(Math.floor(Math.random() * char_list.length));
//     }
//         return text;
// }
// console.log(generateStringId(8));
//STEP 5
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Sample Data and OutputSample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output: "United States of America"

var cNames = ("Argentina","Belgium","South Korea","	Guinea-Bissau","	Democratic Republic of the Congo","United States of America");

function find_longest_Country_Name(cNames){
    country_Name = "cNames.split(' ')";
    console.log(cNames);
//     var lengthCountries = " ";

//      for (var i = 0; i < cNames.length; i++){
//        lengthCountries.push(find_longest_Country_Name(lengthCountries));
// }  
//    return lengthCountries.join(' ');

}
find_longest_Country_Name(cNames);