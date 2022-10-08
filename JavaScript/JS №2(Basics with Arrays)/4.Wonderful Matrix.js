function solve(matrix) 
{
    let Wonder = true;
    let Sum = sum(matrix[0]);
    for (let i = 0; i < matrix.length; i++)
    {
        let row = matrix[i];
        if(sum(row) != Sum)
        {
            Wonder = false;
        }
    }
    for (let i = 0; i < matrix.length; i++) 
    {
		let SumCol = 0;
		for (let j = 0; j < matrix[i].length; j++) 
        {
			SumCol += matrix[j][i];
		}
		if (SumCol != Sum) Wonder = false;
	}
    console.log(Wonder);
}
function sum(arr) {
	return arr.reduce((value, sum) => sum += value)
}
solve([[4,5,6],
    [6,5,4],
    [5,5,5]]);

solve([[11,32,45],
       [21,0,1],
       [21,1,1]]);
       
solve([[1,0,0],
       [0,0,1],
       [0,1,0]]);