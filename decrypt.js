var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var crypto = require("crypto");
var fs = require('fs'); 
 
<<<<<<< HEAD

   app.use(bodyParser.json());
   app.post("/login", function(request, response) {
       //console.log(request.body.user);
       //console.log(request.body.pass);
      
    privateKeyTxt = fs.readFileSync('priv.key').toString();
    privateKey = create.privateKey(privateKeyTxt);
    //conferir objeto de chave privada
    console.log(privateKey);
    
=======
   app.use(bodyParser.json());
   app.post("/login", function(request, response) {
       //console.log(request.body.user);
       //console.log(request.body.pass);
      
    privateKey = fs.readFileSync('priv.key').toString();

>>>>>>> fe1af763c607956cde166a20443221d7c5be8321
    let user = new Buffer(request.body.user, 'base64');
    
    const decryptedUser = crypto.privateDecrypt(
        {
		key: privateKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_mgf1,
		oaepHash: "sha256",
	    },
        user
    );

    console.log(user.toString('utf-8'));



    let pass = Buffer.from(request.body.pass, 'utf-8');
    console.log(pass.toString('utf-8'));
    const decryptedPassword = crypto.privateDecrypt(privateKey, pass)

    

});

//Start the server and make it listen for connections on port 8080
app.listen(8080)