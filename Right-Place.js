function rightPlace(str, char, result1) {
let result = str.replace('_', char);
let output = result === result1? "Matched":"Not Matched";
console.log(output);
}
//rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');