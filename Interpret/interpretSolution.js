//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(first, second, third) {
    let eva = [];
    // eva.push(first)
    let check = ['+', '-', '*', '/']
    for (let i = 0; i < second.length; i += 1) {
        if (!check.includes(second[i])) {
            return -1;
        } else {
            eva.push(second[i]);
            eva.push(third[i]);
            let str = eva.join('');
            first = eval(first + str)
            eva = [];
        }
    }
    
    // eva.join('');
    return first;
}

module.exports = interpret;