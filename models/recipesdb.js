var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "pen226",
	database: "recipeDB"
});


connection.connect(function(err){
	if (err) {
	    console.error('Error:- ' + err.stack);
	    return;
    }
 
    console.log('Connected Id:- ' + connection.threadId);

});

function insertRecipe(recipe){
	var sql = "INSERT INTO recipes (name, link) VALUES ?";

	connection.query(sql,recipe,function(err,result){
		if(err)
			throw err;
		console.log("insertion is successful " + result.affectedRows);
	});
}

function insertIngredients(ingredients){
	var sql = "INSERT INTO ingredients (name, amount,unit) VALUES ?";

	connection.query(sql,ingredients, function(err,result){
		if(err)
			throw err;
		console.log("insertion is successful " + result.affectedRows);

	});
}


function linkTables(recipe,ingredients){
	 
	 var insertConnection = "INSERT INTO ingredientConnection(recipe_id, ingredients_id) VALUES ?";
	 var recipeSelector = "SELECT id FROM AS reId recipes WHERE name = ?";
	 var ingredientSelector = "SELECT id AS inId FROM ingredients WHERE name = ? AND amount = ? AND unit = ?";
	 
	 connection.query(recipeSelector,recipe,function(err,results){
	 	if(err)
	 		throw err;
	 	var recipeId = results[0].inId;
	 	
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

function InsertInstruction(instructions){
	var sql = "INSERT INTO steps(stepNumber,description,recipe_id) VALUES ?";

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
	InsertInstruction
}