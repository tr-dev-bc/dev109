// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

// Function 1: Changed guide use of var to let
function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) {
                // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
        // console.log(rLine);
    }
    document.getElementById("upRight").innerHTML = rLine;
}

// Function 2: Changed guide use of var to let
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // Create each line on the Rhombus
        for (j = 0; j < i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) {
                // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
        // console.log(rLine);
    }
    document.getElementById("downRight").innerHTML = rLine;
}

// Function 3
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Add spaces for left alignment
        for (let s = pHeight - i - 1; s > 0; s--) {
            rLine += "&nbsp;&nbsp;";
        }
        for (let j = 0; j <= i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

// Function 4
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // Add spaces for left alignment
        for (let s = pHeight - i; s > 0; s--) {
            rLine += "&nbsp;&nbsp;";
        }
        for (let j = 0; j < i; j++) {
            if (j % 2) {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}