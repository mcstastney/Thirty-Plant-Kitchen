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
        saved_recipe VARCHAR(200),
		CONSTRAINT pk_customer_id  PRIMARY KEY (customer_id)
);

INSERT INTO customers
(first_name, last_name, email_address, saved_recipe)
VALUES 
("Sadie", "Lock", "sadie@hotmail.com", "Spinach and mushroom omlette"),
("Jimmy", "Brown", "jimmyboy@gmail.com", "Chicken and sweet potato tagine"),
("Charlotte", "Green", "cgreen@hotmail.com", "Tuna and avacado salad"),
("Alfie", "Ryan", "alfralf@gmail.com", NULL),
("Roisin", "Johns", "rosie@hotmail.com", "Beef potato and tomato hotpot"),
("Daisy", "Duke", "daisy@hotmail.com", "Tofu and peasnap stirfy"),
("India", "Frost",  "frosty@hotmail.com", NULL);
