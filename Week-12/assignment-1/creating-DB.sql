CREATE DATABASE PESTO;

CREATE TABLE cities (
  city_id INT NOT NULL AUTO_INCREMENT,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20) NOT NULL,
  PRIMARY KEY(city_id)
);

CREATE TABLE warehouses (
	warehouse_id INT NOT NULL AUTO_INCREMENT,
	city_id INT NOT NULL,
	name VARCHAR(30) NOT NULL,
	location VARCHAR(20) NOT NULL,
	extra_context JSON,
	PRIMARY KEY(warehouse_id),
	FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE stores (
	store_id INT NOT NULL AUTO_INCREMENT,
	warehouse_id INT,
	name VARCHAR(20) NOT NULL,
	location_city VARCHAR(20) NOT NULL,
	PRIMARY KEY(store_id),  
	FOREIGN KEY(warehouse_id) REFERENCES warehouses(warehouse_id)
);

CREATE TABLE customer (
	customer_no INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	address VARCHAR(50) NOT NULL,
    customer_city VARCHAR(20) NOT NULL,
	city_id INT NOT NULL,
	PRIMARY KEY(customer_no),
	FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE orders (
	order_no INT NOT NULL AUTO_INCREMENT,
	order_date DATE DEFAULT (CURRENT_DATE),
	customer_id INT NOT NULL,
    customer_no INT NOT NULL,
	PRIMARY KEY(order_no),
	FOREIGN KEY(customer_no) REFERENCES customer(customer_no)
);

CREATE TABLE items (
	item_no INT NOT NULL AUTO_INCREMENT,
	description TEXT NOT NULL,
	weight DECIMAL(5,2),
	cost DECIMAL(5,2),
	PRIMARY KEY(item_no)
);

CREATE TABLE items_orders_maps (
	id INT NOT NULL AUTO_INCREMENT,
	item_id INT NOT NULL,
	order_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(item_id) REFERENCES items(item_no),
	FOREIGN KEY(order_id) REFERENCES orders(order_no)
);

CREATE TABLE items_stores_maps (
	id INT NOT NULL AUTO_INCREMENT,
	item_id INT NOT NULL,
	store_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(item_id) REFERENCES items(item_no),
	FOREIGN KEY(store_id) REFERENCES stores(store_id)
);