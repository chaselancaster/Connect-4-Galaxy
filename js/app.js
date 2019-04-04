/* <Connect 4 - Galaxy Edition>:

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
// The game board will be centered 
// The button to reset the game will be near the left corner of the board 
// The display for whose turn is it will be near the right corner of the board
// The board is a 7 column layout with 6 rows. This will be multiple arrays
// stored in a lard "game board" array.


// <App Functionality>

// Gameplay:

// After the users have inputted their name and picked their color/planet,
// P1 will always go first.
// After P1 selects a row and clicks, the chip/planet will appear (or slide down
// if time for animation) and then the turn will change to P2
// This will repeat until one player places 4 in a row horizontally, vertically, or
// diagonally
