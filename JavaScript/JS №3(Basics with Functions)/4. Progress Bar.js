function ProgresBar(n){
    let str="["
    if(n%10==0){
        for (let i = 0; i < n/10; i++) {
           str+="%"; 
        }
        for (let i = 0; i < 10-(n/10); i++) {
            str+=".";
        }
        str+="]";
        if(n!= 100)
        console.log(`${n}% ${str} \nStill loading...`);
        else
        console.log(`${n}% Complete! \n${str}`);
    }
}
ProgresBar(30);
ProgresBar(50);
ProgresBar(100);