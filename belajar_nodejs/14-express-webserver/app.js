const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
    // res.json({
    //     nama: 'Rifqi',
    //     email: 'rifqi@gmail.com',
    //     noHP: '081234567890',
    // });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.sendFile('./about.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
    // res.send('Contact Page');
    res.sendFile('./contact.html', {root: __dirname});
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.idCat}`);
});

app.use('/', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});


// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path,(err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('Error: file not found');
//         }else{
//             res.write(data);
//         }
//         res.end();   
// })
// };

// http
// .createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });
//     const url = req.url;

//     switch(url){
//         case '/about':
//             renderHTML('./about.html',res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html',res);
//             break;
//         default:
//             renderHTML('./index.html',res);
//             break;
//     };
// })
// .listen(port, () => {
//     console.log('Server is listening on port 3000...');
// });

