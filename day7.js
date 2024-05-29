// //cd .. is used to comeback one directory.

// //readfilesync
// // we can write this line as=
//  const fs = require('fs');
// // const fs = require('node:fs');


//  const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  //to change buffer into particular styring -----
//  //one way is through encodinmg and second way is by using .toString()

//  //convert buffer to sting= data.toString();
// //  console.log(data.toString());

// console.log(data);


/* Buffer(global) */

//will give in hexadecimal.
// const b= new Buffer.from('abc');
// // console.log(b);
// console.log(b.toString());
// b.write('other');
// console.log(b.toString());


//write something in file
// const fs= require('fs');
// fs.writeFileSync('./myreadme.txt',"10th April 2024:Day 7");






//  const fs = require('fs');
//  console.log("start");
// const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  console.log(data);
//  console.log("end");


//blocking and non blocking behaviour

//  const fsPromises = require('fs/promises');
//  console.log('start');
//   const pr=fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
//   console.log(pr);
//   pr.then((res)=>{

//     console.log(res);
//   })
//   console.log('end');
//   console.log(pr);

//callback in filesystem

// const fs= require('fs');
// const data =fs.readFileSync('./myreadme.txt',{encoding:"utf-8"},(err,data)=>{
//     console.log(data);

// });

//http://localhost:1400/
// const http = require('http');
// const app= http.createServer((req,res)=>{
//     console.log('Request Recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html',
//     })
//     res.end("<h1  >Hello! </h1>");
// })
// app.listen(1600,()=>{
//     console.log('.....................server started.........');
// }) //1000<=local host <=9999 








const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('data.json', 'utf8');



// convert json string into object in javascript
const dataobj = JSON.parse(data);
const products = dataobj.products;
console.log(dataobj)
const htmlTemplate = `<!DOCTYPE HTML>
<html lang ="en">
   <head>
    </head>
    <style>
    .product-card{
        max-width:500px;
        margin:20px auto;
        border:3px double brown;
        border-radius:50%;
        padding:16px;
        display:felx;
        justify-content:center;
        text-align:center;
        background-color:pink;

    }
    </style>
     <body>
          products_cards
     </body>
          
</html>

`

const cardTemplate = `
<div class='product-card'>
<h4>Title</h4>
<p>Info</p>
</div>`




const allcards = products.map((elem) => {
    let newcard = cardTemplate;
    newcard = newcard.replace('Title', elem.title);
    newcard = newcard.replace('Info', elem.description);
    return newcard;

})


const page = htmlTemplate.replace('products_cards', allcards)


// const page=htmlTemplate.replace('products_cards',cardTemplate);



const app = http.createServer((req, res) => {

    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html',
    })
    res.end(page);
});
app.listen(3000, () => {
    console.log('server is live on http://localhost:3000');
}) //1000<=local host <=9999 




// ---------------------------
//npx nodemon script