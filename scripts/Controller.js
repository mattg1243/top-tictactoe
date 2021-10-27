let Controller = (function () {
     
    // cache DOM
    let $resetBtn = $('#reset');

    let xPlayer = Player('X');
    let oPlayer = Player('O');
    let gameboard = Gameboard.gameboard;
    let turnsCounter = 0;

    xPlayer.isTurn = true;
    
    const gameOver = (winner) => {
        alert(`${winner} wins this time!`)
        gameboard = []
        events.emit('winner', winner)
    }

    const checkWinner = (gb) => {
        // check horizontal winner
        if (gb[0] == gb[1] && gb[1] == gb[2] || gb[3] == gb[4] && gb[4] == gb[5] || gb[6] == gb[7] && gb[7] == gb[8]) {
            gameOver(xPlayer.isTurn ? 'X' : 'O')
        } 
        // check vertical winner 
        else if (gb[0] == gb[3] && gb[3] == gb[6] || gb[1] == gb[4] && gb[4] == gb[7] || gb[2] == gb[5] &&  gb[5] == gb[8]) {
            gameOver(xPlayer.isTurn ? 'X' : 'O')
        }
        // check diagonal winner
        else if(gb[0] == gb[4] && gb[4] == gb[8] || gb[2] == gb[4] && gb[4] == gb[6]) {
            gameOver(xPlayer.isTurn ? 'X' : 'O')
        }
        // check for cats game
        else if (turnsCounter == 9) {
            gameOver('No body')
        }
    }

    events.on('moveMade', () => {
        
        gameboard = Gameboard.gameboard;
        turnsCounter++;

        if (turnsCounter > 4) {
        checkWinner(gameboard);
       }

        if (xPlayer.isTurn) {
            xPlayer.isTurn = false;
            oPlayer.isTurn = true;
            events.emit('nextPlayer', 'O')
        } else if (oPlayer.isTurn) {
            xPlayer.isTurn = true;
            oPlayer.isTurn = false;
            events.emit('nextPlayer', 'X')
        }
    })

    $resetBtn.on('click', () => {
        Gameboard.reset()
    })

    const test = () => console.log('hello from Controller module')

    return { $resetBtn, test, checkWinner }

})();