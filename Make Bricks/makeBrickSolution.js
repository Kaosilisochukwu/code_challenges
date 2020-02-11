function makeBricks(small, big, goal) {
    if(big + small < goal){
        if(goal%big != 0 && goal%5 !=0){
            return false
        }
    }
return((small + (big * 5)) >= goal)
}


console.log(makeBricks(6,3,10))

module.exports = makeBricks;