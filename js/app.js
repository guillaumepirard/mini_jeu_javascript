var app = {

  right: 0,
  down: 0,

  init: function() {

    //! Move with key

    app.drawBoard();

    document.addEventListener("keydown", event => {
      if (event.code === "ArrowRight") {
        app.turnRight();
        window.setTimeout(function() {
          app.checkDirection();
        }, 100);
      } else if (event.code === "ArrowDown") {
        app.turnDown();
        window.setTimeout(function() {
          app.checkDirection();
        }, 100);
      } else if (event.code === "ArrowLeft") {
        app.turnLeft();
        window.setTimeout(function() {
          app.checkDirection();
        }, 100);
      } else if (event.code === "ArrowUp") {
        app.turnUp();
        window.setTimeout(function() {
          app.checkDirection();
        }, 100);
      }
    });

    //! Event listener

    document.querySelector(".play-button").addEventListener("click", app.reloadPage);
    document.querySelector(".play-button-loose").addEventListener("click", app.reloadPage);

  },
  drawBoard: function() {

    //! AFFICHER LE TABLEAU

    const template = document.querySelector("#board_template");
    const boardContainer = document.querySelector("#container__board");
    const templateClone = document.importNode(template.content, true);

    boardContainer.appendChild(templateClone);

    //! AFFICHER LES CASES DEPART ET FIN

    const board = document.querySelectorAll(".cellRow");
    // console.log(board);
    const boardFirstRow = board[0].querySelectorAll(".cell");
    // console.log(boardFirstRow);
    const firstCell = boardFirstRow[0];
    // console.log(firstCell);
    firstCell.classList.add("cellStart");
// 

    const lastColumn = board.length - 1;
    // console.log(lastColumn);
    const boardLastRow = board[lastColumn].querySelectorAll(".cell");
    // console.log(boardLastRow);
    const lastCell = boardLastRow[boardLastRow.length - 1];
    // console.log(lastCell);
    lastCell.classList.add("cellEnd");

    //! AFFICHER LE CURSEUR A LA CASE 1

    firstCell.classList.add("cellCurrent");

  },

  checkDirection: function() {

    const currentCellCheck = document.querySelector(".cellCurrent");

    if (currentCellCheck.classList.contains("cellCurrent-right")) {

      app.right++;

      if (app.right > 5 || app.right < 0) {
        console.log(app.right);
        app.LooseModal();
      } else if (app.down > 3 || app.down < 0) {
        console.log(app.down);
        app.LooseModal();
      } else {
        app.moveForward();
        app.checkWin();
      }

      // app.moveForward();
      // app.checkWin();

    } else if (currentCellCheck.classList.contains("cellCurrent-bottom")){

      app.down++;

      if (app.right > 5 || app.right < 0) {
        console.log(app.right);
        app.LooseModal();
      } else if (app.down > 3 || app.down < 0) {
        console.log(app.down);
        app.LooseModal();
      } else {
        app.moveDown();
        app.checkWin();
      }

      // app.moveDown();
      // app.checkWin();

    } else if (currentCellCheck.classList.contains("cellCurrent-left")){

      app.right--;

      if (app.right > 5 || app.right < 0) {
        console.log(app.right);
        app.LooseModal();
      } else if (app.down > 3 || app.down < 0) {
        console.log(app.down);
        app.LooseModal();
      } else {
        app.moveLeft();
        app.checkWin();
      }

      // app.moveLeft();
      // app.checkWin();

    } else if (currentCellCheck.classList.contains("cellCurrent-top")){

      app.down--;

      if (app.right > 5 || app.right < 0) {
        console.log(app.right);
        app.LooseModal();
      } else if (app.down > 3 || app.down < 0) {
        console.log(app.down);
        app.LooseModal();
      } else {
        app.moveTop();
        app.checkWin();
      }

      // app.moveTop();
      // app.checkWin();

    }

  },

  moveForward: function() {

    const board = document.querySelectorAll(".cellRow");
    // console.log(board);
    const boardFirstRow = board[app.down].querySelectorAll(".cell");
    // console.log(boardFirstRow);
    const currentCell = boardFirstRow[app.right];
    // console.log(currentCell);

    //! Supprimer le curseur actuel

    let allCells = document.querySelectorAll(".cell");
    for (let index = 0; index < allCells.length; index++) {
      allCells[index].classList.remove("cellCurrent");

      allCells[index].classList.remove("cellCurrent-right");
      allCells[index].classList.remove("cellCurrent-left");
      allCells[index].classList.remove("cellCurrent-bottom");
      allCells[index].classList.remove("cellCurrent-top"); 
    }

    //! Ajouter le nouveau curseur

    currentCell.classList.add("cellCurrent");    

  },

  moveDown: function() {

    const board = document.querySelectorAll(".cellRow");
    // console.log(board);
    const boardFirstRow = board[app.down].querySelectorAll(".cell");
    // console.log(boardFirstRow);
    const currentCell = boardFirstRow[app.right];
    // console.log(currentCell);

    //! Supprimer le curseur actuel

    let allCells = document.querySelectorAll(".cell");
    for (let index = 0; index < allCells.length; index++) {
      allCells[index].classList.remove("cellCurrent");

      allCells[index].classList.remove("cellCurrent-right");
      allCells[index].classList.remove("cellCurrent-left");
      allCells[index].classList.remove("cellCurrent-bottom");
      allCells[index].classList.remove("cellCurrent-top");
    }

    //! Ajouter le nouveau curseur

    currentCell.classList.add("cellCurrent");

  },

  moveLeft: function() {

    const board = document.querySelectorAll(".cellRow");
    // console.log(board);
    const boardFirstRow = board[app.down].querySelectorAll(".cell");
    // console.log(boardFirstRow);
    const currentCell = boardFirstRow[app.right];
    // console.log(currentCell);

    //! Supprimer le curseur actuel

    let allCells = document.querySelectorAll(".cell");
    for (let index = 0; index < allCells.length; index++) {
      allCells[index].classList.remove("cellCurrent");

      allCells[index].classList.remove("cellCurrent-right");
      allCells[index].classList.remove("cellCurrent-left");
      allCells[index].classList.remove("cellCurrent-bottom");
      allCells[index].classList.remove("cellCurrent-top");
    }

    //! Ajouter le nouveau curseur
    
    currentCell.classList.add("cellCurrent");

  },

  moveTop: function() {

    const board = document.querySelectorAll(".cellRow");
    // console.log(board);
    const boardFirstRow = board[app.down].querySelectorAll(".cell");
    // console.log(boardFirstRow);
    const currentCell = boardFirstRow[app.right];
    // console.log(currentCell);

    //! Supprimer le curseur actuel

    let allCells = document.querySelectorAll(".cell");
    for (let index = 0; index < allCells.length; index++) {
      allCells[index].classList.remove("cellCurrent");

      allCells[index].classList.remove("cellCurrent-right");
      allCells[index].classList.remove("cellCurrent-left");
      allCells[index].classList.remove("cellCurrent-bottom");
      allCells[index].classList.remove("cellCurrent-top");
    }

    //! Ajouter le nouveau curseur

    currentCell.classList.add("cellCurrent");

  },

  turnDown: function() {

    console.log("down");

    document.querySelector(".cellCurrent").classList.add("cellCurrent-bottom");

  },

  turnRight: function() {

    console.log("right");

    document.querySelector(".cellCurrent").classList.add("cellCurrent-right");

  },

  turnUp: function() {

    console.log("Up");

    document.querySelector(".cellCurrent").classList.add("cellCurrent-top");

  },

  turnLeft: function() {

    console.log("left");

    document.querySelector(".cellCurrent").classList.add("cellCurrent-left");

  },



  checkWin: function() {

    let cellCurrent = document.querySelector(".cellCurrent");

    if (cellCurrent.classList.contains("cellEnd")) {

      window.setTimeout(function() {
        app.winModal();
      }, 50);

    }

  },

  winModal: function() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  },

  LooseModal: function() {

    // Get the modal
    var modal = document.getElementById("myModal-loose");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-loose")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  },

  reloadPage: function() {

    document.location.reload();

  },













  // handleLaunchScriptButton: function() {

  //   console.log("handleLaunchScriptButton()");

  //   // TODO

  //   const inputValue = document.querySelector("#userCode").value;
  //   const codeLines = inputValue.split('\n');
  //   console.log(codeLines);
    
  //   // TODO : get all lines as an array

    // window.setTimeout(function() {
    //   app.codeLineLoop(codeLines, 0);
    // }, 2000);
  // },
  // codeLineLoop: function(codeLines, index) {
  //   // Getting currentLine
  //   var currentLine = codeLines[index];
  //   console.log(currentLine);
  //   // eval(currentLine);

  //   // Increment
  //   index++;

  //   // if still a line to interpret
  //   if (index < codeLines.length) {
  //     // Recall same method (=> make a loop)
  //     window.setTimeout(function() {
  //       app.codeLineLoop(codeLines, index);
  //     }, 1000);
  //   } else {
  //     window.setTimeout(function() {
  //       app.checkSuccess();
  //     }, 1000);
  //   }
  // },
  // checkSuccess: function() {
  //   // TODO display if the game is won or not
  // }
};

document.addEventListener('DOMContentLoaded', app.init);
