//this array called plants holds a list of plants
var plants = [
    "Spider Plant",
    "Orchid",
    "Pothos",
    "Succulent",
    "Lavender",
    "Money Tree",
    "Jasmine",
    "Fern",
    "Cactus",
    "Lucky Bamboo",
    "Daisy",
];

//loop through the plant array and show the contents on the page
function showPlants(){
    //pointer to the plantsContainer div
    var plantDiv = document.getElementById("plantsContainer");
    //pointer to the buttons on the page
    var button = document.querySelector("button");

    //create an unordered list (by default it will have bullet points)
    var plantList = document.createElement("ul");
    //add that unordered list to the div
    plantDiv.appendChild(plantList);

    //Loop through the plants array and create the list of plants
    for (var i=0; i<plants.length; i++){
        //create a list item (child of the unordered list)
        var listItem = document.createElement("li");
        //the text of the list item will be the current plant name
        listItem.textContent = plants[i];
        //add that li to the ul (listitem to the unordered list)
        plantList.appendChild(listItem)
    }


    //Remove the button once we have displayed the plants
    button.remove();
}