var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "u6sbyk66gnz0l1ik",
  password: "e61br5gvprs14gpy",
  database: "eec2x9q1mvu5xdgx"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
