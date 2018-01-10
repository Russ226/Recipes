var mysql = require('mysql');


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "pen226",
	database: "recipeDB",
	multipleStatements: true
});


connection.connect(function(err){
	if (err) {
	    console.error('Error:- ' + err.stack);
	    return;
    }
 
    console.log('Connected Id:- ' + connection.threadId);

});



//insertion of new rcipe
function insertRecipe(recipe){
	var sql = "INSERT INTO recipes (name, link) VALUES (?, ?)";
	var recipeSelector = 'SELECT id AS reId FROM recipes WHERE name = ?';

	connection.query(sql,recipe,function(err,result){
		if(err)
			throw err;
		console.log("insertion is successful " + result.affectedRows);

		connection.query(recipeSelector,recipe[0],function(err,result){
			if(err)
				throw err;

			var recipeId = result[0].reId;
			
			console.log("recipe ID " +recipeId);
		});
	});

}

function insertIngredients(ingredients){
	var sql = "INSERT INTO ingredients (name, amount,unit) VALUES (?, ?, ?)";
	var ingredientSelector = "SELECT id AS inId FROM ingredients WHERE name = ? AND amount = ? AND unit = ?";

	connection.query(ingredientSelector,ingredients,function(err, result){
		
		if(result.length < 1){
			connection.query(sql,ingredients, function(err,result){
				if(err)
					throw err;
				console.log("insertion is successful " + result.affectedRows);

			});
		}

		else{
			console.log("ingredient already exists");
		}
	});
}


function linkTables(recipe,ingredients){
	 
	 var insertConnection = "INSERT INTO ingredientConnection(recipe_id, ingredients_id) VALUES (?,?)";
	 var recipeSelector = 'SELECT id AS reId FROM recipes WHERE name = ?';
	 var ingredientSelector = "SELECT id AS inId FROM ingredients WHERE name = ? AND amount = ? AND unit = ?";
	 
	 connection.query(recipeSelector,recipe[0],function(err,results){
	 	if(err)
	 		throw err;
	 	var recipeId = results[0].reId;
	 	
	 	console.log("successful look in recipes");

	 	
	 	connection.query(ingredientSelector,ingredients,function(err,results){
		 	if(err)
		 		throw err;

		 	var ingredientId = results[0].inId;
		 	var join = [recipeId, ingredientId];

		 	console.log("successful look in ingredients");

		 	connection.query(insertConnection,join,function(err,results){
		 		if(err)
		 			throw err;
		 		console.log("successful insert into ingredientConnection");
		 	});
		 	
		 });
	 	


	 });
}

function insertInstruction(recipe,instructions){
	var sql = "INSERT INTO steps(stepNumber,description,recipe_id) VALUES (?, ?, ?)";
	var recipeSelector = 'SELECT id AS reId FROM recipes WHERE name = ?';

	 connection.query(recipeSelector,recipe[0],function(err,results){
	 	if(err)
	 		throw err;
	 	
	 	var recipeId = results[0].reId;

		console.log(recipeId);
		instructions.push(recipeId);

		connection.query(sql, instructions, function(err,results){
			if(err)
			 	throw err;
			console.log("successful insert into instructions");
		});
	});

}


//selection by recipe name
function searchByRecipe(recipeName, callback){
	var recipeSelector = 'SELECT * FROM recipes WHERE name = ?';
	var connectionSelector = 'SELECT * FROM ingredientConnection WHERE recipe_id = ?';
	var ingredientSelector = 'SELECT * FROM ingredients WHERE id = ?';
	var stepsSelector = 'SELECT * FROM steps WHERE recipe_id = ?';

	//recipe table
	connection.query(recipeSelector, [recipeName], function(err,result){
		if(err)
			throw err;

		var recipeId = result[0].id;
		var recipe = {
			name: result[0].name,
			link: result[0].link,
			ingredients: [],
			steps: []
		}

		//console.log('name ' + recipe.name);

		//connection table
		connection.query(connectionSelector, [recipeId], function(err, result){
			if(err)
				throw err;
			//ingredients table
		
			for(var i = 0; i < result.length; i++){
				connection.query(ingredientSelector, result[i].ingredients_id, function(err, result){
					if(err)
						throw err;
					//console.log(result[0].name);
					

					var ingredient = {
						name: result[0].name,
						amount: result[0].amount,
						unit: result[0].unit
					}
					//console.log(ingredient.name);
					recipe.ingredients.push(ingredient);
					

				});

			}

			//steps table
			connection.query(stepsSelector , [recipeId], function(err, result){
				console.log('name' + recipe.ingredients.length);
				if(err)
					throw err;

				for(var i = 0; i < result.length; i++){
					var step = {
						number: result[i].stepNumber,
						description: result[i].description
					}

					recipe.steps.push(step);
				}

				callback(recipe);
			});
		});
	});

}

//selection by ingredient
function SelectIngredient(ingredient,callback){
	
	
}


module.exports = {
	connection,
	insertRecipe,
	linkTables,
	insertIngredients,
	insertInstruction,
	searchByRecipe
}