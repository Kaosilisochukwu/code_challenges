// a + b * c =>   abc*+

function solve(you) {
	debugger
	for(let i = 0; i < you.length; i += 1){
		if(you.includes('*')){
			if(you[i] == '*'){
				you.splice(you.indexOf('*') - 1, 3, (you[you.indexOf('*') - 1] + you[you.indexOf('*') + 1] + you[you.indexOf('*')]))
				i = 0
			}
		}
		if(you.includes('/') && !you.includes('*')){
			if(you[i] == '/'){
				you.splice(you.indexOf('/') - 1, 3, (you[you.indexOf('/') - 1] + you[you.indexOf('/') + 1] + you[you.indexOf('/')]))
				i = 0
			}
		}
		if(you.includes('+') && !you.includes('/') && !you.includes('*')){
			if(you[i] == '+'){
				you.splice(you.indexOf('+') - 1, 3, (you[you.indexOf('+') - 1] + you[you.indexOf('+') + 1] + you[you.indexOf('+')]))
				i = 0
			}
		}
		if(you.includes('-') && !you.includes('+') && !you.includes('/') && !you.includes('*')){
			if(you[i] == '-'){
				you.splice(you.indexOf('-') - 1, 3, (you[you.indexOf('-') - 1] + you[you.indexOf('-') + 1] + you[you.indexOf('-')]))
				i = 0
			}
		}
	}
}


function solution(expression) {
	//code goes in here....
	let testArr = [];
	let workingArr = expression.split(' ');
	if (workingArr.includes('(')){
		for (let i = workingArr.indexOf('(') + 1; i < workingArr.indexOf(')'); i += 1) {
			testArr.push(workingArr[i])
		}
		solve(testArr);
		workingArr.splice(workingArr.indexOf('('), (workingArr.indexOf(')') + 1 - workingArr.indexOf('(')), testArr[0])
	}
	solve(workingArr);
	return workingArr.toString();
}

module.exports = solution;