let emp = {
    First_Name:"",
    Last_Name:""
};
emp.id = () => {
    let a = 0;
    a = emp.First_Name.length + emp.Last_Name.length +1;
    return a;      
};
emp.create = (First_Name,Last_Name) => {
    emp.First_Name=First_Name;
    emp.Last_Name=Last_Name;
}
emp.show = (Employe) => {
   for (let i = 0; i < Employe.length; i++) {
    emp.create(Employe[i].split(" ")[0],Employe[i].split(" ")[1]);
        console.log(`Name: ${emp.First_Name} ${emp.Last_Name} - Personal Number: ${emp.id()}`);
    }
}
emp.show(["Silas Butler","Adnaan Buckley","Juan Peterson", "Brendan Villarreal"]);