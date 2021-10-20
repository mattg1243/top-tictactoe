const Player = (s) => { 

    // symbol will be defined upon creation by the Controller 
    let symbol = s;
    let isTurn = false;

    return { symbol, isTurn }
};