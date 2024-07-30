/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");
let firstImage = document.getElementById("first_image");

/*  @TODO - Create an array of Pokemon to select from  */
//                      0           1            2            3   
let pokemonArray = ["pikachu", "bulbasaur", "squirtle", "charmander"];
// Initialize counter variable
let counter = 0;

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
function changeImage(){
    // Changes the Image using .src 
    firstImage.src = "images/" + pokemonArray[counter] + ".png"
    
    //Increments counter by 1
    counter++;
    console.log(counter);

    //Can be clicked Forever
    if (counter > 3){
        counter = 0;
    }
}

changeButton.addEventListener("click", changeImage);
/*  @TODO - Create a Function for our addButton to Add New Pokemon  */

function addImage(){
    //               Creating HTML elements with JS
    let newPokemon = document.createElement("img");
    newPokemon.src = "images/squirtle.png";
    //Add the new elements imageDiv (also "image_div" in HTML) with appendCHild
    imageDiv.appendChild(newPokemon);
}

addButton.addEventListener("click", addImage);


/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */

function deleteImages(){
    // Remove's child
    // The first unnamed Child to be removed with children[0]
    imageDiv.removeChild(imageDiv.children[0]);
    //imageDiv.removeChild(imageDiv.children[imageDiv.children.length - 1]);
}

deleteButton.addEventListener("click", deleteImages);