document.addEventListener('DOMContentLoaded', () => {
    const colorBtns = document.querySelectorAll('.color-btn');
    const colorDisplay = document.querySelector('body');
    const addColorBtn = document.getElementById('addColorBtn');
    const customColorInput = document.getElementById('customColorInput');

    // Change background color on button click
    colorBtns.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            colorDisplay.style.backgroundColor = color;
        });
    });

    // Add custom color to the panel
    addColorBtn.addEventListener('click', () => {
        const customColor = customColorInput.value;
        if (customColor) {
            const newColorBtn = document.createElement('button');
            newColorBtn.classList.add('color-btn');
            newColorBtn.style.backgroundColor = customColor;
            newColorBtn.setAttribute('data-color', customColor);
            
            // Add event listener for the new button
            newColorBtn.addEventListener('click', () => {
                colorDisplay.style.backgroundColor = customColor;
            });
            
            document.querySelector('.color-panel').appendChild(newColorBtn);
            customColorInput.value = ''; // Reset input field
        } else {
            alert('Please enter a valid color.');
        }
    });
});
