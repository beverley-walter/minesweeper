document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
   cells:[
      {
         row:0,
         col:0,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 0,
      },
      {
         row: 0,
         col: 1,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 1,
      },
      {
         row:0,
         col:2,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 1,
      },
      {
         row:1,
         col:0,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 0,
      },
      {
         row:1,
         col:1,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 1,
      },
      {
         row:1,
         col:2,
         isMine: true,
         isMarked: false,
         hidden: true,
         surroundingMines: 0,
      },
      {
         row:2,
         col:0,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 0,
      },
      {
         row:2,
         col:1,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 1,
      },
      {
         row:2,
         col:2,
         isMine: false,
         isMarked: false,
         hidden: true,
         surroundingMines: 1, //(hidden: false)??
      }]
}

function startGame () {
   for (var loops = 0; loops < board.cells.length; loops++){
      board.cells[loops].surroundingMines = countSurroundingMines(board.cells[loops])

         document.addEventListener("mousedown",checkForWin)
         document.addEventListener("context",checkForWin)
               }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

//
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
      for (var check = 0; check < board.cells.length; check++){
         if (board.cells[check].isMine == true)
         if (board.cells[check].isMarked == true)
      }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
   var mineNum = 0;
   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
   for (var loopsAround = 0; loopsAround < surrounding.length; loopsAround++) {
      if (surrounding[loopsAround].isMine == true)
            mineNum ++;
}

   return mineNum;

}
