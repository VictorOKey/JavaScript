function adult(age){
    if (age >=0 && age <= 2)
    {
        console.log("Младенец")
    }
    else if (age >=3 && age <= 13)
    {
        console.log("Ребенок")
    }
    else if (age >=14 && age <= 19)
    {
        console.log("Подросток")
    }
    else if (age >=20 && age <= 65)
    {
        console.log("Взрослый")
    }
    else if (age >=65 )
    {
        console.log("Пожилой")
    }
    else
    {
    console.log("Что-то пошло не так, пожалуйста проверьте введённые данные (ಥ﹏ಥ)") ;
    }
}
adult(1);
adult(4);
adult(14);
adult(30);
adult(80);
adult(-1);