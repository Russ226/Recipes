var express = require('express');
var db = require("../models/recipesdb.js");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

router.get('/',function(req,res){
	res.render('html/form.html');
});

router.post('/newrecipe',urlencodedParser,function(req,res){
		db.connection;
				
		var recipe = [req.body.recipe_name, req.body.recipe_link];
		db.insertRecipe(recipe);
		
		for(var i = 0; i < req.body.ingredientName.length; i++){
			if(req.body.ingredientName[i] != ''){
				var ingredients = [req.body.ingredientName[i], req.body.ingredientAmount[i], req.body.ingredientUnit[i]];
				db.insertIngredients(ingredients);
				db.linkTables(recipe,ingredients);
			} 
		}

		for(var i = 0; i < req.body.instructionStep.length; i++){
			if(req.body.instructionDesc[i] != ""){
				var instructions = [req.body.instructionStep[i], req.body.instructionDesc[i]];
				db.insertInstruction(recipe,instructions);
			}
		}


		
		res.send("success");
});


router.get('/search', function(req,res){
	db.connection;
	var result = db.searchByRecipe('Alfredo Sauce', function(recipe){
		res.send(recipe);
	});

	
});

module.exports = router;