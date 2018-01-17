-- Shrimp Scampi with
INSERT INTO recipes(name, link)
  VALUES ("Shrimp Scampi with Pasta","http://allrecipes.com/recipe/229960/shrimp-scampi-with-pasta/?internalSource=streams&referringId=17245&referringContentType=recipe%20hub&clickId=st_trending_b");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("linguine pasta",16,'oz');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("butter",2,'tbsp');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("extra virgin olive oil",2,'tbsp');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("shallots",2,'finely diced');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("garlic",2,'cloves');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("red pepper flakes",1,'Pinch');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("shrimp peeled and deveined",1,'lb');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("dry white wine",.5,'cup');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("lemon juiced",1,'none');

INSERT INTO ingredients(name, amount, unit)
  VALUES ("parsley leaves",.25,'cup');

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'linguine pasta' AND amount = 16 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'butter' AND amount = 2 AND unit = 'tbsp'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'extra virgin olive oil' AND amount = 2 AND unit = 'tbsp'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'shallots' AND amount = 2 AND unit = 'finely diced'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'garlics' AND amount = 2 AND unit = 'cloves'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'red pepper flakes' AND amount = 1 AND unit = 'pinch'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'dry white wine' AND amount = .5 AND unit = 'cup'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'shrimp peeled and deveined' AND amount = 1 AND unit = 'lb'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'lemon juiced' AND amount = 1 AND unit = 'none'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'),(SELECT id FROM ingredients WHERE name = 'parsley leaves' AND amount = .25 AND unit = 'cup'));

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(1,"Bring a large pot of salted water to a boil; cook linguine in boiling water until nearly tender, 6 to 8 minutes. Drain.",
          (SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'));

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(2, "Melt 2 tablespoons butter with 2 tablespoons olive oil in a large skillet over medium heat. Cook and stir shallots,
          garlic, and red pepper flakes in the hot butter and oil until shallots are translucent,
          3 to 4 minutes. Season shrimp with kosher salt and black pepper; add to the skillet and cook until pink, stirring occasionally,
          2 to 3 minutes. Remove shrimp from skillet and keep warm.",
          (SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta'));

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(3,"Pour white wine and lemon juice into skillet and bring to a boil while scraping the
            browned bits of food off of the bottom of the skillet with a wooden spoon. Melt 2 tablespoons butter in skillet,
            stir 2 tablespoons olive oil into butter mixture, and bring to a simmer. Toss linguine, shrimp, and parsley in the butter mixture until coated
            season with salt and black pepper. Drizzle with 1 teaspoon olive oil to serve",
          (SELECT id FROM recipes WHERE name = 'Shrimp Scampi with Pasta)');


-- Bucatini All'Amatriciana

INSERT INTO recipes(name, link)
  VALUES("Bucatini All Amatriciana","http://allrecipes.com/recipe/245774/bucatini-allamatriciana/?internalSource=staff%20pick&referringId=17245&referringContentType=recipe%20hub");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("bucatini pasta", 5, "oz");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("extra-virgin olive oil", .25, "cup");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("crushed garlic", 3, "cloves");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("guanciale (cured pork cheek), sliced", 1.50, "oz");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("sliced red onion", .25, "cup");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("red pepper flakes", 1, "pinch");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("crushed San Marzano tomatoes", 8, "oz");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("salt and pepper to taste", 0, "none");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("freshly grated Pecorino Romano cheese", 1, "oz");

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'bucatini pasta' AND amount = 5 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'extra-virgin olive oil' AND amount = .25 AND unit = 'cup'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'crushed garlic' AND amount = 3 AND unit = 'cloves'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'guanciale (cured pork cheek), sliced' AND amount = 1.50 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'sliced red onion' AND amount = .25 AND unit = 'cup'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'red pepper flakes' AND amount = 1 AND unit = 'pinch'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'crushed San Marzano tomatoes' AND amount = 8 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'salt and pepper to taste' AND amount = 0 AND unit = 'none'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana'),(SELECT id FROM ingredients WHERE name = 'freshly grated Pecorino Romano cheese' AND amount = 1 AND unit = 'oz'));

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(1,"Fill a large pot with lightly salted water and bring to a rolling boil. Stir in bucatini and return to a boil.
            Cook, uncovered, stirring occasionally, until bucatini is tender, about 11 minutes. Drain.",
          SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana');

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(2,"Heat oil in a large skillet over medium-high heat. Add garlic cloves; cook until golden brown, about 1 minute.
            Remove with a slotted spoon and discard. Add guanciale; cook and stir until crisp and golden, about 4 minutes.
            Add onion and red pepper flakes; cook and stir until onion is translucent, about 3 minutes. Stir in tomatoes, salt,
            and black pepper. Simmer tomato sauce until flavors combine, about 10 minutes.",
          SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana');

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(3,"Stir bucatini and Pecorino Romano cheese into tomato sauce and toss until evenly coated.",
          SELECT id FROM recipes WHERE name = 'Bucatini All Amatriciana');



-- Baked Ziti

INSERT INTO recipes(names, link)
  VALUES ("Baked Ziti","http://allrecipes.com/recipe/11758/baked-ziti-i/?internalSource=hub%20recipe&referringId=17245&referringContentType=recipe%20hub");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("dry ziti pasta", 1, "lb");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("onion chopped", 1, "none");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("lean ground beef", 1, "lb");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("provolone cheese, sliced", 6, "oz");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("sour cream", 1.50, "cup");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("mozzarella cheese, shredded", 6, "oz");

INSERT INTO ingredients(name, amount, unit)
  VALUES ("grated Parmesan cheese", 2, "tbsp");

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'dry ziti pasta' AND amount = 1 AND unit = 'lb'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'onion chopped' AND amount = 1 AND unit = 'none'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'lean ground beef' AND amount = 1 AND unit = 'lb'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'provolone cheese, sliced' AND amount = 6 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'sour cream' AND amount = 1.50 AND unit = 'cup'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'mozzarella cheese, shredded' AND amount = 6 AND unit = 'oz'));

INSERT INTO ingredientConnection(recipe_id,ingredients_id)
  VALUES ((SELECT id FROM recipes WHERE name = 'Baked Ziti'),(SELECT id FROM ingredients WHERE name = 'grated Parmesan cheese' AND amount = 2 AND unit = 'tbsp'));

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(1,"Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.",
          SELECT id FROM recipes WHERE name = 'Baked Ziti');

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(2,"In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.",
          SELECT id FROM recipes WHERE name = 'Baked Ziti');

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(3,"Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows: 1/2 of the ziti,
            Provolone cheese, sour cream, 1/2 sauce mixture, remaining ziti, mozzarella cheese and remaining sauce mixture.
            Top with grated Parmesan cheese.",
          SELECT id FROM recipes WHERE name = 'Baked Ziti');

INSERT INTO steps(stepNumber, description, recipe_id)
  VALUES(4,"Bake for 30 minutes in the preheated oven, or until cheeses are melted.",
          SELECT id FROM recipes WHERE name = 'Baked Ziti');
