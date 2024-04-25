let current_user :string[] = ['taHa','daniYal','salMan','mOeez','Zohaib'];

let new_user :string[] = ['Bilal','taHa','Dawood','jameed','mOeez'];

new_user.forEach(newUsername =>{
   let lowerCase :string = newUsername.toLowerCase();

   if(current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`the user name ${newUsername} is not available. please write a different username`);
   }else{
    console.log(`The username ${newUsername} is available.`);
   }
})