var mysql = require('mysql');
var fs = require("fs");
 
var connection = mysql.createConnection({
    host: 'database-1-test.cxeg9gyjktv6.ap-south-1.rds.amazonaws.com',
    user: 'test123',
    password: 'test1234',
    database: 'test',
    debug: false,
});
connection.connect();
 
var dog = {
    img: fs.readFileSync("11.jpg"),
    file_name: 'Dog'
};
 
var cat = {
    img: fs.readFileSync("12.jpg"),
    file_name: 'Cat'
};
 
var query = connection.query('INSERT INTO trn_image SET ?', dog, function(err,
    result) {
    console.log(result);
});
 
query = connection.query('INSERT INTO trn_image SET ?', cat, function(err,
    result) {
    console.log(result);
});
 
connection.end();