-- Up
CREATE TABLE Microphone (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    price INTEGER,
    imageUrl TEXT
);

INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Blue', 'Amber', 99.99, '/microphones/blue-amber.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Blue', 'Bluebird SL', 299.99, '/microphones/bluebird.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Blue', 'Kiwi', 2000, '/microphones/blue-kiwi.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Blue', 'Spark', 399, '/microphones/blue-spark.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Blue', 'Yeti', 130, '/microphones/blue-yeti.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'NT-USB Mini', 100.00, '/microphones/nt-usb-mini.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Broadcaster', 350.00, '/microphones/rode-broadcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Podcaster', 145, '/microphones/podcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Nt1', 230, '/microphones/rode-nt1.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Nt1a', 220, '/microphones/rode-nt1a.png');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'NT-USB', 135, '/microphones/rode-ntusb.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Podmic', 105, '/microphones/rode-podmic.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Rode', 'Procaster', 130, '/microphones/rode-procaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Samson', 'USB', 179, '/microphones/samson-usb.jpeg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Shure', 'Beta 58a', 139, '/microphones/shure-beta-58a.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Shure', 'Beta 87a', 280, '/microphones/shure-beta-87a.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Shure', 'sm7b', 399, '/microphones/shure-sm7b.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) VALUES('Shure', 'Super-55', 200, '/microphones/shure-super55.jpg');

-- Down
DROP TABLE Microphone;
