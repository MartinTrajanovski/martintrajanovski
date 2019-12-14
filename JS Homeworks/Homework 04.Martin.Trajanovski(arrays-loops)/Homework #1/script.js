let consoleOutput = '';
for (i = 1; i < 21; i++) {
    if(i % 2 === 0) {
        consoleOutput += `${i}\n`;
    } else {
        consoleOutput += `${i} `;
    }
}
console.log(consoleOutput);
