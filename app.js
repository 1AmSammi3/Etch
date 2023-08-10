let container = document.querySelector(".container");
let grid = parseInt(prompt("Enter a number from 10 to 50"));
let color = document.getElementById('color');
let clear = document.getElementById('clear');
clear.addEventListener('click', cllear);

if (grid >= 10 && grid <= 50) {

  for (let i = 0; i < grid; i++) {
    let cellFlex = document.createElement("div");
    cellFlex.classList.add("cellFlex");
    container.appendChild(cellFlex);

    for (let j = 0; j < grid; j++) {
      let cells = document.createElement("span");
      cellFlex.appendChild(cells);
      cells.addEventListener('click', function() {
        toggleColor(this);
      });
      cells.classList.add("cells");
    }
  }
} else {
  alert('Please enter a number from 10 to 50');
  location.reload();
}

function toggleColor(cell) {
  if (cell.style.backgroundColor === '') {
    let colorChoice = color.value;
    cell.style.backgroundColor = colorChoice;
  } else {
    cell.style.backgroundColor = '';
  }
}
function cllear() {
   let cells = document.querySelectorAll(".cells");
   cells.forEach(cell => {
      cell.style.backgroundColor = '';
   })
}