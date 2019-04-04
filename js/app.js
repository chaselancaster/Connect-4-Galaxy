// <Connect 4 - Galaxy Edition>:

// var array = new Array(7).fill('white').map(column => new Array(6).fill('white'))

// This is the basic connect 4 game that we all know and love style in a galaxy theme.
// This game allows for two local players.
// Each player will be able to set a name and choose their "planet".
// The first to land 4 planets in a row is the winner!

// <App Layout>

// Landing Page:

// Landing page will be where the users set their name and pick their planet
// The only things on this page will be the name, a background, input field,
// color/planet selection, and a play button
// Planet options will be Earth, Mars, Jupiter, and Neptune
// The input fields will be where the players enter their name
// Once the play button is it, the game board appears and the game officially begins

// Game Page:

// P1's name and win count will be in the left corner.
// P2's name and win count will be in the right corner.
// The game board will be centered.
// The button to reset the game will be near the left corner of the board.
// The display for whose turn is it will be near the right corner of the board.
// The board is a 7 column layout with 6 rows. This will be 7 div columns each with
// 6 div slots stored inside.

// <App Functionality>

// Gameplay:

// After the users have inputted their name and picked their color/planet,
// P1 will always go first.
// After P1 selects a row and clicks, the chip/planet will appear (or slide down
// if time for animation) and then the turn will change to P2.
// This will repeat until one player places 4 in a row horizontally, vertically, or
// diagonally.
// The winner will then get a point added to their win count.
// A popup box will then ask if they want to play again.
// If they say yes, the win count will stay and game 2 will begin.
// If they say no, they will be returned to the landing page and input fields will
// have to be filled in again.

// <Logic>

// The game board will be 7 columns with 6 rows.
// The game board will be made up 7 columns with 6 divs in each column.
// Once the play button is pressed, the render function will show the board.
// I will have to find a way to figure out which row the user is clicking on.
// I will then need to use background-color to check which slot is filled or not.
// After the game piece is placed, it needs to change the slot color and then swith to
// P2's turn.
// I will need to find a way for it to check if there are 4 in a row horizontally,
// veritcally, and diagonally.
// This might mean giving each planet a class and then checking based on class
// and locaton.
// Location will be the primary way of telling if 4 pieces are in a row.
// However, the game has to know if the pieces belong to P1 or P2
// After a winner is declared, the game needs to add a point to the win count under
// the corresponding player's name.
// A modal will be used to display who the winner is and if they want to go home, or
// play another game.

// Variable that selects all of the columns
const column = document.querySelectorAll(".column");
console.log(column);

// For loop that adds an event listener to each column
for (let i = 0; i < column.length; i++) {
  column[i].addEventListener("click", e => {
    console.log(column[i].children);
    console.log(e.target); // e.target see's which div was clicked
  });
}
