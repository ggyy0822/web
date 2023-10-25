function setTableWidth(width) {
    const table = document.querySelector('table');
    table.style.width = width + 'px';
}

function setTableBorder(borderWidth) {
    const table = document.querySelector('table');
    table.style.border = borderWidth + 'px solid #333';
}

function setCellSpacing(cellSpacing) {
    const table = document.querySelector('table');
    table.style.borderSpacing = cellSpacing + 'px';
}

function setTableBackgroundColor(color) {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#f2f2f2'];
    const tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = colors[color - 1];
    }
}

function resetTableStyle() {
    const table = document.querySelector('table');
    table.style.width = '100%';
    table.style.border = '1px solid #ddd';
    table.style.borderSpacing = '2px';
    const tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = '#f2f2f2';
    }
}