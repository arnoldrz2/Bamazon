CREATE DATABASE bamazondb;
USE bamazondb;

-- Create the table actors.
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(8, 2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY(item_id)
);

-- Insert a set of records.
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cheese", "food", 3.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bread", "food", 4.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "food", 5.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spinach", "food", 2.50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 20.00, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("table", "furniture", 50.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("football", "sport", 10.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("skateboard", "sport", 30.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothing", 40.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hat", "clothing", 6.50, 8);
