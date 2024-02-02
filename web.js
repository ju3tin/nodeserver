// Import Node.js core module i.e http
const http = require('http');
const axios = require('axios');
 
// Create web server
const server = http.createServer(function (req, res) {
 
    // Check the URL of the current request
    if (req.url == '/dude.json') {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.printify.com/v1/shops/14136938/products.json',
            headers: { 
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImVjODRkYTZjMWEyNjRkNThiZjgwNTNkZDJiOTY0OTJjZWE2ZjViY2RlYWE5M2Q4YTY4NDMwYzZhOTRiYmQ5Y2NkZWE3MGIzM2M1MzIxOGQ4IiwiaWF0IjoxNzA2NzA2Mzk1LjcwNTk3NCwibmJmIjoxNzA2NzA2Mzk1LjcwNTk3NiwiZXhwIjoxNzM4MzI4Nzk1LjY5OTUyLCJzdWIiOiIxMzg4OTc3NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Aj0cBLyGVuvg5f8-FcJ2QtY3dncxL8kBiCuEu6wCXOExkcgFlOB_Nu_HB9qj3awCLuM4IHyLOC6jbfAunF0', 
              'Cookie': '__cf_bm=d7tLShGkC0mxRrBTcONivM5EMqyG6WpA.x.AGqVVNcI-1706877623-1-AY18phuDvJ690O4mGkzASqSxiVSDRsyy0Fzb7oQwkt7wiXk8M9Tl9wueDjbUG6qa422ejz6Uw5NzUlOWu2pPdfE='
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          //  res.writeHead(200, { 'Content-Type': 'text/html' });
 
            // Set response content    
            res.write(JSON.stringify(response.data));
            res.end();//end the response
          })
          .catch((error) => {
            console.log(error);
          });
 
        // Set response header
      
 
    }
    else if (req.url == "/webtech") {
 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
        <html><body style="text-align:center;">
            <h1 style="color:green;">Welcome to GeeksforGeeks</h1>
            <a href="https://www.geeksforgeeks.org/web-technology/">
            Read Web Technology content
            </a>
        </body></html>`);
        res.end();//end the response
 
    }
    else if (req.url == "/DS") {
 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body style="text-align:center;">
        <h1 style="color:green;">GeeksforGeeks</h1>
        <a href="https://www.geeksforgeeks.org/data-structures/">
            Read Data Structures Content
        </a>
        </body></html>`);
        res.end(); //end the response
 
    }
    else if (req.url == "/algo") {
 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body style="text-align:center;">
        <h1 style="color:green;">GeeksforGeeks</h1>
        <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
        Read Algorithm analysis and Dude
        </a>
    </body></html>`);
        res.end(); //end the response
 
    }
    else
        res.end('Invalid Request!'); //end the response
 
    // Server object listens on port 8081
}).listen(3000, () => console.log('Server running on port 3000'));