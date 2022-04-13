var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        var title = queryData.id;
        if (title === undefined) {
            fs.readdir('./data', (err, filelist) => {
                title = 'Welcome';
                description = 'Hello Node.js';

                var list = '<ul>';
                let i = 0;
                while (i < filelist.length) {
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                list += '</ul>';

                var template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <h2>${title}</h2>
                <p>
                    ${description}
                </p>
                </body>
                </html>
            `;
                response.writeHead(200);
                response.end(template);
            })
        } else {
            fs.readdir('./data', (err, filelist) => {
                var list = '<ul>';
                let i = 0;
                while (i < filelist.length) {
                    list += `<li><a href="/?id=${filelist[i]}">${filelist[i++]}</a></li>`;
                }
                list += '</ul>';

                fs.readFile(`data/${title}`, 'utf-8', (err, description) => {
                    var template = `
                        <!doctype html>
                        <html>
                        <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
                        <h1><a href="/">WEB</a></h1>
                            ${list}
                        <h2>${title}</h2>
                        <p>
                            ${description}
                        </p>
                        </body>
                        </html>
                    `;
                    response.writeHead(200);
                    response.end(template);
                });
            });
        };

    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});

app.listen(3000);