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
		var ingredients = [];
		var instructions = [];
		var recipe = [req.body.recipe_name, req.body.recipe_link];
		
		
		for(var i = 0; i < req.body.ingredientName.length; i++){
			var cur = [req.body.ingredientName[i], req.body.ingredientAmount[i], req.body.ingredientUnit[i]];
			ingredients.push(cur); 
		}

		for(var i = 0; i < req.body.instructionStep.length; i++){
			if(req.body.instructionStep[i] != "" && req.body.instructionDesc[i] != ""){
				var cur = [req.body.instructionStep[i], req.body.instructionDesc[i]];
				instructions.push(cur); 
			}
		}


		db.connection;
		db.insertRecipe(recipe);
		db.insertIngredients(ingredients);
		db.insertInstruction(instructions);

		for(var i = 0; i < ingredients.length; i++){
			db.linkTables(recipe,ingredients[i]);
		}

		
		//console.log(req.body.ingredientAmount.length);
		res.send("success");
});

module.exports = router;