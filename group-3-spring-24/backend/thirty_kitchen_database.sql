CREATE DATABASE thirty_kitchen_database;
USE thirty_kitchen_database;
-- DROP DATABASE thirty_kitchen_database;

CREATE TABLE plants (
		plant_id INTEGER PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
		plant_name VARCHAR(50) NOT NULL,
        month_name VARCHAR(50) NOT NULL
 );

INSERT INTO plants
(plant_name, month_name)
VALUES 
('Carrot', 'January'),
('Cauliflower', 'January'),
('Parsnips', 'January'),
('Brussel sprouts', 'February'),
('Kale', 'February'),
('Leeks', 'February'),
('Savoy cabbage', 'March'),
('Cauliflower', 'March'),
('Asparagus', 'April'),
('Purple sprouting broccoli', 'April'),
('Spinach', 'May'),
('Lettuces', 'May'),
('Gooseberries', 'June'),
('Rocket', 'June'),
('Beetroot', 'July'),
('Blueberries', 'July'),
('Plums', 'August'),
('Aubergines', 'August'),
('Apples', 'September'),
('Tomatoes', 'September'),
('Marrow', 'October'),
('Quince', 'October'),
('Pears', 'November'),
('Potatoes', 'November'),
('Brussel sprouts', 'December'),
('Savoy cabbage', 'December');


CREATE TABLE customers (
		customer_id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
		first_name VARCHAR(30) NOT NULL,
		last_name VARCHAR(30) NOT NULL,
		email_address VARCHAR(60) NOT NULL UNIQUE,
        password VARCHAR(60),
		CONSTRAINT pk_customer_id  PRIMARY KEY (customer_id)
);


CREATE TABLE saved_recipes (
    customer_id INT NOT NULL,
    label VARCHAR(255) NOT NULL,
    url VARCHAR(1000) NOT NULL,
    ingredients TEXT NOT NULL,
    servings INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);


select * from saved_recipes;
select * from customers;

SELECT * FROM customers c
LEFT JOIN saved_recipes sr ON c.customer_id = sr.customer_id
ORDER BY c.customer_id;
