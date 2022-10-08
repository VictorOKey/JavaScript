function Sum(number) {
	let sum = 0;
	while (number != 0) {
		sum += number % 10;
		number = parseInt(number/10);
	}
	console.log(sum);
}
Sum(245678);
Sum(97561);
Sum(543);