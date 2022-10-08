let town = {
    name:"",
    longitude:0,
    latitude:0,

    createTown(info){
        this.name = info.split(' | ')[0];
        this.latitude = parseFloat(info.split(' | ')[1]).toFixed(2);
        this.longitude = parseFloat(info.split(' | ')[2]).toFixed(2);
    },

    showInfo(infoArray){
        for (let i = 0; i < infoArray.length; i++) {
            town.createTown(infoArray[i]);
            console.log(`{ town: '${town.name}' latitude: '${town.latitude}' longitude: '${town.longitude}' }`);    
        }
    }
    
}
town.showInfo(["Moscow | 55.7522 | 37.6156","Beijing | 39.913818 | 116.363625"]);