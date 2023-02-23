const http = require('http');
//create a server instance
http.createServer((req,res)=>{
    if(req.url === "/"){
       res.write(`
         <h1>HTTP Server</h1>
         <b>An HTTP server is software that understands URLs <br>
         (web addresses) and HTTP (the protocol your browser uses to view webpages). <br>
         An HTTP server can be accessed through the domain names of the websites it stores,<br>
          and it delivers the content of these hosted websites to the end user's device.</b> ;
         <h1>NODEJS</h1>
         <h3>Node.js is a cross-platform, open-source server environment that can run on Windows,<br>
          Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, <br>
          runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
         </h3>
         <b>=> Node is Not a Library or a FrameWork<br/>
         <b>=> Node is an run time Environment</b></li></b></br>
         <b>=> NodeJs also created based on V8 engine</b>
       `);//sending json,text,errors,xml from server to client
       //"url" which holds the part comes after the domain name
     res.end();//used to close server
    }
    else if(req.method === 'GET' && req.url === '/home'){
        res.write('This is Home Page');////write a response to a client
        res.write(JSON.stringify([{"name":"Alice","Age":"27"}]));//JSON is to exchange data to/from a web server//sending data to a web server, the data has to be a string
        res.end();//end the response
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.write('This is About Page');
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
}).listen(8080);//the server instance listen on port 8080