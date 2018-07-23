
let buttoncontainer = document.querySelector(".buttoncontainer");
let gridcontainer = document.querySelector(".gridcontainer");

let root = 10;
let colorMode = "color"
let startGrid = createGrid(root);


// make grid
function createGrid(root) {
  // create squares
  let squares = root * root;
  let i = 0;
  for (i = 0 ; i < squares ; i++) {
    let newsquare = document.createElement("div");
    newsquare.classList.add("square");
    gridcontainer.appendChild(newsquare);
  }
  // order grid
  gridcontainer.style.gridTemplateColumns = `repeat(${root}, 1fr)`;
  gridcontainer.style.gridAutoRows = `${600 / root}px`;
  // mouseover event
  let square = document.querySelectorAll(".square");
  if (colorMode == "color") {
    square.forEach((div) => {
      div.addEventListener("mouseover", colorChange);
    });
  } else if (colorMode == "bw") {
    square.forEach((div) => {
      div.addEventListener("mouseover", grayChange);
    });
  }
}

// renew grid
function renewGrid() {
  // remove old grid
  while (gridcontainer.lastChild) {
    gridcontainer.removeChild(gridcontainer.lastChild);
  }
  // get new # cells per side
  root = prompt("cells per side?");
  // create new grid
  let newGrid = createGrid(root);
}

// make buttons
let resetbutton = document.createElement("button");
resetbutton.classList.add("resetbutton");
resetbutton.textContent = "Reset Grid";
resetbutton.addEventListener("click", renewGrid);
buttoncontainer.appendChild(resetbutton);
let modebutton = document.createElement("button");
modebutton.classList.add("modebutton");
modebutton.textContent = "Change Colormode";
modebutton.addEventListener("click", modeSwitch);
buttoncontainer.appendChild(modebutton);
let modeshow = document.createElement("p");
modeshow.classList.add("modeshow");
modeshow.style.display = "inline-block"
modeshow.textContent = "Color";
buttoncontainer.appendChild(modeshow);

// colormode function
function modeSwitch(){
  if (colorMode == "color") {
    colorMode = "bw";
    modeshow.textContent = "Black and White"
    let bwGrid = renewGrid();
  } else {
    colorMode = "color";
    modeshow.textContent = "Color";
    let clrGrid = renewGrid();
  }
}

// colorchange function
function colorChange() {
  let hue = Math.floor(Math.random() * 360) +1;
  console.log(hue);
  this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

// graychange function
function grayChange() {

}
