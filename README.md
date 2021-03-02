# Tic-Tac-Toe Project

## Overview:
In this unit, coders will create the classic game of tic tac toe in their browser! The user will input moves as player X or O on a tic tac toe board. When a player wins, the game will end and a message will display the winner.

## Day 1 

### Day 1 Goal 1: Set Up
#### Planning
- [ ] Complete the project planning document.
#### GitHub Set-Up
- [x] Go to the repository
- [x] Fork this repository to your github account and import into a new Glitch project
- [x] Make your site live on gh-pages
- [x] Submit your website using the link on the Agenda

### Day 1 Goal 2: Create variables to keep track of game data
- [x] Declare a variable that keeps track of the current player and set it equal to either a string of "X" or "O"
- [x] Declare a variable that keeps track of the total number of turns taken and set it equal to 0
- [x] Declare a variable of a boolean type that will signal whether or not the game has ended and set it equal to false

### Day 1 Goal 3: Allow users to choose a square and change that square to an "X" or an "O" alternating
- [x] Declare a function with two parameters that removes the button of the corresponding ID, and changes the text of the div that is the tileId to the player variable. (Then, uncomment this function call in the starter code!)
- [x] Declare a function with 0 parameters that will change the current player to either "X" or "O" depending on the current player. Decide where to call this function.

#### Wrap
- [ ] Save and submit your website using the link on the session agenda.


## Day 2 

### Day 2 Goal 1: Create the functionality to check if a user has placed three tiles in a row -- causing them to win
- [x] Declare a function with 3 parameters of the tileIds, and return if the value of the each of the tileIds are equal to the current player. This function will check if the player has won.

### Day 2 Goal 2: Use the previous function to check all combinations of vertical, horizontal, and diagonal tiles
- [x] Declare a function that will call the function above on all of the vertical combinations of tiles.
- [x] Declare a function that will call the function above on all of the horizontal combinations of tiles.
- [x] Declare a function  that will call the function above on all of the diagonal combinations of tiles.

## Day 3

### Day 3 Goal 1: End the game as a tie if no one wins
- [x] Implement behavior that will change the title to "It's a draw!" and end the game by changing the boolean variable to true after 9 pieces are placed. Do this by writing a function that will add 1 to the current turns, and check if that counter has reached 9.

### Day 3 Goal 2: End the game as a win so no more additional pieces can be placed 
- [ ] In each of the win functions, if the win condition is satisfied, set the end game variable to true, and change the title to "[Player] Wins!"
- [ ] Update your functions to check if the game has ended first before placing a piece.
- [ ] Determine the appropriate location to place the Win functions

#### Wrap
- [ ] Push your changes!

## Project Extensions:
- [ ] Add in your own CSS to personalize your project
- [ ] Create a button that will reset the game back to the original (this requires clearing the Xs and Os, and putting the "move" buttons back)
- [ ] Keep track of the score between the two players: X wins, O wins, and draws
- [ ] Change the 9 button functions to instead be one generic function on the button selector
- [ ] Change the board to be 4x4 and end the game when there is a 4 in a row

## References/Tools
* [Advanced Reference Table](https://docs.google.com/document/d/1SElvLDvtVOoYZJyR5XbCQJWbSTxyChDiQkz7n3c63Go/preview)
* [How Jquery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
* [JQuery Events](http://api.jquery.com/category/events/)
