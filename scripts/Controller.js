let Controller = (function () {
     
    // cache DOM
    let $resetBtn = $('#reset');

    let xPlayer = Player('X');
    let oPlayer = Player('O');



    xPlayer.isTurn = true;

    const test = () => console.log('hello from Controller module')

    return { $resetBtn, test }

})();