document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        gridContainer.appendChild(cell);
    }
});