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

/*----- constants -----*/

// Variable that selects all of the columns
const columns = document.querySelectorAll(".column");
const slots = document.querySelectorAll(".slot");

// Column 1 Slots
const col1Slot1 = document.querySelector(".slot-1-1");
const col1Slot2 = document.querySelector(".slot-1-2");
const col1Slot3 = document.querySelector(".slot-1-3");
const col1Slot4 = document.querySelector(".slot-1-4");
const col1Slot5 = document.querySelector(".slot-1-5");
const col1Slot6 = document.querySelector(".slot-1-6");
const col1Slot7 = document.querySelector(".slot-1-7");
// Column 2 Slots
const col2Slot1 = document.querySelector(".slot-2-1");
const col2Slot2 = document.querySelector(".slot-2-2");
const col2Slot3 = document.querySelector(".slot-2-3");
const col2Slot4 = document.querySelector(".slot-2-4");
const col2Slot5 = document.querySelector(".slot-2-5");
const col2Slot6 = document.querySelector(".slot-2-6");
const col2Slot7 = document.querySelector(".slot-2-7");
// Column 3 Slots
const col3Slot1 = document.querySelector(".slot-3-1");
const col3Slot2 = document.querySelector(".slot-3-2");
const col3Slot3 = document.querySelector(".slot-3-3");
const col3Slot4 = document.querySelector(".slot-3-4");
const col3Slot5 = document.querySelector(".slot-3-5");
const col3Slot6 = document.querySelector(".slot-3-6");
const col3Slot7 = document.querySelector(".slot-3-7");
// Column 4 Slots
const col4Slot1 = document.querySelector(".slot-4-1");
const col4Slot2 = document.querySelector(".slot-4-2");
const col4Slot3 = document.querySelector(".slot-4-3");
const col4Slot4 = document.querySelector(".slot-4-4");
const col4Slot5 = document.querySelector(".slot-4-5");
const col4Slot6 = document.querySelector(".slot-4-6");
const col4Slot7 = document.querySelector(".slot-4-7");
// Column 5 Slots
const col5Slot1 = document.querySelector(".slot-5-1");
const col5Slot2 = document.querySelector(".slot-5-2");
const col5Slot3 = document.querySelector(".slot-5-3");
const col5Slot4 = document.querySelector(".slot-5-4");
const col5Slot5 = document.querySelector(".slot-5-5");
const col5Slot6 = document.querySelector(".slot-5-6");
const col5Slot7 = document.querySelector(".slot-5-7");
// Column 6 Slots
const col6Slot1 = document.querySelector(".slot-6-1");
const col6Slot2 = document.querySelector(".slot-6-2");
const col6Slot3 = document.querySelector(".slot-6-3");
const col6Slot4 = document.querySelector(".slot-6-4");
const col6Slot5 = document.querySelector(".slot-6-5");
const col6Slot6 = document.querySelector(".slot-6-6");
const col6Slot7 = document.querySelector(".slot-6-7");
// Column 7 Slots
const col7Slot1 = document.querySelector(".slot-7-1");
const col7Slot2 = document.querySelector(".slot-7-2");
const col7Slot3 = document.querySelector(".slot-7-3");
const col7Slot4 = document.querySelector(".slot-7-4");
const col7Slot5 = document.querySelector(".slot-7-5");
const col7Slot6 = document.querySelector(".slot-7-6");
const col7Slot7 = document.querySelector(".slot-7-7");

// Game Object
const game = {
  currentPlayer: {},
  players: {
    p1: {
      name: "",
      planet: "",
      wins: 0,
      color: "red",
      url: ""
    },
    p2: {
      name: "",
      planet: "",
      wins: 0,
      color: "blue",
      url: ""
    }
  }
};

/*----- button event listeners -----*/

/*----- functions -----*/

const createCurrentPlayer = () => {
  game.currentPlayer = game.players.p1;
};

// Changing players
const changePlayer = () => {
  if (game.currentPlayer === game.players.p1) {
    game.currentPlayer = game.players.p2;
  } else if (game.currentPlayer === game.players.p2) {
    game.currentPlayer = game.players.p1;
  }
};

// Function that checks for 4 in a row vertically
const checkVertical = () => {
  let count = 0;
  for (let i = 0; i < columns.length; i++) {
    let currentSlots = columns[i].children;
    for (let j = 0; j < currentSlots.length; j++) {
      if (currentSlots[j].style.backgroundColor === game.currentPlayer.color) {
        count++;
      } else {
        count = 0;
      }
      if (count >= 4) {
        count = 0;
        console.log(`${game.currentPlayer.name} wins!`);
      }
    }
  }
};

const checkHorizontal = () => {
  let count = 0;
  for (let i = 0; i < 6; i++) {
    count = 0;
    for (let j = 0; j < 7; j++) {
      if (
        columns[j].children[i].style.backgroundColor ===
        game.currentPlayer.color
      ) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        console.log(`${game.currentPlayer.name} wins!`);
      }
    }
  }
};

// I want to check each column and compare the child colors in the same index to
// each other to see if they have the same background color.
// I want to move both horizontally and vertically at the same time

const checkDiagonal = () => {
  // used to break out of outer for-loop
  let diagonal = 0;
  // loop that loops through top 3 rows
  for (let i = 0; i < 3; i++) {
    // loop that loops through each column
    for (let j = 0; j < 7; j++) {
      let count = 0;
      // check if color matches current player
      if (
        columns[j].children[i].style.backgroundColor ===
        game.currentPlayer.color
      ) {
        // checking for \ diagonal
        if (j < 4) {
          for (let m = 0; m < 4; m++) {
            // Setting m to be the number that will incriment
            if (
              columns[j + m].children[i + m].style.backgroundColor ===
              game.currentPlayer.color
            ) {
              count++;
            }
          }
        }

        // checking for / diagonal
        if (j >= 3 && count != 4) {
          // Also checking if count does not equal 4
          count = 0; // Resetting count from previous diagonal check
          for (let m = 0; m < 4; m++) {
            if (
              columns[j - m].children[i + m].style.backgroundColor === // incrementing i to follow diagonal from top to bottom, right to left
              game.currentPlayer.color
            ) {
              count++;
            }
          }
        }

        if (count == 4) {
          diagonal = 1;
          console.log(`${game.currentPlayer.name} wins!`);
          break; // breaks out of inner for loop
        }
      }
    } // end of inner for loop
    if (diagonal === 1) {
      break;
    }
  } // end of outer for loop
};
// For loop that checks if the bottom slot is filled or not based on color
// then calls the checks.
for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("click", e => {
    let currentSlots = columns[i].children;
    for (let j = currentSlots.length - 1; j >= 0; j--) {
      if (currentSlots[j].style.backgroundColor === "") {
        currentSlots[j].style.backgroundColor = game.currentPlayer.color;

        checkVertical();
        checkHorizontal();
        checkDiagonal();
        changePlayer();
        return;
      }
    }
  });
}

createCurrentPlayer();
