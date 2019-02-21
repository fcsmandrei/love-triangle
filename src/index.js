module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;
	let first, second, third;
	const len = preferences.length;
	for(let i=0; i<len ; i++){
		third = preferences[i];
		second = preferences[third - 1];
		first = preferences[second -1];

		if (first == i+1 && second > i+1 && third > i+1){
            count++;
		}	
	};

	return count;
}