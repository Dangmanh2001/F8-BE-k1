CREATE DATABASE database_03_manh;

USE database_03_manh;

CREATE TABLE information_products(
    id int primary key auto_increment,
    sku varchar(15) NOT NULL,
    name varchar(50) NOT NULL,
    original_price float DEFAULT 0,
    price float DEFAULT 0,
    description text,
    quantity int,
    user_manual varchar(100),
    created_at timestamp,
    updated_at timestamp,
    CONSTRAINT information_products_sku_unique UNIQUE(sku)
);

CREATE TABLE attributes(
    id int primary key auto_increment,
    name_attributes varchar(50) NOT NULL,
    attributes_id int NOT NULL,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (attributes_id) REFERENCES information_products(id)
);

CREATE TABLE value_attribute(
    id int primary key auto_increment,
    name varchar(50) NOT NULL,
    value_attribute_id int NOT NULL,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (value_attribute_id) REFERENCES attributes(attributes_id)
);

INSERT INTO information_products(sku,name,original_price,price,description,quantity,user_manual,created_at,updated_at)
VALUES ('KK12H3','Laptop',20000,30000,'Asus',30,'Thao tac nhu may tinh de ban',NOW(),NOW());
INSERT INTO information_products(sku,name,original_price,price,description,quantity,user_manual,created_at,updated_at)
VALUES ('KK12H4','Tivi',50000,100000.5,'Samsung',30,'Thao tac bang dieu khien',NOW(),NOW());
INSERT INTO information_products(sku,name,original_price,price,description,quantity,user_manual,created_at,updated_at)
VALUES ('KK12H5','Phone',15000.5,20000,'OPPO',0,'Thao tac tren man hinh',NOW(),NOW());


INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('RAM',1,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Color',1,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('VGA',1,NOW(),NOW());


INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('8GB',1,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('Black',1,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('RTX3060',1,NOW(),NOW());

INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Remote',2,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Nam ra mat',2,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Hang',2,NOW(),NOW());


INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('Magic Remote',2,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('2022',2,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('Samsung',2,NOW(),NOW());

INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Man hinh',3,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Camera',3,NOW(),NOW());
INSERT INTO attributes(name_attributes,attributes_id,created_at,updated_at)
VALUES('Bo nho',3,NOW(),NOW());


INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('6.7 inch, AMOLED, FHD+, 1080 x 2412 Pixels',3,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('64.0 MP + 32.0 MP + 8.0 MP',3,NOW(),NOW());
INSERT INTO value_attribute(name,value_attribute_id,created_at,updated_at)
VALUES('256 GB',3,NOW(),NOW());


SELECT * FROM information_products;


SELECT * FROM attributes WHERE attributes_id=1;
SELECT * FROM value_attribute WHERE value_attribute_id=1;


SELECT * FROM information_products WHERE quantity>0;