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
    .then(function(input){
      var item = input.selectItemId;
      var quantity = input.unitPurchaseQuantity;

      connection.query("SELECT * FROM products WHERE ?", {item_id: item}, function(err, res){
        if (err) throw err;

        productData = res[0];
        //determine if enough items are in stock
        if (productData.stock_quantity > quantity) {
          console.log("Insufficient quantity in stock!");
          process.exit(-1);
        }
        // else if

      })



    });
}


  // Inquirer Example
  // inquirer.prompt([/* Pass your questions in here */]).then(answers => {
  //     // Use user feedback for... whatever!!
  // });
