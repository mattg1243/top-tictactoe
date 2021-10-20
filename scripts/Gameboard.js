let Gameboard = (function() {
    
    let gameboard = ['', '', '', '', '', '', '', '', ''];
        
    // cache DOM
    this.$el = $('#gameboard');
    this.$cells = $(".cell");
    
    // bind events
    this.$cells.forEach(function (e,) {
        e.on('click', makeMove)
    })

    const makeMove = (cell, player) => { 
        gameboard[cell] = player;
    }

})();