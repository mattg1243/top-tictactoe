let Gameboard = ( () => {
    
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let player = 'X';
        
    // cache DOM
    let $el = $('#gameboard');
    let $cells = $el.find(".cell");
    
    // handlers
    const render = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] == 'O' || gameboard[i] == 'X') {
                $cells[i].textContent = gameboard[i]
            } else {$cells[i].textContent = ''}
        }
    }
    
    events.on('nextPlayer', (data) => {
        player = data;
    })

    const makeMove = (cell, player) => { 
        if (gameboard[cell] == 'X' || gameboard[cell] == 'O') {
            alert("Please choose a spot that is not already taken")
        }
        else {
            gameboard[cell] = player;
            events.emit('moveMade', player)
        }
    }

    const reset = () => {
        gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

    // need to find a way to avoid revealing gameboard 
    return { render, reset, gameboard }

})();