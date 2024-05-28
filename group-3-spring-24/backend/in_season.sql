-- CREATE DATABASE inSeason;
USE inSeason;


-- CREATE TABLE Vegetable (
--     vegetable_id INT PRIMARY KEY AUTO_INCREMENT,
--     vegetable_name VARCHAR(100),
--     january BOOLEAN,
--     february BOOLEAN,
--     march BOOLEAN,
--     april BOOLEAN,
--     may BOOLEAN,
--     june BOOLEAN,
--     july BOOLEAN,
--     august BOOLEAN,
--     september BOOLEAN,
--     october BOOLEAN,
--     november BOOLEAN,
--     december BOOLEAN
-- );



-- CREATE TABLE Fruit (
--     fruit_id INT PRIMARY KEY AUTO_INCREMENT,
--     fruit_name VARCHAR(200),
--     january BOOLEAN,
--     february BOOLEAN,
--     march BOOLEAN,
--     april BOOLEAN,
--     may BOOLEAN,
--     june BOOLEAN,
--     july BOOLEAN,
--     august BOOLEAN,
--     september BOOLEAN,
--     october BOOLEAN,
--     november BOOLEAN,
--     december BOOLEAN
-- );

-- INSERT INTO Vegetable (vegetable_name, january, february, march, april, may, june, july, august, september, october, november, december)
-- VALUES
-- ('Brussels Sprouts', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Kale - Curly Kale', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Kale - Tuscan Kale', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Cabbage - Savoy Cabbage', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Cabbage - Red Cabbage', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Leeks - Winter Giant Leeks', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Leeks - Musselburgh Leeks', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Parsnips - Gladiator Parsnips', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Parsnips - Hollow Crown Parsnips', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Turnips - Purple Top Milan Turnips', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Turnips - Golden Ball Turnips', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Winter Squash - Butternut Squash', false, false, false, false, false, false, false, false, true, true, true, true),
-- ('Winter Squash - Acorn Squash', false, false, false, false, false, false, false, false, true, true, true, true),
-- ('Jerusalem Artichokes - Common Jerusalem Artichokes', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Jerusalem Artichokes - Fuseau Jerusalem Artichokes', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Potatoes - Maris Piper Potatoes', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Potatoes - King Edward Potatoes', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Carrots - Nantes Carrots', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Carrots - Chantenay Carrots', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Beetroot - Detroit Beetroot', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Beetroot - Chioggia Beetroot', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Cauliflower - Snowball Cauliflower', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Cauliflower - Purple Cauliflower', false, false, false, false, false, true, true, true, true, true, true, true),
-- ('Broccoli - Calabrese Broccoli', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Broccoli - Purple Sprouting Broccoli', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Onions - Red Onions', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Onions - Yellow Onions', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Garlic - Purple Garlic', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Garlic - White Garlic', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Peppers - Bell Peppers', false, false, false, false, false, true, true, true, true, true, true, true),
-- ('Tomatoes - Cherry Tomatoes', false, false, false, false, false, true, true, true, true, true, true, true),
-- ('Tomatoes - Beefsteak Tomatoes', false, false, false, false, false, true, true, true, true, true, true, true);


-- INSERT INTO Fruit (fruit_name, january, february, march, april, may, june, july, august, september, october, november, december)
-- VALUES
-- ('Apple - Bramley', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Apple - Cox', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Pear - Conference', false, false, false, false, false, false, false, true, true, true, true, true),
-- ('Plum - Victoria', false, false, false, false, false, false, false, false, false, true, true, true),
-- ('Cherry - Morello', false, false, false, false, false, false, false, false, false, false, true, true),
-- ('Blackberry - Loch Ness', false, false, false, false, false, false, false, false, true, true, true, true),
-- ('Blackberry - Helen', false, false, false, false, false, false, false, false, true, true, true, true),
-- ('Raspberry - Glen Ample', false, false, false, false, false, false, false, false, true, true, true, true),
-- ('Raspberry - Autumn Bliss', false, false, false, false, false, false, false, false, false, false, true, true),
-- ('Strawberry - Elsanta', false, false, false, false, true, true, true, true, false, false, false, false),
-- ('Strawberry - Cambridge Favourite', false, false, false, false, true, true, true, true, false, false, false, false),
-- ('Gooseberry - Invicta', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Gooseberry - Whinham''s Industry', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Blueberry - Bluecrop', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Blueberry - Duke', false, false, false, false, false, false, true, true, true, true, true, true),
-- ('Currant - Redcurrant', false, false, false, false, false, false, false, true, true, true, true, true),
-- ('Currant - Blackcurrant', false, false, false, false, false, false, false, true, true, true, true, true),
-- ('Rhubarb', false, false, true, true, true, true, true, true, true, true, false, false);

-- CREATE TABLE Legumes (
--     legume_id INT PRIMARY KEY AUTO_INCREMENT,
--     legume_name VARCHAR(200),
--     january BOOLEAN,
--     february BOOLEAN,
--     march BOOLEAN,
--     april BOOLEAN,
--     may BOOLEAN,
--     june BOOLEAN,
--     july BOOLEAN,
--     august BOOLEAN,
--     september BOOLEAN,
--     october BOOLEAN,
--     november BOOLEAN,
--     december BOOLEAN
-- );

-- INSERT INTO Legumes (legume_name, january, february, march, april, may, june, july, august, september, october, november, december)
-- VALUES
-- ('Beans - Runner Beans', false, false, false, false, false, true, true, true, true, true, true, false),
-- ('Beans - Broad Beans', false, false, true, true, true, true, true, false, false, false, false, false),
-- ('Peas - Garden Peas', false, false, false, true, true, true, true, false, false, false, false, false),
-- ('Peas - Mangetout', false, false, false, true, true, true, true, false, false, false, false, false),
-- ('Peas - Sugar Snap Peas', false, false, false, true, true, true, true, false, false, false, false, false),
-- ('Peas - Field Peas', false, false, false, false, false, false, false, true, true, true, true, true);

-- CREATE TABLE NutsAndSeeds (
--     nutseed_id INT PRIMARY KEY AUTO_INCREMENT,
--     nutseed_name_and_variety VARCHAR(200),
--     january BOOLEAN,
--     february BOOLEAN,
--     march BOOLEAN,
--     april BOOLEAN,
--     may BOOLEAN,
--     june BOOLEAN,
--     july BOOLEAN,
--     august BOOLEAN,
--     september BOOLEAN,
--     october BOOLEAN,
--     november BOOLEAN,
--     december BOOLEAN
-- );

-- INSERT INTO NutsAndSeeds (nutseed_name_and_variety, january, february, march, april, may, june, july, august, september, october, november, december)
-- VALUES
-- ('Hazelnuts', false, false, false, false, false, false, false, false, false, true, true, true),
-- ('Walnuts', false, false, false, false, false, false, false, false, false, false, true, true),
-- ('Chestnuts', false, false, false, false, false, false, false, false, false, false, true, true),
-- ('Pumpkin Seeds', false, false, false, false, false, false, false, false, false, true, true, true),
-- ('Sunflower Seeds', false, false, false, false, false, false, false, false, false, true, true, true);

-- CREATE TABLE HerbsAndSpices (
--     herb_id INT PRIMARY KEY AUTO_INCREMENT,
--     herb_name_and_variety VARCHAR(200),
--     january BOOLEAN,
--     february BOOLEAN,
--     march BOOLEAN,
--     april BOOLEAN,
--     may BOOLEAN,
--     june BOOLEAN,
--     july BOOLEAN,
--     august BOOLEAN,
--     september BOOLEAN,
--     october BOOLEAN,
--     november BOOLEAN,
--     december BOOLEAN
-- );

-- INSERT INTO HerbsAndSpices (herb_name_and_variety, january, february, march, april, may, june, july, august, september, october, november, december)
-- VALUES
-- ('Mint - Spearmint', false, false, false, false, false, true, true, true, true, true, true, true),
-- ('Mint - Peppermint', false, false, false, false, false, true, true, true, true, true, true, true),
-- ('Thyme', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Rosemary', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Sage', true, true, true, true, true, true, true, true, true, true, true, true),
-- ('Chives', false, false, false, false, true, true, true, true, true, true, false, false),
-- ('Parsley', false, false, false, false, true, true, true, true, true, true, true, false),
-- ('Coriander', false, false, true, true, true, true, true, true, true, true, true, false);

CREATE TABLE Grains (
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
('Wheat', false, false, false, false, false, false, false, false, false, false, false, false),
('Barley', false, false, false, false, false, false, false, false, false, false, false, false),
('Oats', false, false, false, false, false, false, false, false, false, false, false, false),
('Rye', false, false, false, false, false, false, false, false, false, false, false, false),
('Spelt', false, false, false, false, false, false, false, false, false, false, false, false);