// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0){
        let bank = {};
        return bank;
    }
    else if(currency > 10000){
        let bank = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return bank;
    }
    else{
    let bank = {H:50, Q:25, D:10, N:5, P:1}
    let balance = currency%bank.H;
    bank.H = Math.floor(currency/bank.H);
    
    let balance2 = balance%bank.Q;
    bank.Q = Math.floor(balance/bank.Q);
    
    let balance3 = balance2%bank.D;
    bank.D = Math.floor(balance2/bank.D);
    
    let balance4 = balance3%bank.N;
    bank.N = Math.floor(balance3/bank.N);
    
    let balance5 = balance4%bank.P;
    bank.P = Math.floor(balance4/bank.P);
    for(key in bank){
        if (bank[key] == 0){
            delete bank[key];
        }
    }
    return bank;
    }
}
