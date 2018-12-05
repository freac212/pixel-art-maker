/**
 * Notes:
 * two inputs: GridY, GridX
 * submit button
 * third input: pick a colour box, that displays the colour
 * 
 * canvas = num of divs = GridY * GridX
 * 
 * if there's a click on any of the grids, set that grid to the picked colour.
 * 
 * gridY = #inputHeight
 * gridX = #inputWidth
 * 
 * table = #pixelCanvas
 * add divs per width THEN! repeat that per height. 
 * 
 * amount of <tr> tags = gridY; use a loop to create the row tags.
 * Then use a loop to insert the <th> tags in every <tr> tag per the width(gridX)
 * 
 */


const table = document.getElementById("pixelCanvas"); // Table

const submitButton = document.getElementsByTagName("input")[2];
// Use the thing john has in slack. It finds elements based on attributes

let color;
let gridY; // Rows
let gridX;  // Columns

// When size is submitted by the user, call submitGridInput() which in turn calls makeGrid()
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  submitGridInput();
});

table.addEventListener("click", addBlockColor);


function addBlockColor(e){
  if(e.target.nodeName === ("TD")){
    color = document.getElementById("colorPicker").value;
    e.target.style.backgroundColor = color;
  }
};

function submitGridInput (){
  gridY = parseInt(document.getElementById("inputHeight").value); // Rows
  gridX = parseInt(document.getElementById("inputWidth").value);
  removeGrid();
  makeGrid();
};


function makeGrid() {
  for(let i = 0; i < gridY; i++){
    table.innerHTML += `
    <tr id="tr${i}"></tr>`;
    for(let x = 0; x < gridX; x++){
      const tagThing = document.createElement("td");
  
      document.getElementById(`tr${i}`).appendChild(tagThing);
    }
  }
};


function removeGrid(){
  let gridElem = document.getElementById("pixelCanvas");
  while(gridElem.firstChild){
    gridElem.removeChild(gridElem.firstChild);
  }
};