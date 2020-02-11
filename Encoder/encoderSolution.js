//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(letter, code) {
    let answer = [];
    let compare = {};
    for (let i = 0; i < letter.length; i += 1) {
        if (!compare.hasOwnProperty(letter[i])) {
            compare[letter[i]] = `${code[0]}`;
            code.shift();
            answer.push(compare[letter[i]]);
          }else if (compare.hasOwnProperty(letter[i])) {
           // letter[i] = `${code[0]}`;
            answer.push(compare[letter[i]]);
        }
    }
    return answer;
}

module.exports = encoderSolution;