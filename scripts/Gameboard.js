let Gameboard = (function() {
    
    let gameboard = ['', '', '', '', 'X', '', '', '', ''];
        
    // cache DOM
    let $el = $('#gameboard');
    let $cells = $el.find(".cell");
    
    // handlers
    const render = () => {
        $.each($cells, function (index) {
            $cells[index].textContent = gameboard[index];
        })
    }
    
    const reset = () => {
        gameboard = ['', '', '', '', '', '', '', '', ''];
        render();
    }

    const makeMove = (cell, player) => { 
        gameboard[cell] = player;
        player.isTurn = false;
        render();
    }

    // bind events - not currently working as it should; the array of elements isnt working with event binding
    $.each($cells, function (index) {
        $cells[index].addEventListener('click', makeMove(index, 'X'))
    })

    return { render, reset, gameboard, $cells }

})();