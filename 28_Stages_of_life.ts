//set value for the variable age.
let age :number = 15;

//if person less than 2 years old
if(age < 2){
    console.log("person is a baby.")
}
//if person less than 4 years old


else if(age >= 2 && age <4){
    console.log("person is a toddler");
}
//if person less than 13 years old


else if(age >= 4 && age <13){
    console.log("person is a kid");
}
//if person less than 20years old


else if(age >=13 && age < 20){
    console.log("person is a teenager");
}
//if person less than 65years old

else if(age >=20 && age < 65){
    console.log("person is a adult");
}
//if person greater than 65 years old

else{
    console.log("person is an elder");
}