let Controller = (function () {
     
    // cache DOM
    let $resetBtn = $('#reset');

    let xPlayer = Player('X');
    let oPlayer = Player('O');
    let gb = Gameboard.gameboard;
    let turnsCounter = 0;

    xPlayer.isTurn = true;
    
    events.on('moveMade', () => {
        
        turnsCounter++;
        if(turnsCounter > 6) {
        for (let i = 0; i < 9; i++) {
            if (gb[i] == gb[i + 3] && gb[i + 3] == gb[i + 6] && gb[i] != '' || 
                gb[i] == gb[i + 1] && gb[i + 1] == gb[i + 2] && gb[i] != '' ||  
                gb[i] == gb[i + 4] && gb[i + 4] == gb[i + 8] && gb[i] != '' ||
                gb[i + 2] == gb[i + 4] && gb[i + 4] == gb[i + 8]) {
                    events.emit('winner', xPlayer.isTurn ? 'X': 'O')
                    let winner = gb[i]
                    alert(`${winner} wins this time!`)
                    Gameboard.reset();
                }
            }
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

    const test = () => console.log('hello from Controller module')

    return { $resetBtn, test }

})();