function solve(food, delivery){
    arr_food = new Array();
    arr_delivery = new Array();
    for(let i = 0; i < food.length; i = i + 2) 
    {
        let shop_prod = {name: food[i], quantity: Number(food[i + 1])};
        arr_food.push(shop_prod);
    }
    for(let j = 0; j < delivery.length; j = j + 2) 
    {
        let delivery_prod = {name: delivery[j], quantity: Number(delivery[j + 1])};
        arr_delivery.push(delivery_prod);
    }
    for(let i = 0; i < arr_food.length; i++) 
    {
        for(j=0; j < arr_delivery.length; j++)
        
           if(arr_food[i].name === arr_delivery[j].name)
           {
            arr_food[i].quantity +=  arr_delivery[j].quantity;
            arr_delivery.splice(j, 1);
           }   
    }

    for(let i = 0; i < arr_food.length; i++) console.log(arr_food[i].name + " -> " + arr_food[i].quantity);
    for(let j = 0; j < arr_delivery.length; j++) console.log(arr_delivery[j].name + " -> " + arr_delivery[j].quantity);
}    
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);