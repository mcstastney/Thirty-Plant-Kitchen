CREATE DATABASE seasonal_produce;
USE seasonal_produce;


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

INSERT INTO Vegetable (vegetable_name, january, february, march, april, may, june, july, august, september, october, november, december)
VALUES
('Brussels Sprouts', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1),
('Kale - Curly Kale', 0,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Kale - Tuscan Kale', 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);