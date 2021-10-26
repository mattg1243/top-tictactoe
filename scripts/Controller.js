let Controller = (function () {
     
    // cache DOM
    let $resetBtn = $('#reset');

    let xPlayer = Player('X');
    let oPlayer = Player('O');


    // needs to listen for makeMove event 
    xPlayer.isTurn = true;
    
    events.on('moveMade', () => {
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