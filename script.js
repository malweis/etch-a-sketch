 const container = document.querySelector('.container');
 const resetButton = document.getElementById('resetButton');
        let passCount = 0;

        function getRandomRGBColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        function darkenColor(color) {
            const rgbValues = color.replace(/[^\d,]/g, '').split(',');
            const r = parseInt(rgbValues[0]);
            const g = parseInt(rgbValues[1]);
            const b = parseInt(rgbValues[2]);
            const newR = Math.max(0, r - 25.5 * passCount); // Reduce the red value based on pass count
            const newG = Math.max(0, g - 25.5 * passCount); // Reduce the green value based on pass count
            const newB = Math.max(0, b - 25.5 * passCount); // Reduce the blue value based on pass count
            return `rgb(${newR}, ${newG}, ${newB})`;
        }

        

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

                
            } else {
                alert("Invalid input. Please enter a number between 1 and 100.");
            }
        }
        container.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('square')) {
              const currentColor = event.target.style.backgroundColor || getRandomRGBColor();
              const newColor = darkenColor(currentColor);
              event.target.style.backgroundColor = newColor;
              passCount = (passCount + 1) % 10; // Increment pass count and reset to 0 after 10 passes
            }
          });
        resetGrid();
        resetButton.addEventListener('click', resetGrid);
