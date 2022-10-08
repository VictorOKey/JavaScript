function calc(num1, operation, num2) {
	if (operation == "+")
    {
        console.log((num1 + num2).toFixed(2));
    }
    if(operation == "-")
    {
        console.log((num1 - num2).toFixed(2));
    }
    if(operation == "/")
    {
        console.log((num1 / num2).toFixed(2));
    }
    if(operation == "*")
    {
        console.log((num1 * num2).toFixed(2));
    }
}
calc(50, "+", 50);
calc(120, "-", 20);
calc(200, "/", 2);
calc(40, "*", 2.5);