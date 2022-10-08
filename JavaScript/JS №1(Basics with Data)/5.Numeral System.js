function BinToDec(binary) {
	let sum = 0;
	for(let i = 0; i < binary.length ; i++) 
    {
		sum += parseInt(binary[i]) * Math.pow(2, binary.length - i - 1);
	}
	console.log(sum);
}
BinToDec("00000001");
BinToDec("00001001");
BinToDec("11110000");