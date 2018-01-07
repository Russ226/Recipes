var mysql = require('mysql');


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	
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


//selection of recipe




module.exports = {
	connection,
	insertRecipe,
	linkTables,
	insertIngredients,
	insertInstruction
}