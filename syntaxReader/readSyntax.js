// function readSyntax(syntax) {
//     // code goes here
//     let obj = {
//         '(': ')',
//         '[': ']',
//         '{': '}',
//         '<': '>'
//     }
//     let myArr = syntax.split('');
//     for (let i = 0; i < syntax.length; i += 1) {
//         for (let j = 0; j < myArr.length; j += 1) {
//             if(obj.hasOwnProperty(syntax[i])){
//                 if(!myArr.includes(obj[syntax[i]])){
//                     return i;
//                 }
//             }
//             if (obj[syntax[i]] == myArr[j]) {
//                 if (j < i) {
//                     return j;
//                 } else {
//                     myArr[j] = 1;
//                     j = myArr.length;
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < myArr.length; i += 1) {
//         if (myArr[i] == ')' || myArr[i] == '}' || myArr[i] == '>' || myArr[i] == ']') {
//             return i;
//         }
//     }
//     for (let i = 0; i < myArr.length; i += 1) {
//         if (!myArr.includes(')') || !myArr.includes('}') || !myArr.includes('>') || !myArr.includes(']')) {
//             return 'ok';
//         }
//     }
// }



// function readSyntax(syntax) {
//     // code goes here
//     let obj = {
//         '(': ')',
//         '[': ']',
//         '{': '}',
//         '<': '>'
//     }
//     let myArr = syntax.split('');
//     for (let i = 0; i < myArr.length; i += 1) {
//         for (let j = 0; j < myArr.length; j += 1) {
//             if (obj[syntax[i]] == myArr[j]) {
//                 myArr[j] = 1;
//                 j = myArr.length;
//             }
//             if (obj.hasOwnProperty(syntax[i])) {
//                 if (obj[syntax[i]] == myArr[j] && j < i) {
//                     return j;
//                 }
//             }
//             if (!myArr.includes(obj[syntax[i]])) {
//                 return i
//             }
//         }
//         return 'ok'
//     }
// }


function readSyntax(syntax) {
    // code goes here
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }
    let myArr = syntax.split('');
    if(syntax == ''){
        return 'ok';
    }
   // debugger;
    for (let i = 0; i < myArr.length; i += 1) {
        for (let j = 0; j < myArr.length; j += 1) {
            if(obj.hasOwnProperty(myArr[i])){
                if(obj[myArr[i]] == myArr[j]){
                    if(j < i){
                        return j
                    }else if(i < j){
                        myArr[j] = 1;
                        j = myArr.length;
                    }
                }else if(!myArr.includes(obj[myArr[i]])){
                    return i;
                }
            }else if(myArr[i] == 1){
                j = myArr.length;
            }else if(!obj.hasOwnProperty(myArr[i]) && myArr[i] != 1){
                return i;
            }
        }
    }
    return 'ok'
}
module.exports = readSyntax;
