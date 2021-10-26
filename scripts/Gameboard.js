let Gameboard = ( () => {
    
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let player = 'X';
        
    // cache DOM
    let $el = $('#gameboard');
    let $cells = $el.find(".cell");
    let $resetBtn = $('#reset');
    
    // handlers
    const render = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] == 'O' || gameboard[i] == 'X') {
                $cells[i].textContent = gameboard[i];
            }
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
            makeMove(i, i);
        }
        render();
        console.log(gameboard);
    }

    // bind events
    for (let i = 0; i < 9; i++) {
        $cells[i].addEventListener('click', (e) => {
            e.target.active = true;
            makeMove(i, player);
        })
    }

    $resetBtn.on('click', (e) => {
        Gameboard.reset();
    });

    events.on('winner', reset())

    return { render, reset, gameboard, $cells }

})();