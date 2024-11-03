function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        for (let j = 0; j < pHeight - i - 1; j++) {
            rLine += "&nbsp;"; 
        }
        for (let j = 0; j <= i; j++) {
            rLine += "<span style='color:" + (i % 2 === 0 ? pColorOdd : pColorEven) + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        for (let j = 0; j < i; j++) {
            rLine += "&nbsp;"; 
        }
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + (i % 2 === 0 ? pColorOdd : pColorEven) + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        for (let j = 0; j < pHeight - i - 1; j++) {
            rLine += "&nbsp;"; 
        }
        for (let j = 0; j <= i; j++) {
            rLine += "<span style='color:" + (i % 2 === 0 ? pColorOdd : pColorEven) + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        for (let j = 0; j < i; j++) {
            rLine += "&nbsp;"; 
        }
        for (let j = 0; j < pHeight - i; j++) {
            rLine += "<span style='color:" + (i % 2 === 0 ? pColorOdd : pColorEven) + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}