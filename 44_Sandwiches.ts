function makeSanwich(item:string[]){
    console.log('\nmaking your sandwich with: ');
    item.forEach(element => console.log("- " + element));

    console.log('enjoy your sandwich ! \n');
}

makeSanwich(['ham','cheese','lettuce']);

makeSanwich(['turkey','bacon']);

makeSanwich(['peanut butter','jelly']);
