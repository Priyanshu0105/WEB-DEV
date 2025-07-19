(function chai(){
    console.log(`DB CONNECTED`);
})();

//IFFY GLOBAL SCOPE KE POLLUTION SE HTANE KE LIA USE KIYA


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('priyanshu')


// thoda this keyword arrow func aur execution context ke baare mei pdho