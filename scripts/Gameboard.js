let Gameboard = ( () => {
    
    let gameboard = ['', '', '', '', '', '', '', '', ''];
    let player = 'X';
        
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
    
    events.on('nextPlayer', (data) => {
        player = data;
    })

    const makeMove = (cell, player) => { 
        gameboard[cell] = player;
        events.emit('moveMade', player)
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
            makeMove(i, player);
        })
    }

    $resetBtn.on('click', (e) => {
        Gameboard.reset();
    });

    return { render, reset, gameboard, $cells }

})();