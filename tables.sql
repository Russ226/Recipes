CREATE TABLE recipes(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	created_at TIMESTAMP DEFAULT NOW(),
	link VARCHAR(255)
);

CREATE TABLE ingredients(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	amount DECIMAL(6,2) NOT NULL,
	unit VARCHAR(20) NOT NULL	
);

CREATE TABLE ingredientConnection(
	recipe_id INT NOT NULL,
	ingredients_id INT NOT NULL,
	FOREIGN KEY(ingredients_id) REFERENCES ingredients(id),
	FOREIGN KEY(recipe_id) REFERENCES recipes(id)
);

CREATE TABLE steps(
	id INT AUTO_INCREMENT PRIMARY KEY,
	stepNumber int NOT NULL,
	description MEDIUMTEXT NOT NULL,
	recipe_id INT NOT NULL,
	FOREIGN KEY(recipe_id) REFERENCES recipes(id) 
);