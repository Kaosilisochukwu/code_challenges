
function optimalDivision(numArray) {
    if(numArray.length== 0 ){
        return '0'
    }
    let result = [numArray[0]].toString();
    for(let i = 0; i < numArray.length; i += 1){

        if(numArray.length > 2){
            if(i == 0){
                result += '/('
            }else if(i != 0 && i != numArray.length - 1){
                result += (numArray[i].toString() + '/')
            }else if(i == numArray.length - 1){
               return result += (numArray[i].toString() + ')')
            }
        }else if(numArray.length == 2){
            if(numArray[i] == numArray[0]){
               return result += ('/' + numArray[1])
            }
        }else {
            return numArray.toString();
        }
    }
}
module.exports = optimalDivision;
