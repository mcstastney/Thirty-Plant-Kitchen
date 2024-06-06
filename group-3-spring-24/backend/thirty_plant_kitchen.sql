CREATE DATABASE IF NOT EXISTS thirty_plant_kitchen;
USE thirty_plant_kitchen;

CREATE TABLE IF NOT EXISTS Vegetable (
    vegetable_id INT PRIMARY KEY AUTO_INCREMENT,
    vegetable_name VARCHAR(100),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

CREATE TABLE IF NOT EXISTS Fruit (
    fruit_id INT PRIMARY KEY AUTO_INCREMENT,
    fruit_name VARCHAR(200),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

INSERT INTO Vegetable (vegetable_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Brussels Sprouts', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Kale', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Cabbage', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Leeks', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Parsnips', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Turnips', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Winter Squash', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1),
('Jerusalem Artichokes', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Potatoes', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Carrots', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Beetroot', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Cauliflower', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1),
('Broccoli', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Onions', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Garlic', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Peppers', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1),
('Tomatoes', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1);

INSERT INTO Fruit (fruit_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Apple', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Pear', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1),
('Plum', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
('Cherry', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1),
('Blackberry', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1),
('Raspberry', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1),
('Strawberry', 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0),
('Gooseberry', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Blueberry', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Redcurrant', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1),
('Blackcurrant', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1),
('Rhubarb', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0);

CREATE TABLE IF NOT EXISTS Legumes (
    legume_id INT PRIMARY KEY AUTO_INCREMENT,
    legume_name VARCHAR(200),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

INSERT INTO Legumes (legume_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Beans - Runner Beans', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0),
('Beans - Broad Beans', 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0),
('Peas - Garden Peas', 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0),
('Peas - Mangetout', 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0),
('Peas - Sugar Snap Peas', 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0),
('Peas - Field Peas', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1);

CREATE TABLE IF NOT EXISTS NutsAndSeeds (
    nutseed_id INT PRIMARY KEY AUTO_INCREMENT,
    nut_seed_name VARCHAR(200),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

INSERT INTO NutsAndSeeds (nut_seed_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Hazelnuts', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
('Walnuts', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1),
('Chestnuts', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1),
('Pumpkin Seeds', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
('Sunflower Seeds', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1);

CREATE TABLE HerbsAndSpices (
    herb_id INT PRIMARY KEY AUTO_INCREMENT,
    herb_name VARCHAR(200),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

INSERT INTO HerbsAndSpices (herb_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Mint - Spearmint', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1),
('Mint - Peppermint', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1),
('Thyme', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Rosemary', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Sage', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Chives', 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0),
('Parsley', 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0),
('Coriander', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0);

CREATE TABLE IF NOT EXISTS Grains (
    grain_id INT PRIMARY KEY AUTO_INCREMENT,
    grain_name VARCHAR(100),
    january BOOLEAN,
    february BOOLEAN,
    march BOOLEAN,
    april BOOLEAN,
    may BOOLEAN,
    june BOOLEAN,
    july BOOLEAN,
    august BOOLEAN,
    september BOOLEAN,
    october BOOLEAN,
    november BOOLEAN,
    december BOOLEAN
);

INSERT INTO Grains (grain_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Wheat', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0),
('Barley', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0),
('Oats', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0),
('Rye', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0),
('Spelt', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0);


CREATE TABLE IF NOT EXISTS customers (
		customer_id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
		first_name VARCHAR(30) NOT NULL,
		last_name VARCHAR(30) NOT NULL,
		email_address VARCHAR(60) NOT NULL UNIQUE,
        password VARCHAR(60),
		CONSTRAINT pk_customer_id  PRIMARY KEY (customer_id)
);


INSERT INTO customers
(first_name, last_name, email_address, password)
VALUES 
("Sadie", "Lock", "sadie@hotmail.com", "Testingpassword1"),
("Jimmy", "Brown", "jimmyboy@gmail.com", "Testingpassword2"),
("Charlotte", "Green", "cgreen@hotmail.com", "Testingpassword3"),
("Alfie", "Ryan", "alfralf@gmail.com", "Testingpassword4");

CREATE TABLE IF NOT EXISTS saved_recipes (
    customer_id INT NOT NULL,
    label VARCHAR(255) NOT NULL,
    url VARCHAR(1000) NOT NULL,
    ingredients TEXT NOT NULL,
    servings INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

SELECT * FROM customers c
LEFT JOIN saved_recipes sr ON c.customer_id = sr.customer_id
ORDER BY c.customer_id;
