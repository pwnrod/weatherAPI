const http = require('http');
const APIkey = '71bef58271ccafecb8fe210067327e37';

const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=Louisville,KY&APPID=${APIkey}`, response => {
    let responseBody = "";

    response.on('data', dataChunk => {
        responseBody += dataChunk;
    });

    response.on('end', () => {
        console.log(responseBody);
    });
});

request.on('error', error => {
    console.error(error.message);
});