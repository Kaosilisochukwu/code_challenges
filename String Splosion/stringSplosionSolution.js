function stringSplosion(str) {
    let strArr = str.split('');
    let result = [];
    for (let i = str.length; i > 0; i -= 1) {
        result.unshift(strArr.join(''));
        strArr.pop();
    }
    return result.join('')
}
module.exports = stringSplosion;