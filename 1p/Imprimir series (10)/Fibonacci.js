var y = 11;
	var x = [0,1];

	for(i=2; i <= y; i++){
		x.push(x[i-1] + x[i-2]);
		console.log(x[i]+',');	
	}