function letterCombinations(input_digit) {
  //Complete the function
	let map = [ 0 , 1 , abc, def, ghi, jkl, mno, pqrs, tuv, wxyz];
	let output = [];
	for (let i = 0; i < input_digit.length; i++) {
		let digit = map[input_digit[i]];
		let combo = [];

		//outer loop form entire array
		for (let j = 0; j < output.length; j++) { 
			//to form combo 
			for (let k = 0; k <  digit.length; k++) {
				combo.push(output[j] + digit[k]);
			}
		}
		output = combo;
	}
	return output;
}

module.exports = letterCombinations;
