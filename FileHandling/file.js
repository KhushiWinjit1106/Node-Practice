//we can use this fs to interact with the file system

const fs = require("fs");

//creataed a file and write data in it

fs.writeFileSync('./test.txt' , "hwllo i sucessfully creataed a file");

//this will do the same work .
fs.writeFile("./test2.txt", "Hello, World through async file!" , (err)=>{console.log("")}) ;


//reading a file
const res =fs.readFileSync("./contacts.txt" , "utf-8") ;

//reading a file
///this will give us error
// this expects a call back function

const res2 =fs.readFile("./contacts.txt" , "utf-8" , (err , res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res)
    }
}) ;

console.log(res);
console.log(res2)

// sync - this will run eaisly with out any error .

// async - this always expects a callback function otherwise it will give an error



//appending data an file

//this will append the data in the file

fs.appendFileSync("./test.txt"  , `${Date.now()} hello now\n`);



//for deleting a file

fs.unlinkSync("./text.txt")

//for seeing the stat of a file
console.log(fs.statSync("./test.txt"));

//there are many more file handlers