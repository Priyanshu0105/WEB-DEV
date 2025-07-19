const arr = [1 , 2 , 3 , 4 , 5];

for (const num of arr) {
    console.log(num);
}


// Maps collection of key value pair

const map = new Map()
map.set('in' , "india")
map.set('usa', "united states of america");

for (const [key , value] of map) {
        console.log(key , ':-' , value);    
}

arr.forEach(function(val){
    console.log(val);
})


// foreach nahi return krta koi value
