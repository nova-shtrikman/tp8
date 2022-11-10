<?

/* Recipe loader for TP9 */

$name = $_GET["recipeName"];
$name = $_GET["recipeList"];

if ($name == "Iced Matcha Latte") {
  if ($list == "ingredients") { 
    include "ingredients.html";
    
  } elseif ($list = "equiptment") { 
    include "equiptment.html";
    
  } elseif ($list = "directions") {
    include "directions.html";
  
  } else {
    echo "1";
    
    
    
  }
} elseif ($name == "Guacamole")
  if ($list == "guac-ingredients") { 
    include "ingredients.html";
    
  } elseif ($list = "equiptment") { 
    include "guac-equiptment.html";
    
  } elseif ($list = "directions") {
    include "guac-directions.html";
  
  } else {
    echo "1";
  }


} elseif ($name == "File Mignon")
  if ($list == "ingredients") { 
    include "mignon-ingredients.html";
    
  } elseif ($list = "equiptment") { 
    include "mignon-equiptment.html";
    
  } elseif ($list = "directions") {
    include "mignon-directions.html";
  
  } else {
    echo "1";
  }

  
} else {
  echo "0";
}