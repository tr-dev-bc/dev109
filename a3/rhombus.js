function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = ""; // initialize string to concatenate rhombus symbols for each line

    // top half of rhombus
    for (let i = 0; i < pHeight; i++) {
        rLine += " ".repeat(pHeight - i - 1); //leading spaces
        for (let j = 0; j <= i; j++) {
            rLine += (j % 2 ? `<span style='color:${pColorEven};'>${pSymbol}</span>` : `<span style='color:${pColorOdd};'>${pSymbol}</span>`);
            if (j < i) rLine += " "; // space between symbols
        }
        rLine += "\n"; // end line and go to next
    }

    // bottom Half of Rhombus
    for (let i = pHeight; i > 0; i--) {
        rLine += " ".repeat(pHeight - i); //leading spaces
        for (let j = 0; j < i; j++) {
            rLine += (j % 2 ? `<span style='color:${pColorEven};'>${pSymbol}</span>` : `<span style='color:${pColorOdd};'>${pSymbol}</span>`);
            if (j < i - 1) rLine += " "; // space b/w symbols
        }
        rLine += "\n"; //end line and go to next
    }

    document.getElementById("rhombus").innerHTML = rLine; // insert into rhombus div
}