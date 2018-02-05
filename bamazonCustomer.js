var inquirer = require('inquirer');
var mysql = require('mysql');

// var app = express();

// var port = 4000;

//MySQL Connection Setup Example
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazondb',
  port     : 3306
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
  displayProductInfo();
});

function displayProductInfo() {
  console.log("Welcome to Bamazon. Here are our products!\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    itemSelect();
  });
}


function itemSelect() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //Prompt User: "What would you like to buy?"
    inquirer
      .prompt([
        {
        name: "selectItemId",
        type: "input",
        message: "Please enter the item_id number of the product you would like to purchase."
      },
      {
        name: "unitPurchaseQuantity",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function(answer){
      //get info on chosen item
      var chosenItem;
      for (var i = 0; i < res.length; i++){
        if(res[i].item_id === answer.selectItemId) {
          chosenItem = res[i];
        }
      }

      //determine if enough items are in stock
      if (chosenItem.stock_quantity < parseInt(answer.unitPurchaseQuantity)) {
        console.log("Insufficient quantity in stock!");
        process.exit(-1);
      }
    });

  })
}


  // Inquirer Example
  // inquirer.prompt([/* Pass your questions in here */]).then(answers => {
  //     // Use user feedback for... whatever!!
  // });
