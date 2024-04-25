let guest_list = [`Ali`, `Asim`, `Anaya`, `Kashaf`];
for (let i = 0; i < guest_list.length; i++) {
    console.log('sir/mam' + guest_list[i] + ',\n\nwe invited you on birthday party tomorrow.\n\nThankyou\n');
}
let not_present : string = `Asim`;
let new_guest : string = `Adeena`;
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('sir/mam' + guest_list[i] + ',\n\nwe invited you on birthday party tomorrow.\n\nthankyou\n');
}
console.log(`Mr. ${not_present} will not come tomorrow birthday party.`)