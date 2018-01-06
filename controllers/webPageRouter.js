var express = require('express');
var db = require("../models/recipesdb.js");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

router.get('/',function(req,res){
	res.render('html/form.html');
});

router.post('/newrecipe',urlencodedParser,function(req,res){
		var indgredients = [];
		var instructions = [];
		var recipe = [req.body.recipe_name, req.body.recipe_link];
		
		for(var i = 0; i < req.body.indgredientName.length; i++){
			var cur = [req.body.indgredientName[i], req.body.indgredientAmount[i], req.body.indgredientUnit[i]];
			indgredients.push(cur); 
		}

		for(var i = 0; i < req.body.instructionStep.length; i++){
			var cur = [req.body.instructionStep[i], req.body.instructionDesc[i]];
			instructions.push(cur); 
		}


		db.connection();
		db.insertRecipe(recipe);
		db.insertIngredients(indgredients);
		db.insertInstruction(instructions);

		for(var i = 0; i < indgredients.length; i++){
			db.linkTables(recipe,indgredients[i]);
		}

		res.send("success");
});

module.exports = router;