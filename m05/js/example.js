// Prompt my user for a new number w prompt method
var table = prompt("Enter a number for the multiplication table:");
table = parseInt(table); // Convert input to an integer

var msg = '<h2>Multiplication Table</h2>'; // Change msg to specified h2 element w/heading text
var i = 1; // Set counter to 1

// Do multiplication (removed addition)
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}

// Write the message into the html page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
