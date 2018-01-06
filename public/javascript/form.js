var instructionCounter = 3;
var ingredientCounter = 4;

function addIngredients(){
	$("#addIngredients").click(function(){
		$("#ingredients").append(
			"<div>"+ "<input type=\"text\" name=\"ingredientName\"" + " placeholder=\"enter Ingredient name\">"+"<input type=\"number\" step=\"0.1\" name=\"ingredientAmount\">" +
			"<select name=\"ingredientUnit\">" +
			"<option value=\"tsp\">tsp</option>" +
			"<option value=\"tbsp\">tbsp</option>" +
			"<option value=\"floz\">fl oz</option>" +
			"<option value=\"c\">c</option>" +
			"<option value=\"ml\">ml</option>" +
			"<option value=\"l\">l</option>" +
			"<option value=\"lb\">lb</option>" +
			"<option value=\"oz\">oz</option>" +
			"<option value=\"mg\">mg</option>" +
			"<option value=\"g\">g</option>" +
			"<option value=\"kg\">kg</option>" +
			"<option value=\"mm\">mm</option>" +"<option value=\"cm\">cm</option><option value=\"m\">m</option><option value=\"inch\">inch</option></select></div>")

		ingredientCounter++
	});
	
}

function addInstruction(){
	$("#addInstruction").click(function(){
		$("#instructions").append(
			"<div>" + "<input type=\"number\" name=\"instructionStep\"" + " min=\"" + instructionCounter  + "\"" + ">" +
			"</div>"+
			"<textarea name=\"instructionStep\""+ " cols=\"50\" rows=\"5\" placeholder=\"type here\"></textarea>")
		
		instructionCounter++;
	});
	

}

addInstruction();
addIngredients();