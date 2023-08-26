CREATE DATABASE database_02_tenhocvien;

USE database_02_tenhocvien;

CREATE TABLE products(
    id int NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    product_code varchar(50) NOT NULL,
    price float NOT NULL,
    quantity int NOT NULL,
    total_number_of_product int,
    total_amount_money float,
    CONSTRAINT products_product_code_unique UNIQUE(product_code)
);

CREATE TABLE customers(
    id int NOT NULL PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    phone varchar(13),
    created_at timestamp,
    updated_at timestamp,
    CONSTRAINT customers_email_phone_unique UNIQUE(email,phone)
);

CREATE TABLE oder_list(
    id int NOT NULL PRIMARY KEY,
    customer_id int,
    total_products int,
    total_amount_money float,
    order_status tinyint,
    order_time timestamp,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

CREATE TABLE detail_order(
    id int NOT NULL PRIMARY KEY,
    customer_id int,
    product_id int,
    order_status tinyint,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

