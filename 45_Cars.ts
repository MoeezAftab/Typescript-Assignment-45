import { features } from "process";

function storeCarInfo(manufacturer:string, modelName:string, ...extraOption: { [key : string]: any } [] ):object{
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
return carInfo;

};

let answare = storeCarInfo('Honda','civic', {color:'black'}, {features:['navigation','power window']})
console.log(answare)