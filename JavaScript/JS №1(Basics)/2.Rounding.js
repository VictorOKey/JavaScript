function rounding(num,accur){
    if (accur > 15)
    {
        console.log(parseFloat(num.toFixed(15)));
        
    }
    console.log(parseFloat(num.toFixed(accur)));
}
rounding(3.141592653589793238462643383279,14);
rounding(10.5,3);