function vacation(num,type,day){
    cost = 0;
    grouping = 
    (type =="Students" && day =="Friday") ? cost = 8.45 :
    (type =="Students" && day =="Saturday") ? cost = 9.80 : 
    (type =="Students" && day =="Sunday") ? cost = 10.46 : 

    (type =="Corporate" && day =="Friday") ? cost = 10.90 : 
    (type =="Corporate" && day =="Saturday") ? cost = 15.60 : 
    (type =="Corporate" && day =="Sunday") ? cost = 16 : 

    (type =="Regular" && day =="Friday") ? cost = 15 :
    (type =="Regular" && day =="Saturday") ? cost = 20 :
    (type =="Regulare" && day =="Sunday") ? cost = 22.50 :   

    console.log("Что-то пошло не так, пожалуйста проверьте введённые данные (ಥ﹏ಥ)");
    if (type =="Students" && num >=30)
    {
        cost*=num;
        cost-=cost*0.15;
    }
    else if (type =="Corporate" && num >=100) 
    {
        num-=10;
        cost*=num;
    }
    else if (type == "Regular" && num >= 10 && num <= 20)
    {
        cost*=num;
        cost-=cost*0.05;
    }else {
        cost*=num;
    }
    console.log(`Total price: ${cost.toFixed(2)}`);
}
vacation(30,"Students","Sunday");
vacation(40,"Regular", "Saturday");