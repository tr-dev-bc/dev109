function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = ""; // intiialize output

    // Top Half of Rhombus
    for (let i = 0; i < pHeight; i++) {
        // Add leading spaces
        rLine += "&nbsp;".repeat(pHeight - i - 1); 
        for (let j = 0; j <= i; j++) {
            rLine += (j % 2 ? `<span style='color:${pColorEven};'>${pSymbol}</span>` : `<span style='color:${pColorOdd};'>${pSymbol}</span>`);
            if (j < i) rLine += "&nbsp;"; // Add space between symbols using whitespace
        }
        rLine += "<br>"; // New line after each row
    }

    // Bottom Half of Rhombus
    for (let i = pHeight; i > 0; i--) {
        // Add leading spaces
        rLine += "&nbsp;".repeat(pHeight - i); 
        for (let j = 0; j < i; j++) {
            rLine += (j % 2 ? `<span style='color:${pColorEven};'>${pSymbol}</span>` : `<span style='color:${pColorOdd};'>${pSymbol}</span>`);
            if (j < i - 1) rLine += "&nbsp;"; // Add space
        }
        rLine += "<br>"; // New line after each row
    }

    document.getElementById("rhombus").innerHTML = rLine;
}