DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name varchar(500) NOT NULL,
  devoured BOOLEAN DEFAULT true,
  PRIMARY KEY (id)
);