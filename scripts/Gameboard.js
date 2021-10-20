let Gameboard = ( () => {
    
    let gameboard = ['', '', '', '', 'X', 'X', 'X', '', ''];
        
    // cache DOM
    let $el = $('#gameboard');
    let $cells = $el.find(".cell");
    let $resetBtn = $('#reset');
    
    // handlers
    const render = () => {
        for (let i = 0; i < 9; i++) {
            $cells[i].textContent = gameboard[i];
        }
    }
    
    const makeMove = (cell, player) => { 
        gameboard[cell] = player;
        player.isTurn = false;
        render();
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            makeMove(i, '');
        }
        render();
        console.log(gameboard);
    }

    // bind events
    for (let i = 0; i < 9; i++) {
        $cells[i].addEventListener('click', (e) => {
            makeMove(i, 'X');
        })
    }

    $resetBtn.on('click', (e) => {
        Gameboard.reset();
    });

    return { render, reset, gameboard, $cells }

})();