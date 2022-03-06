document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".modal")
    const squares = document.querySelectorAll('.tic-row div')
    const displayCurrentPlayer = document.querySelector('#current-player')
    const btn = document.querySelector(".reload")
    const textwinner = document.querySelector(".winner")

    let currentPlayer = 1;

    const winningArrays = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [2, 5, 8],
        [1, 4, 7],
        [6, 7, 8],
        [3, 4, 5],
        [6, 4, 2]

    ]

    function finish(winner) {
        modal.style.display = "flex"
        modal.style.transition = "transition: all 1s ease-in;"
        textwinner.innerHTML = winner
    }

    btn.addEventListener("click", () => location.reload())


    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            const square2 = squares[winningArrays[y][1]];
            const square3 = squares[winningArrays[y][2]];
            const square4 = squares[3];
            const square5 = squares[4];
            const square6 = squares[5];
            const square7 = squares[6];
            const square8 = squares[7];
            const square9 = squares[8];
            if (
                
                square1.classList.contains("x") &&
                square2.classList.contains("x") &&
                square3.classList.contains("x")
            ) {

                finish('Player One Wins!')
            }
            if(
                square1.classList.contains("o") &&
                square2.classList.contains("o") &&
                square3.classList.contains("o")
            ){

                finish('Player Two Wins!')
            }
            if(
                square1.classList.contains("taken") &&
                square2.classList.contains("taken") &&
                square3.classList.contains("taken") &&
                square4.classList.contains("taken") &&
                square5.classList.contains("taken") &&
                square6.classList.contains("taken") &&
                square7.classList.contains("taken") &&
                square8.classList.contains("taken") &&
                square9.classList.contains("taken") 

            ){
                console.log("Draw")
                finish('Draw')
            }

        }
    }


    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            if (!squares[i].classList.contains("taken")) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add("x")
                    squares[i].innerHTML = "X"
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                else if (currentPlayer == 2) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add("o")
                    squares[i].innerHTML = "O"
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            }else console.log("Cant Go Here")
            checkBoard();
        }

    }

})
