function charectersInRange (char1, char2) {
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();
    let middleChars = [];

    const starCode = Math.min(code1, code2);
    const endCode = Math.max(code1, code2);

    for (let curCode = starCode + 1; curCode < endCode; curCode++){
       const curChar = String.fromCharCode(curCode);
       middleChars.push(curChar)
    }
    console.log(middleChars.join(' '));
}
charectersInRange('a','d');
//charectersInRange('#',':');
//charectersInRange('C','#');