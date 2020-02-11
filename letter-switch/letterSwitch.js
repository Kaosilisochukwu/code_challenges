function switchChar(inputChar, actualChar, changeChar) {
    // Code goes here
    let result = '';
    for (let a = 0; a < inputChar.length; a++) {
        if (!actualChar.includes(inputChar[a])) {
            return result = -1;
        }
    }
    if (actualChar.length !== changeChar.length) {
        return result = 'Length mismatch';
    } else if (inputChar.length > actualChar.length) {
        return result = -1;
    }
    let resul = [];
    for (let i = 0; i < actualChar.length; i++) {
        if (!resul.includes(actualChar[i])) {
            resul.push(actualChar[i])
        } else {
            return result = 'Repeated value';
        }
    }
    for (let i = 0; i < inputChar.length; i += 1) {
        for (let j = 0; j < actualChar.length; j += 1) {
            if (inputChar[i] == actualChar[j]) {
                result += changeChar[j];
            }
        }
    }
    return result;
}


module.exports = switchChar;
