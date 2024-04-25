let guest_list = [`Ali`, `Asim`, `Anaya`, `Kashaf`];
let not_present = 'Asim';
let new_guest = 'Adeena';
guest_list[1] = new_guest;

// for (let i = 0; i <guest_list.length; i++) {
//     console.log('sir/mam ' + guest_list[i] + ',\n\nwe invited you on birthday party tomorrow.\n\nthankyou\n');

// }
console.log(`Mr. ${not_present} will not come totmorrow birhday party.`);

console.log('good news! We find a big table so we are invting 3 more guest.')


guest_list.unshift('Zubair');
guest_list.splice(2 , 0 , 'Zain');
guest_list.push('Zohaib');

for (let i = 0; i <guest_list.length; i++) {
    console.log('sir/mam ' + guest_list[i] + ',\n\nwe invited you on birthday party tomorrow.\n\nthankyou\n');

}
console.log('\n sorry we can not arrange big table, Only two people will be invited.');

while(guest_list.length > 2 ){
   let Remove_guest =  guest_list.pop();
   console.log(`Sorry Mr. ${Remove_guest}, you are not invited.`);

}
for (let i = 0; i <guest_list.length; i++) {
    console.log('sir/mam ' + guest_list[i] + ',\n\nyou are still invited.\n\nthankyou\n');

}
guest_list.splice(0 , 2);
console.log(guest_list);