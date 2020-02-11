function minimumSteps() {
//  write your code here ....
let stairs = [1,1,1,0,1,0,1]
let maxPace = 3;
let count = 0;
for(let i = 0; i < stairs.length; i +=1){
    for(; maxPace > 0; maxPace -+ 1){
        console.log(i)
        console.log(maxPace)
        if(maxPace + i > (stairs.length - 1)){
            maxPace = stairs.length;
            console.log(maxPace)
        }else if(stairs[i + maxPace] == 1){
            count += 1;
            i += (maxPace -1);
        }else if(stairs[i + maxPace] == stairs[stairs.length - 1]){
         if(stairs[stairs.length - 1] == 1){
            return 'Finished with ' + (count + 1) + ' steps'
        }
        // else if((maxPace + i) == (stairs.length - 1)){
        //     if(stairs[stairs.length - 1] == 0){

        //     }
        }
    }
}
}

console.log(minimumSteps())
// if(stairs[i + maxPace] == 0){
//     i -= 1;
// }else 

console.log(minimumSteps(([1,1,1,0,1,0,1], 3)))

module.exports = minimumSteps;






