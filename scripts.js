
let buttoncontainer = document.querySelector(".buttoncontainer");
let gridcontainer = document.querySelector(".gridcontainer");

let root = 50;
let colorMode = "color"
let startGrid = createGrid(root);

// make grid
function createGrid(root) {
  let squares = root * root;
  let i = 0;
  for (i = 0 ; i < squares ; i++) {
    let newsquare = document.createElement("div");
    newsquare.classList.add("square");
    gridcontainer.appendChild(newsquare);
  }
  gridcontainer.style.gridTemplateColumns = `repeat(${root}, 1fr)`;
  gridcontainer.style.gridAutoRows = `${600 / root}px`;
  // mouseover event
  let square = document.querySelectorAll(".square");
  square.forEach((div) => {
    div.addEventListener("mouseover", colorChange);
    });
  square.forEach((div) => {
    div.addEventListener("mouseover", grayChange);
    });
}

// renew grid
function renewGrid() {
  while (gridcontainer.lastChild) {
    gridcontainer.removeChild(gridcontainer.lastChild);
  }
  root = prompt("cells per side?", root);
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
modebutton.textContent = "Change Pencil";
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
    modeshow.textContent = "Gray"
  } else {
    colorMode = "color";
    modeshow.textContent = "Color";
  }
}

// colorchange function
function colorChange() {
  if (colorMode == "color") {
    let hue = Math.floor(Math.random() * 360) +1;
    this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
//    let hueR = Math.floor(Math.random() * 255) +1;
//    let hueG = Math.floor(Math.random() * 255) +1;
//    let hueB = Math.floor(Math.random() * 255) +1;
//    this.style.backgroundColor = `rgb(${hueR}, ${hueG}, ${hueB})`;
  }
}

// graychange function
function grayChange() {
  if (colorMode == "bw") {
    let shade = (this.style.opacity == "") ? 1 : this.style.opacity;
    this.style.opacity = (shade > 0) ? `${shade - 0.1}` : 0;
  }
}
