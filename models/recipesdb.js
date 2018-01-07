var mysql = require('mysql');
var recipeId = "";

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

			recipeId = result[0].reId;
			
			console.log(recipeId);
		});
	});


	

	connection.query()
}

function insertIngredients(ingredients){
	var sql = "INSERT INTO ingredients (name, amount,unit) VALUES (?, ?, ?)";

	connection.query(sql,ingredients, function(err,result){
		if(err)
			throw err;
		console.log("insertion is successful " + result.affectedRows);

	});
}


function linkTables(recipe,ingredients){
	 
	 var insertConnection = "INSERT INTO ingredientConnection(recipe_id, ingredients_id) VALUES ?";
	 var recipeSelector = 'SELECT id AS reId FROM recipes WHERE name = ?';
	 var ingredientSelector = "SELECT id AS inId FROM ingredients WHERE name = ? AND amount = ? AND unit = ?";
	 
	 connection.query(recipeSelector,recipe,function(err,results){
	 	if(err)
	 		throw err;
	 	var recipeId = results[0].inId;
	 	
	 	console.log("successful look in recipes");

	 	for(var i = 0; i < ingredients.length; i++){
		 	connection.query(ingredientSelector,ingredients[i],function(err,results){
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
	 	}


	 });
}

function insertInstruction(instructions){
	var sql = "INSERT INTO steps(stepNumber,description,recipe_id) VALUES (?, ?, ?)";
	var recipeSelector = "SELECT id FROM AS reId recipes WHERE name = ?";

	for(var i = 0; i < instructions.length; i++)
		instructions[0].push(recipeId);

	connection.query(sql, instructions, function(err,results){
		if(err)
		 	throw err;
		console.log("successful insert into instructions");
	});

}

module.exports = {
	connection,
	insertRecipe,
	linkTables,
	insertIngredients,
	insertInstruction
}