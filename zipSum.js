function zipSum (xs, ys) {
	var length = Math.min(xs.length, ys.length);
	var results = [];

	for(var i=0; i<length; i++) {
		results.push(xs[i]+ys[i]);
	}

	return results;
}
