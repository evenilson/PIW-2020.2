const http = require("http");

const app = require("./config/express")();

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server is listening on port "+app.get('port'));
});