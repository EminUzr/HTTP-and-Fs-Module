let http = require("http");
let fs = require("fs");

//server creation
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("Welcome");
  if (url === "/") {
    res.statusCode = 200;
    res.write("<h1>Main Page</h1>");
  } else if (url === "/about") {
    res.statusCode = 200;
    res.write("<h1>About Us</h1>");
  } else if (url === "/contact") {
    res.statusCode = 200;
    res.write("<h1>Contact Information</h1>");
  } else if (url === "/guides") {
    res.statusCode = 200;
    res.write("<h1>Available Guides</h1>");
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Not Found</h1>");
  }
  
  //logging requests to a log file
  fs.appendFile(
    "logfile.log",
    `request: ${url} status: ${res.statusCode}\n`,
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("Requested url has been logged to the selected file.");
    }
  );
  res.end();
});

//port
let port = 9000;

server.listen(port, () => {
  console.log(`Port ${port} online`);
});
