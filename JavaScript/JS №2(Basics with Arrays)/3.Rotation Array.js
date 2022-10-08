function solve(arr, e)
{
    console.log(arr.slice(e).concat(arr.slice(0,e)));
}
solve([51,47,32,61,21],2);