const http = require('http');

const fs=require('fs');
const data=fs.readFileSync('./data.json','utf8');
// console.log(typeof(data));

const dataObj=JSON.parse(data);
console.log("\n:dataObj:",dataObj);
const products=dataObj.products;
const htmlTemplate= fs.readFileSync('./templates/page.html',{encoding:'utf8'}); 
// <!DOCTYPE HTML>
// <html="en">
//     <head>
//     <style>
//     .product-card{
//         max-width:500px;
//         margin:20px auto;
//         border: 3px double brown;
//         border-radius:8px;
//         padding:16px;
//         background-color: plum;
//     }
//     </style>
//     </head>
//     <body>
//         __Productscards___
//         </body>
//         </html>
// `

const cardTEMPLATE=
fs.readFileSync('./templates/card.html','utf8');
// `
//  <div class='product-card'>
//  <h4>_TITLE_</h4>
//  <p>INFO</p>
//  </div>`

// const card1=cardTEMPLATE.replace('_TITLE_',products[0].title)
// .replace('INFO',products[0].description);

// const card2=cardTEMPLATE.replace('_TITLE_',products[1].title)
// .replace('INFO',products[1].description);

// const card3=cardTEMPLATE.replace('_TITLE_',products[2].title)
// .replace('INFO',products[2].description);

// // console.log("\n:card1:",typeof(card1));
// // console.log("\n:card2:",typeof(card1));

// const allCards=card1+card2+card3;



const allCards=products.map((elem)=>{
    let newCard=cardTEMPLATE;
    newCard=newCard.replace('_TITLE_',elem.title);
    newCard=newCard.replace('INFO',elem.description);
    newCard = newCard.replace('Img', elem.images[0] );
    newCard = newCard.replace('Price', elem.price );

    return newCard;
});
const allCardsString=allCards.join('   ');

const page=htmlTemplate.replace('__Productscards___',allCardsString);

const server = http.createServer((req,res)=>{
console.log(req.url);
res.writeHead(200,{
    'content-type':'text/html'
})
res.end(page)
});
// app.listen(1400);
server.listen(1400, ()=>{

    console.log('---------------------server started-------------------------') 
    
});