export * from '@fuse/services/config/config.module';
export * from '@fuse/services/config/config.service';


// const https = require('https');

// https.get('https://trefle.io/api/v1/plants?token=4QYFxYmJx35DaophHRsUxZga5UV5dA35Nk3yryr3T60', (resp) => {
//     let data = '';

//     // A chunk of data has been recieved.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });