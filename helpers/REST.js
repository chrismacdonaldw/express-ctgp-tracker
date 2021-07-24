const http = require('http');
const https = require('https');

module.exports.getJSON = (options, onResult) => {
    const port = options.port == 443 ? https : http;
    let output = '';

    const req = port.request(options, (res) => {
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            output += chunk;
        });

        res.on('end', () => {
            let obj = JSON.parse(output.trimStart());

            onResult(res.statusCode, obj);
        });
    });

    req.on('error', (err) => {});

    req.end();
}