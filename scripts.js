//Javascript for TP8


function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList" + listName;
  console.log ("From URL: " +fromFile);
  

  

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

//new recipe object

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equiptmentURL, directionsURL){
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;

  
 this.displayRecipe = function(){
   
   document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
   document.querySelector("#contributor").innerHTML = this.contributor;
   document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
   loadFileInto(this.recipe, "ingredients", "#ingredients ul");
   loadFileInto(this.recipe, "#equiptment ol");
   loadFileInto(this.recipe, "directions", "#directions ul");
  
 } 
  
}

IcedMatchaLatte = new Recipe(
  "Iced Matcha Latte",
  "Nova", 
  "https://images.unsplash.com/photo-1631308491952-040f80133535?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60", 
  "ingredients.html", 
  "equiptment.html", 
  "directions.html"
);

Mignon = new Recipe(
  "Mignon",
  "organically allison", 
  "https://organicallyaddison.com/wp-content/uploads/2021/10/instant_pot_steak_9-700x1050.jpeg", 
  "mignon-ingredients.html", 
  "mignon-equiptment.html", 
  "mignon-directions.html"
);

Guac = new Recipe(
  "Guacamole",
  "Doug's recipe book", 
  "https://www.simplyrecipes.com/thmb/a4k8j7YDx2cJUdupcq9ja4NMbiM=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Guacamole-LEAD-2-924dbc47ba1e4ecd8e497bcd687cac4a.jpg", 
  "guac-ingredients.html", 
  "guac-equiptment.html", 
  "guac-directions.html"
);




window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function(){
    IcedMatchaLatte.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function(){
    Mignon.displayRecipe();
    
  }
  
  document.querySelector("#thirdRecipe").onclick = function(){
    Guac.displayRecipe();
  
  }
    
} //end window.onload 