//Equility and inequility test 1
console.log("Equility test with string:", "Apple" === "Apple");
//Equility and inequility test 2
console.log("Inequility test with string:", ("Apple" as string) != "Orange");
//test 3
//Test Lower case Function
console.log("Lower case function test:", "HELLO".toLowerCase() === "hello");
//test 4
//Numerical test involving Equility and inequility
//Numerical test involving Equility
console.log("Equility test with number:", 26 === 26);
//Numerical test involving  inequility
console.log("inequility test with number:", (26 as number) != 36);


//Greater than and less than
//test 5 greater than
console.log("greater than test: ", 10 > 5);
//less than test
console.log("less than test: ", 5 < 10);
//Greater than or Equal to
console.log("Greater than and equal to", 10 >= 10);

//less than or equal to 
console.log("Less than and equal to", 5 <= 10);
//tests using "and" and "or"
//test usind "and"
console.log("And operator test", 5===5 && 10 > 5);
//test using "or"
console.log("And operator test", 5===5 || false);
//test whether an item array
const fruit :string[] = ['apple','banana','mango'];
console.log('test "apple" in the array: ', fruit.includes("apple"));
//test whether an item is not an array
console.log('testing "amrood" is not in the array: ', !fruit.includes("amrood"));


