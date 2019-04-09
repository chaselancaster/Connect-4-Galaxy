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

// Game Object
const game = {
  currentPlayer: {},
  players: {
    p1: {
      name: "",
      disc: "",
      wins: 0,
      color: "red",
      url: ""
    },
    p2: {
      name: "",
      disc: "",
      wins: 0,
      color: "blue",
      url: ""
    }
  }
};

/*----- constants -----*/

// Variable that selects all of the columns
const columns = document.querySelectorAll(".column");
let slots = document.querySelectorAll(".slot");
let p1Name = document.querySelector(".name1");
let p2Name = document.querySelector(".name2");
let playerInfo = document.querySelector(".player-info");
let currentPlayerInfo = document.querySelector(".current-player");
let gameContainer = document.querySelector(".game-container");
let form = document.querySelector(".form");
let playerOne = document.querySelector(".h3-grab-1");
let playerTwo = document.querySelector(".h3-grab-2");
let p1Wins = game.players.p1.wins;
let p2Wins = game.players.p2.wins;
let currentPlayerName = document.querySelector(".current-player-name");
let currentPlayerHeader = document.querySelector(".current-player-header");

/*----- button event listeners -----*/

// Event listerner that will listen for the home button click and hide display of
// game board
// This will also reset the player names, wins, and discs

// document.querySelector(".go-home").addEventListener("click", e => {
//   form.style.display = "flex";
//   playerInfo.style.display = "none";
//   currentPlayerInfo.style.display = "none";
//   gameContainer.style.display = "none";
//   game.players.p1.name = "";
//   game.players.p1.wins = 0;
//   game.players.p1.disc = "";
//   game.players.p2.name = "";
//   game.players.p2.wins = 0;
//   game.players.p2.disc = "";
// });

// Listening for click on play and then inputting names into the player object
document.querySelector(".play-btn").addEventListener("click", e => {
  let name = game.currentPlayer.name;
  console.log("play button clicked");
  event.preventDefault();
  game.players.p1.name = p1Name.value; // Adding P1 name to game object
  game.players.p2.name = p2Name.value; // Adding P2 name to game object
  playerInfo.style.display = "flex";
  currentPlayerInfo.style.display = "flex";
  gameContainer.style.display = "flex";
  form.style.display = "none";
  playerOne.innerText = `Name: ${p1Name.value}`;
  playerTwo.innerText = `Name: ${p2Name.value}`;
  currentPlayerName.innerText = name;
});

// Listening for click on reset button and then clearning the background and count
document.querySelector(".reset-game").addEventListener("click", e => {
  let allSlots = document.querySelectorAll(".slot");
  console.log("reset button clicked");
  allSlots.style.backgroundColor = "none";
  allSlots.style.backgroundImage = "none";
});

// Event listeners for the Player 1 disc buttons
document.querySelector(".p1-earth").addEventListener("click", e => {
  let p1Earth = document.querySelector(".p1-earth");
  p1Earth.style.border = "1px solid white";
  game.players.p1.disc = "Earth";
  game.players.p1.url = "./img/planet-earth.png";
});
document.querySelector(".p1-moon").addEventListener("click", e => {
  let p1Moon = document.querySelector(".p1-moon");
  p1Moon.style.border = "1px solid white";
  game.players.p1.disc = "Moon";
  game.players.p1.url = "./img/moon.png";
});
document.querySelector(".p1-mars").addEventListener("click", e => {
  let p1Mars = document.querySelector(".p1-mars");
  p1Mars.style.border = "1px solid white";
  game.players.p1.disc = "Mars";
  game.players.p1.url = "./img/mars.png";
});
document.querySelector(".p1-neptune").addEventListener("click", e => {
  let p1Neptune = document.querySelector(".p1-neptune");
  p1Neptune.style.border = "1px solid white";
  game.players.p1.disc = "Neptune";
  game.players.p1.url = "./img/neptune.png";
});

// Event listeners for the Player 2 disc buttons
document.querySelector(".p2-earth").addEventListener("click", e => {
  let p2Earth = document.querySelector(".p2-earth");
  p2Earth.style.border = "1px solid white";
  game.players.p2.disc = "Earth";
  game.players.p2.url = "./img/planet-earth.png";
});
document.querySelector(".p2-moon").addEventListener("click", e => {
  let p2Moon = document.querySelector(".p2-moon");
  p2Moon.style.border = "1px solid white";
  game.players.p2.disc = "Moon";
  game.players.p2.url = "./img/moon.png";
});
document.querySelector(".p2-mars").addEventListener("click", e => {
  let p2Mars = document.querySelector(".p2-mars");
  p2Mars.style.border = "1px solid white";
  game.players.p2.disc = "Mars";
  game.players.p2.url = "./img/mars.png";
});
document.querySelector(".p2-neptune").addEventListener("click", e => {
  let p2Neptune = document.querySelector(".p2-neptune");
  p2Neptune.style.border = "1px solid white";
  game.players.p2.disc = "Neptune";
  game.players.p2.url = "./img/neptune.png";
});

/*----- functions -----*/

// Creates current player which aways stats with P1
const createCurrentPlayer = () => {
  let name = game.currentPlayer.name;
  game.currentPlayer = game.players.p1;
  currentPlayerName.innerText = name;
};

// Updates win count for current player
const updateWins = () => {
  let wins1 = document.querySelector(".win-grab-1");
  let wins2 = document.querySelector(".win-grab-2");
  wins1.innerText = `Wins: ${game.players.p1.wins}`;
  wins2.innerText = `Wins: ${game.players.p2.wins}`;
};

const declareWinner = () => {
  currentPlayerHeader.innerText = "Winner!";
};

// Changing players
const changePlayer = () => {
  if (game.currentPlayer === game.players.p1) {
    let name = game.currentPlayer.name;
    game.currentPlayer = game.players.p2;
    currentPlayerName.innerText = name;
  } else if (game.currentPlayer === game.players.p2) {
    let name = game.currentPlayer.name;
    game.currentPlayer = game.players.p1;
    currentPlayerName.innerText = name;
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
        game.currentPlayer.wins += 1;
        declareWinner();
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
        count = 0;
        game.currentPlayer.wins += 1;
        declareWinner();
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
          count = 0;
          game.currentPlayer.wins += 1;
          declareWinner();
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
        currentSlots[j].style.backgroundImage =
          "url(" + game.currentPlayer.url + ")";
        checkVertical();
        checkHorizontal();
        checkDiagonal();
        changePlayer();
        updateWins();
        return;
      }
    }
  });
}

createCurrentPlayer();
