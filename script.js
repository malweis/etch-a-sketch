const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

function resetGrid() {
    const gridSize = prompt("Enter the number of squares per side (maximum: 100):");
    if (gridSize && gridSize > 0 && gridSize <= 100) {
        container.style.setProperty('--grid-size', gridSize);
        container.innerHTML = '';

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }

        container.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('square')) {
                event.target.classList.add('hovered');
            }
        });

    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}



resetButton.addEventListener('click', resetGrid);